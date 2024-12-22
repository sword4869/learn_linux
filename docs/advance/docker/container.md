[toc]

## docker run: Create and Start

### 基本

```bash
# 使用指定镜像来创建一个容器
$ docker [container] run <image name>
```
注意：此时没有指定名字，那么实际上容器的名字是随机分配的。因为名字不同，所以创建出来的容器都是一个新的容器。


When you run this command, the following happens:

1. The Docker client contacted the Docker daemon. If you do not have the ubuntu image locally, the Docker daemon pulls it from your configured registry, as though you had run `docker pull ubuntu` manually.

2. Docker creates a new container, as though you had run a `docker container create` command manually.

3. Docker allocates a read-write filesystem to the container, as its final layer. This allows a running container to create or modify files and directories in its local filesystem.

4. Docker creates a network interface to connect the container to the default network, since you did not specify any networking options. This includes assigning an IP address to the container. By default, containers can connect to external networks using the host machine’s network connection.



### -itd 交互和后台

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

前两种完全就是废物. 后面两种还有点作用, 用来执行一次性的命令. 区别就是前者, 直接打印到host控制台, 后者还得用`docker [container] logs xxx`来查看.

PS: 其实还是有能用的地方, 就是执行有前台任务的镜像, 比如 nginx.
#### -it交互

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


#### 🚀启动时执行命令

上面的指定终端其实就是启动时执行命令.

```bash
$ docker run ubuntu cat /proc/version
Linux version 5.10.16.3-microsoft-standard-WSL2 (oe-user@oe-host) (x86_64-msft-linux-gcc (GCC) 9.3.0, GNU ld (GNU Binutils) 2.34.0.20200220) #1 SMP Fri Apr 2 22:23:49 UTC 2021
```

If you have many commant to run, you can write a script in your local device, `docker run ubuntu myscript.sh`




#### -d 后台

```bash
$ docker run -d ubuntu
```
`-d/--detach` - run the container in detached mode (in the background)

如果不使用 `-d` 参数运行容器，容器会把输出的结果 (STDOUT) 打印到宿主机上面。

如果使用了 `-d` 参数运行容器。此时容器会在后台运行并不会把输出的结果 (STDOUT) 打印到宿主机上面(输出结果可以用 `docker logs` 查看)。


当容器正在后台运行时，来进入处于后台的容器。
```bash
# docker containeexec -it my_ubuntu /bin/bash
$ docker exec -it my_ubuntu /bin/bash
```

### --name 容器命名

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
如果指定了名字，那么再次运行相同的命令，也不会覆盖老的容器，而是**报错**，想要重用就得**删除原来的容器**。

### -p 端口映射

```bash
$ docker run -d -p 8000:80 docker/getting-started
8094c7cb8aa7e2ec55c78fbe6c80ccf7f7a5c440a4bd979584cf27fc074f2551

# 查看端口方式1
$ docker container ls -l
CONTAINER ID   IMAGE                    COMMAND                  CREATED          STATUS          PORTS                  NAMES
8094c7cb8aa7   docker/getting-started   "/docker-entrypoint.…"   25 seconds ago   Up 24 seconds   0.0.0.0:8000->80/tcp   hopeful_faraday
```
`-p/--publish [本地]:[容器]`

`0.0.0.0:8000->80/tcp`表示container使用tcp将80映射到主机的`localhost:8000`端口。现在在主机浏览器输入`http://localhost:8000`就能进入前端。

```bash
$ docker run -d -P docker/getting-started        
01691b85739ed2f838cf499573c99ae13dd025aaf0c1915827b8581943296be5

# 查看端口方式2
$ docker port happy_galois
80/tcp -> 0.0.0.0:49153
```
`-P`: 随机映射。现在在主机浏览器输入`http://localhost:49153`就能进入前端。



### -v 挂载Volume
> 直接文件、文件夹

`-v/--volume`: `<本地路径>:<容器内路径>`.

```bash
docker run -p 6379:6379 --name redis \
    -v /mydata/redis/data:/data  \
    -v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf \
    -d redis redis-server
```

> docker volume

```bash
$ docker volume create myvolume     # 创建数据卷`myvolume`
$ docker volume ls                  # 列出
$ docker volume rm myvolume         # 删除
$ docker volume inspect myvolume	# 查看volume在真实主机的文件位置
```
```bash
$ docker run -v myvolume:/var/lib/mysql mysql
```


### --gpus GPU

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

### --restart 自启动

```bash
docker run --name nacos1 \
  --restart=always \
  -e MODE=standalone \
  -p 8848:8848 \
  -d \
  nacos/nacos-server:1.4.1
```
不加–restart=always参数创建，重启docker之后，容器并没有跟着启动。加了，就跟着启动。

### --net 网络模式

网络的作用：同一个网路中的容器可以通过名称互相访问，而不需要知道对方的 IP 地址（无需担心容器重启后 IP 地址发生变化）。

默认桥接`bridge`, 主机`host`, `container`, `none`

```bash
docker network ls									列出 Docker 网络
docker network rm [network]							删除
docker network create [network]						创建一个新的 Docker 网络
docker network disconnect [network] [container]		将容器从指定的 Docker 网络中断开连接 
docker network connect [network] [container]		🚀将容器连接到指定的 Docker 网络
```

```bash
# 运行容器时使用新的网络：
docker run --net [network] [image]
```

https://blog.csdn.net/succing/article/details/122433770

### --privileged=true

给容器添加了所有的capabilities权限（例如加载内核模块、进行网络配置），允许容器访问主机的所有设备（直接操作硬件设备）。

在可能的情况下，我们应该尽量使用其他更细粒度的权限控制手段，例如通过`--cap-add`或`--device`参数来分别添加必要的capabilities或设备访问权限

