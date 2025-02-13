[toc]

## centos

### docker

1、卸载系统之前可能安装的 docker（防止冲突）
卸载系统之前可能安装的 docker（防止版本不一致，发生冲突）

```bash
sudo yum remove docker \
    docker-client \
    docker-client-latest \
    docker-common \
    docker-latest \
    docker-latest-logrotate \
    docker-logrotate \
    docker-engine
```
2、安装 Docker-CE 基本环境
安装必须的依赖
```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

设置 docker repo 的 yum 位置
```bash
# 由于没梯子，被墙了: [Errno 14] curl#35 - "TCP connection reset by peer"
# sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 

# 换成阿里源
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

安装 docker，以及 docker-cli
```bash
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

### docker-compose

```bash
sudo curl -L https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

wget -c https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-`uname -s`-`uname -m` -O /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

$ docker-compose --version
 
docker-compose version 1.16.1, build 1719ceb
```

## windows

### 安装

“docker 现在既可以使用wsl2作为后端，也可以使用Hyper-V 作为后端”。但并不是说，我们可以不用开启 Hyper-V。因为wsl2后端本身就需要开启 Hyper-V。无语！



wsl2安装过程： [setup.md](..\..\..\system\wsl2\setup.md) 

（2）Docker Desktop 

[Windows | Docker Docs](https://docs.docker.com/desktop/setup/install/windows-install/)

不要双击直接安装
```bash
"./Docker Desktop Installer.exe"  install --installation-dir="D:\\Program\\Docker"
```



### 镜像默认位置迁移

无须通过wsl来迁移：[【Docker】win10上修改docker的镜像文件存储位置（九）- 通过WSL2修改_docker镜像存储路径修改-CSDN博客](https://blog.csdn.net/u013948858/article/details/111464534)



直接 Desktop设置

​	镜像默认安装在`%UserProfile%\AppData\Local\Docker\wsl`目录下

​	![image-20241207121639178](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202412071216228.png)

​	点击Apply & restart按钮，然后docker会自动把原来目录下的文件迁移到新目录下的子目录 DockerDesktopWSL（自动创建）。