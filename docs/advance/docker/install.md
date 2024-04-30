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
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 
```

安装 docker，以及 docker-cli
```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```