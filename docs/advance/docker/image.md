[toc]
## List image

### list

`ls/list`
```bash
$ docker image ls
REPOSITORY               TAG               IMAGE ID       CREATED        SIZE
python                   3.8-slim-buster   9f9436d44487   2 months ago   114MB
```

这个镜像的名字，`python` Respository 和 `3.8-slim-buster` Tag, 一起构成 `python:3.8-slim-buster`。

- 镜像的命名规则，`user-name/image-name:tag`。
  比如`sandal33s/helloworld:1.0`，`sandal33s/helloworld:v3`。
- 默认 user-name 和默认 Tag : 
  官方镜像默认`user-name`是`library`，且可以不显示。
  默认 Tag 是`latest`，且可以不显示。
  比如，`ubuntu`就是`library/ubuntu:latest`。

### Specify list

> according name
```bash
$ docker image list ubuntu
$ docker image list ubuntu:18:04
```

> according time

`-f/--filter`

This is the time to create, not the time to pull.
```bash
# after 
$ docker image list -f since=ubuntu

# before
$ docker image list -f before=ubuntu
```

> only get image id

`-q/--quiet`
```bash
$ docker image list -q
cd70c686e299
2c84f43aada3
e983e5d89352
```

This is used to pass the result to remove command.

## Remove image

要删除镜像，就得先把和它的容器都删完了，然后才能删镜像。这是因为Layer filesystem，最下层是镜像，所以删除镜像就有容器依赖丢失问题。

### remove

```bash
$ docker image list
REPOSITORY               TAG               IMAGE ID       CREATED        SIZE
kalilinux/kali-rolling   latest            cd70c686e299   2 days ago     126MB


# short id, long id, name
$ docker image rm cd7 cd70c686e299 ubuntu:18.04
# 简写 rmi
$ docker rmi cd7
```


### dangling image

quick remove all dangling images.
```bash
$ docker image prune
```

## Create
### Get remote sources

When you use the `docker pull` or `docker run` commands, the required images are pulled from your configured registry.

```bash
$ docker pull ubuntu:18.04
```
```bash
$ docker run ubuntu:18.04
```

### Commit

```bash
# docker commit <container name> <image name>
$ docker commit webserver nginx:v2
```
一些特殊的应用场合，比如被入侵后保存现场等。

使用 docker commit 意味着所有对镜像的操作都是黑箱操作，生成的镜像也被称为 黑箱镜像。

所以，不要使用 docker commit 定制镜像，定制镜像应该使用 Dockerfile 来完成。

### Dockerfile
[the_dockerfile.md](./2-image/the_dockerfile.md)

## Push to Registry

```bash
$ docker image push
```
your image is pushed to your configured registry.

## History
```bash
$ docker image history python-docker-dev
IMAGE          CREATED        CREATED BY                                      SIZE      COMMENT
e983e5d89352   2 months ago   CMD ["python3" "-m" "flask" "run" "--host=0.…   0B        buildkit.dockerfile.v0
<missing>      2 months ago   RUN /bin/sh -c pip3 install -r requirements.…   163MB     buildkit.dockerfile.v0
<missing>      2 months ago   COPY . . # buildkit                             3.79kB    buildkit.dockerfile.v0
<missing>      2 months ago   WORKDIR /app                                    0B        buildkit.dockerfile.v0
<missing>      2 months ago   /bin/sh -c #(nop)  CMD ["python3"]              0B
<missing>      2 months ago   /bin/sh -c set -eux;   savedAptMark="$(apt-m…   9.46MB
<missing>      2 months ago   /bin/sh -c #(nop)  ENV PYTHON_GET_PIP_SHA256…   0B
<missing>      2 months ago   /bin/sh -c #(nop)  ENV PYTHON_GET_PIP_URL=ht…   0B
<missing>      2 months ago   /bin/sh -c #(nop)  ENV PYTHON_SETUPTOOLS_VER…   0B
<missing>      2 months ago   /bin/sh -c #(nop)  ENV PYTHON_PIP_VERSION=21…   0B
<missing>      2 months ago   /bin/sh -c set -eux;  for src in idle3 pydoc…   92B
<missing>      2 months ago   /bin/sh -c set -eux;   savedAptMark="$(apt-m…   28.5MB
<missing>      3 months ago   /bin/sh -c #(nop)  ENV PYTHON_VERSION=3.8.12    0B
<missing>      3 months ago   /bin/sh -c #(nop)  ENV GPG_KEY=E3FF2839C048B…   0B
<missing>      3 months ago   /bin/sh -c set -eux;  apt-get update;  apt-g…   7.06MB
<missing>      3 months ago   /bin/sh -c #(nop)  ENV LANG=C.UTF-8             0B
<missing>      3 months ago   /bin/sh -c #(nop)  ENV PATH=/usr/local/bin:/…   0B
<missing>      3 months ago   /bin/sh -c #(nop)  CMD ["bash"]                 0B
<missing>      3 months ago   /bin/sh -c #(nop) ADD file:c51141702f568a28a…   69.3MB
```

## load tar 离线加载



```bash
# -o 来指定输出文件的名称。
$ docker save -o xxx.tar myimage:latest

# 保存多个镜像到同一个文件中，使用 docker load 命令时会加载所有包含的镜像。
$ docker save -o xxx.tar myimage:latest anotherimage:latest
```



```bash
# -i 指定导入的文件路径
$ docker load -i xxx.tar
```

