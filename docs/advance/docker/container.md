- [1. Create and Start](#1-create-and-start)
  - [1.1. 基本](#11-基本)
  - [1.2. 交互和后台](#12-交互和后台)
    - [1.2.1. it交互](#121-it交互)
    - [1.2.2. 启动时执行命令](#122-启动时执行命令)
    - [1.2.3. 后台](#123-后台)
      - [1.2.3.1. log](#1231-log)
      - [1.2.3.2. 进入后台](#1232-进入后台)
  - [1.3. 容器命名](#13-容器命名)
  - [1.4. 端口映射](#14-端口映射)
  - [1.5. 挂载Volume](#15-挂载volume)
  - [1.6. GPU](#16-gpu)
- [2. List](#2-list)
- [3. Start|Stop|Restart](#3-startstoprestart)
- [4. Operate a running container](#4-operate-a-running-container)
- [5. Remove](#5-remove)
  - [5.1. Automaically remove](#51-automaically-remove)
  - [5.2. Manually remove exited](#52-manually-remove-exited)
  - [5.3. Remove all exited](#53-remove-all-exited)

---

## 1. Create and Start

### 1.1. 基本

```bash
# 使用指定镜像来创建一个容器
# or docker container run <image name>
$ docker run <image name>
```
注意1：这个名字不是创建出来的容器的名字，而是镜像的名字。实际上容器的名字是随机分配的。

注意2：创建出来的容器都是不同的个体，都是一个新的容器，而不是覆盖老的容器。尤其是你哪怕指定同样的名字，也不能覆盖，而是报错，提示你想要重用就得删除原来的容器。


When you run this command, the following happens:

1. The Docker client contacted the Docker daemon. If you do not have the ubuntu image locally, the Docker daemon pulls it from your configured registry, as though you had run `docker pull ubuntu` manually.

2. Docker creates a new container, as though you had run a `docker container create` command manually.

3. Docker allocates a read-write filesystem to the container, as its final layer. This allows a running container to create or modify files and directories in its local filesystem.

4. Docker creates a network interface to connect the container to the default network, since you did not specify any networking options. This includes assigning an IP address to the container. By default, containers can connect to external networks using the host machine’s network connection.



### 1.2. 交互和后台

> 都可以start

```bash
# 进入bash, 但是bash里exit后容器状态是Exited
$ docker run -it ubuntu bash

# 创建完的状态是up, bash里exit后容器状态还是up
$ docker run -itd ubuntu bash
```
这两种方式都能进入bash.

想直接进入bash, 就用前者.

想开一个容器挂着, 用后者.

> 不可start

```bash
# 即死状态
# $ docker run ubuntu
# $ docker run -d ubuntu
# $ docker run ubuntu ls
# $ docker run -d ubuntu ls
```

创建完后都一样是 Exited, 而且你start不了, 一直是Exited状态. 所以我称之为即死状态.

前两种完全就是废物. 后面两种还有点作用, 用来执行一次性的命令. 区别就是前者, 直接打印到host控制台, 后者还得用`docker container logs xxx`来查看.

PS: 其实还是有能用的地方, 就是执行有前台任务的镜像, 比如 nginx.
#### 1.2.1. it交互

用于可以交互终端的镜像，对不能交互的镜像来说该参数被忽略：

两个一起的参数`-it`：

- `-i`: 交互

- `-t`: 进入终端

> 不指定终端，就自动选择适合的终端

ubuntu选择bash
```bash
$ docker run -it ubuntu
root@007c6081700d:/#
```

python选择python解释器
```bash
$ docker run -it python:3.8-slim-buster
Python 3.8.12 (default, Feb 26 2022, 00:33:25) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

> 指定终端

```bash
$ docker run -it python:3.8-slim-buster bash
```


#### 1.2.2. 启动时执行命令

上面的指定终端其实就是启动时执行命令.

```bash
$ docker run ubuntu cat /proc/version
Linux version 5.10.16.3-microsoft-standard-WSL2 (oe-user@oe-host) (x86_64-msft-linux-gcc (GCC) 9.3.0, GNU ld (GNU Binutils) 2.34.0.20200220) #1 SMP Fri Apr 2 22:23:49 UTC 2021
```

If you have many commant to run, you can write a script in your local device, `docker run ubuntu myscript.sh`




#### 1.2.3. 后台

```bash
$ docker run -d ubuntu
```
`-d/--detach` - run the container in detached mode (in the background)

如果不使用 `-d` 参数运行容器，容器会把输出的结果 (STDOUT) 打印到宿主机上面。

如果使用了 `-d` 参数运行容器。此时容器会在后台运行并不会把输出的结果 (STDOUT) 打印到宿主机上面(输出结果可以用 `docker logs` 查看)。

##### 1.2.3.1. log

```bash
# or docker logs <container name or id>
$ docker container logs my_ubuntu
hello
```
- `f` : 跟踪日志输出

- `t` : 显示时间戳

##### 1.2.3.2. 进入后台

当容器正在后台运行时，来进入处于后台的容器。
```bash
$ docker container exec -it my_ubuntu /bin/bash
```

### 1.3. 容器命名

> 默认是随机命名
```bash
$ docker run ubuntu

$ docker container ls -l 
... NAMES
... hopeful_faraday
```

> 指定名字 name
```bash
# docker run --name <container name> <image name>
$ docker run --name my_ubuntu ubuntu
```
### 1.4. 端口映射

```bash
$ docker run -d -p 8000:80 docker/getting-started
8094c7cb8aa7e2ec55c78fbe6c80ccf7f7a5c440a4bd979584cf27fc074f2551

# 查看端口方式1
$ docker container ls -l
CONTAINER ID   IMAGE                    COMMAND                  CREATED          STATUS          PORTS                  NAMES
8094c7cb8aa7   docker/getting-started   "/docker-entrypoint.…"   25 seconds ago   Up 24 seconds   0.0.0.0:8000->80/tcp   hopeful_faraday
```
`-p/--publish [host]:[container]`: map port 8000 of the host to port 80 in the container。`0.0.0.0:8000->80/tcp`表示container使用tcp将80映射到主机的`localhost:8000`端口。现在在主机浏览器输入`http://localhost:8000`就能进入前端。

```bash
$ docker run -d -P docker/getting-started        
01691b85739ed2f838cf499573c99ae13dd025aaf0c1915827b8581943296be5

# 查看端口方式2
$ docker port happy_galois
80/tcp -> 0.0.0.0:49153
```
`-P`: 随机映射。现在在主机浏览器输入`http://localhost:49153`就能进入前端。



### 1.5. 挂载Volume

```bash
$ docker volume create myvolume     # 创建数据卷`myvolume`
$ docker volume ls                  # 列出
$ docker volume rm myvolume         # 删除
```


```bash
$ docker run -v myvolume:/var/lib/mysql mysql
```
`-v/--volume`: `<local_path>:<container_path>`.
### 1.6. GPU

!!!info re-requisite
    - Nvidia GPU hardware in your PC host.
    - installed Nvidia Driver in your PC host(can run `nvidia-smi`)
    - don't need to install CUDA in your PC host(we can install it's any version in docker container)


<https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html>

`nvidia-docker`和`nvidia-docker2`不是同一个东西，`nvidia-docker`是老掉牙的东西。

```
└─ libnvidia-container1 (version)
├─ libnvidia-container-tools (version)
│    └─ libnvidia-container1 (>= version)
├─ nvidia-container-toolkit (version)
│    └─ libnvidia-container-tools (>= version)
└─ nvidia-container-runtime
│    └─ nvidia-container-toolkit (>= version, << 2.0.0)
└─ nvidia-docker2
     ├─ docker-ce || docker-ee || docker.io
     └─ nvidia-container-toolkit (>= version)
```

`nvidia-docker2`包含了`nvidia-container-toolkit`，还支持Kubernetes。所以直接安装`nvidia-docker2`。

```bash
# distribution=ubuntu22.04
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \
            sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
            sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

sudo apt-get update
sudo apt-get install -y nvidia-docker2
sudo systemctl restart docker
```

Let's run a test!
```
$ sudo docker run --rm --gpus all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi
Thu Nov 24 09:14:50 2022       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 515.65.01    Driver Version: 515.65.01    CUDA Version: 11.7     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0 Off |                  N/A |
|  0%   35C    P8     5W / 250W |      8MiB / 11264MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
|   1  NVIDIA GeForce ...  Off  | 00000000:03:00.0 Off |                  N/A |
|  0%   34C    P8     5W / 250W |      8MiB / 11264MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|    0   N/A  N/A    261440      G   /usr/lib/xorg/Xorg                  4MiB |
|    1   N/A  N/A    261440      G   /usr/lib/xorg/Xorg                  4MiB |
+-----------------------------------------------------------------------------+

```

use flag `--gpus ARG` in `docker run`. (since docker 19.03 which adds support for the `--gpu` option, and don't need `--runtime=nvidia`):
- `--gpus all`:Exposes all GPUs.
- `--gpus '"device=0,2"'`:Exposes the first and third GPUs.
- `--gpus 2`: Exposes 2 GPUs.
- `--gpus device=GPU-3a23c669-1f69-c64e-cf85-44e9b07e7a2a`: Exposes that specific GPU.

## 2. List
> running
```bash
# or `docker ps`
$ docker container ls
CONTAINER ID   IMAGE                    COMMAND   CREATED       STATUS         PORTS     NAMES
53d34d961f35   python:3.8-slim-buster   "bash"    2 hours ago   Up 3 seconds             angry_euler
```
> all, include exited
```bash
# or `docker ps -a`
#   -a, --all. Show all containers (default shows just running)
$ docker container ls -a
CONTAINER ID   IMAGE                    COMMAND                  CREATED        STATUS                      PORTS     NAMES
2a6c4ac291c4   python:3.8-slim-buster   "bash"                   2 hours ago    Exited (0) 2 hours ago                naughty_pascal
```

> last

```bash
# or `docker ps -l`
# -l, --latest. Show the latest created container (includes all states)
$ docker container ls -l
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS     NAMES
5e62446db54c   test33    "/bin/sh -c 'python3…"   5 minutes ago   Exited (0) 5 minutes ago             busy_bouman
```
## 3. Start|Stop|Restart
```bash
# docker start|stop|restart <container name>
$ docker container start|stop|restart <container name>
```

Notice: When you restart a container, it starts **with the same flags or commands** that it was originally started with. 这很方便。

## 4. Operate a running container

要在启动后才能执行命令

```bash
# or docker exec <container name or id>
$ docker container exec <container name or id>
```

比如

```bash
$ docker container exec my_ubuntu cat /proc/version
Linux version 5.10.16.3-microsoft-standard-WSL2 (oe-user@oe-host) (x86_64-msft-linux-gcc (GCC) 9.3.0, GNU ld (GNU Binutils) 2.34.0.20200220) #1 SMP Fri Apr 2 22:23:49 UTC 2021
```
```bash
# 让后台的调出终端
# 而且这里必须指定一个COMMAND，不会自适应调出终端，只能手动指定bash。
$ docker exec -it my_ubuntu bash
root@011e5ebaf23e:/#
```






## 5. Remove

### 5.1. Automaically remove

`--rm`
```bash
$ docker run --rm -it ubuntu
```

### 5.2. Manually remove exited

正在运行的容器要停止后才能删除。

```bash
# or docker rm [<container name or id>]
# 一次能删除多个
$ docker container rm my_ubuntu agitated_moser
```
挂载的volume不会被删.

```bash
# 一次性
$ docker container stop `docker container ls -aq`
$ docker container rm `docker container ls -aq`
```

### 5.3. Remove all exited

如果数量太多要一个个删除可能会很麻烦，用下面的命令可以清理掉所有处于终止状态的容器。
```
$ docker container prune
```