```bash
# 添加单个capability
docker run --cap-add=NET_ADMIN -it ubuntu

# 添加设备访问权限
docker run --device=/dev/sda:/dev/xvdc -it ubuntu
```



## List
> running
```bash
# or `docker ps`
$ docker container ls     # 不可省略的container
CONTAINER ID   IMAGE                    COMMAND   CREATED       STATUS         PORTS     NAMES
53d34d961f35   python:3.8-slim-buster   "bash"    2 hours ago   Up 3 seconds             angry_euler
```
> all, include exited: -a
```bash
# or `docker ps -a`
#   -a, --all. Show all containers (default shows just running)
$ docker container ls -a
CONTAINER ID   IMAGE                    COMMAND                  CREATED        STATUS                      PORTS     NAMES
2a6c4ac291c4   python:3.8-slim-buster   "bash"                   2 hours ago    Exited (0) 2 hours ago                naughty_pascal
```

> last: -l

```bash
# or `docker ps -l`
# -l, --latest. Show the latest created container (includes all states)
$ docker container ls -l
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS     NAMES
5e62446db54c   test33    "/bin/sh -c 'python3…"   5 minutes ago   Exited (0) 5 minutes ago             busy_bouman
```
> 显示完整字段 --no-trunc 

```bash
t@localhost miaoruntu]# docker ps --no-trunc 
CONTAINER ID                                                       IMAGE                                      COMMAND                                                                               CREATED             STATUS              PORTS                                                                                              NAMES
1af206612ed1a3e2fd1c3ccca1a7e0f915d3b0a934b448978f321d81533afccd   minio/minio:RELEASE.2022-09-07T22-25-02Z   "/usr/bin/docker-entrypoint.sh server /data --console-address :9001 -address :9000"   19 months ago       Up 37 minutes       0.0.0.0:9000-9001->9000-9001/tcp                                                                   minio
ca6146074a333b59f2ea9d40b70122310148b760a661ce445c49ec5658e89bce   elasticsearch:7.12.1                       "/bin/tini -- /usr/local/bin/docker-entrypoint.sh eswrapper"                          19 months ago       Up 37 minutes       0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp                                                     elasticsearch
87a556e98a6c8b77439e1cc06f2553f2622977a2c82c4d618a5f6e357ea56a8d   rabbitmq:3.8.34                            "docker-entrypoint.sh rabbitmq-server"                                                20 months ago       Up 37 minutes       4369/tcp, 0.0.0.0:5672->5672/tcp, 5671/tcp, 15691-15692/tcp, 25672/tcp, 0.0.0.0:15672->15672/tcp   rabbitmq
```

> format

```
.ID               容器ID
.Image            镜像ID
.Command          Quoted command
.CreatedAt        创建容器的时间点.
.RunningFor       从容器创建到现在过去的时间.
.Ports            暴露的端口.
.Status           容器状态.
.Size             容器占用硬盘大小.
.Names            容器名称.
.Labels           容器所有的标签.
.Label            指定label的值 例如'{{.Label “com.docker.swarm.cpu”}}’
.Mounts           挂载到这个容器的数据卷名称
```

```bash
[root@host ~]# docker ps -a --format "table {{.Image}}\t{{.Names}}\t{{.Status}}"
IMAGE                               NAMES         STATUS
nginx                               nginx         Up 39 minutes
nacos/nacos-server:v2.1.0-slim      nacos         Up 39 minutes
mysql                               mysql         Up 39 minutes
```


tj-user tj-trade tj-search tj-message tj-media tj-pay tj-gateway tj-exam tj-course tj-auth tj-data 
## Start|Stop|Restart|Remove
```bash
$ docker [container] start|stop|restart|rm <container name>
```

Notice: When you restart a container, it starts **with the same flags or commands** that it was originally started with. 

可以一次性操纵多个容器

```bash
$ docker stop nacos redis mysql
nacos
redis
mysql
```



## Operate a running container

要在启动后才能执行命令

```bash
$ docker [container] exec <container name or id>
```

比如

```bash
$ docker exec my_ubuntu cat /proc/version
Linux version 5.10.16.3-microsoft-standard-WSL2 (oe-user@oe-host) (x86_64-msft-linux-gcc (GCC) 9.3.0, GNU ld (GNU Binutils) 2.34.0.20200220) #1 SMP Fri Apr 2 22:23:49 UTC 2021
```
```bash
# 让后台的调出终端
# 而且这里必须指定一个COMMAND，不会自适应调出终端，只能手动指定bash。
$ docker exec -it my_ubuntu bash
root@011e5ebaf23e:/#
```






## Remove

### Automaically remove

`--rm`
```bash
$ docker run --rm -it ubuntu
```

### Manually remove exited

正在运行的容器要停止后才能删除。

```bash
# 一次能删除多个
# rm 写 remove也行
$ docker [container] rm my_ubuntu agitated_moser
```
挂载的volume不会被删.

### Remove all exited

如果数量太多要一个个删除可能会很麻烦，用下面的命令可以清理掉所有处于终止状态的容器。
```bash
# 不可省略的container
$ docker container prune
```

## 自启动

方式1： 创建时，`docker run -d --restart always tomcat`

方式2： 修改已经创建好的，`docker [container] update --restart always 容器名字`

## logs 日志

```bash
$ docker [container] logs -f -t my_ubuntu
```
- `-f` : 跟踪日志输出

- `-t` : 显示时间戳

## cp

需要容器正在运行

```bash
$ docker [container] cp <A> <B>
```
容器的文件写法是`容器名:路径`

```bash
# 将容器的脚本拷贝到本地
docker cp rmqnamesrv:/home/rocketmq/rocketmq-5.1.0/bin/runserver.sh  ./bin
```
