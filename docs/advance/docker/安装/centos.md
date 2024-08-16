
## docker
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
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

## docker-compose

```bash
sudo curl -L https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

wget -c https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-`uname -s`-`uname -m` -O /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

$ docker-compose --version
 
docker-compose version 1.16.1, build 1719ceb
```