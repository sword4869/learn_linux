- [Compose 使用步骤](#compose-使用步骤)
- [docker-compose命令](#docker-compose命令)
  - [docker-compose.yml的意义](#docker-composeyml的意义)
  - [前台后台](#前台后台)
  - [所有容器和指定容器](#所有容器和指定容器)
  - [重新build镜像](#重新build镜像)
  - [列出](#列出)
  - [启动](#启动)
  - [停止删除](#停止删除)
- [docker-compose.yml](#docker-composeyml)
  - [基本](#基本)
  - [network](#network)
  - [links不知道](#links不知道)
  - [使用现成镜像和构建镜像](#使用现成镜像和构建镜像)
  - [GPU](#gpu)


---

## Compose 使用步骤

定义 `docker-compose.yml`。 编写构成应用程序的服务，这样它们可以在隔离环境中一起运行。

最后，执行 docker-compose up 命令来启动并运行整个应用程序。

## docker-compose命令

### docker-compose.yml的意义

`docker-compose` 所执行的命令都是在其中指定的容器，不相干的不操作。
```bash 
# 默认当前是docker-compose.yml。
docker-compose up

# 若不使用默认的docker-compose.yml 文件名：
$ docker-compose -f server.yml up
```

### 前台后台
```bash
docker-compose up  # 前台模式，直接打印logs，ctrl-c 停止容器并退出。

docker-compose up -d  # 后台模式
```
### 所有容器和指定容器
```bash
docker-compose up   # 所有容器

docker-compose up web   # 会启动相关依赖的容器
```

### 重新build镜像

```bash
docker-compose up           # 只有第一次构建，之后使用缓存

docker-compose up --build   # 强制重新构建镜像
```

或者 只想重新构建某个服务的镜像
```bash
docker-compose build --no-cache <service-name>
```
### 列出
```bash
# List images used by the created containers
docker-compose images

# List containers
docker-compose ps
docker-compose ps -a
```

### 启动
```bash
# Create and start containers。不会重复创建
docker-compose up

# 仅创建
docker-compose create

# 启动已经创建过的
docker-compose start | restart
```

### 停止删除
```bash
# 暂停 
docker-compose unpause

# 停止 | 强行停止
docker-compose stop | kill

# 删除已停止的
docker-compose rm       # 只删除已经停止的，还会问你删不删 yes or no
docker-compose rm -f    # yes
docker-compose rm -f -s   # 先都停了，即都删了

# Stop and remove containers, networks
docker-compose down     # docker-compose rm -f -s 的加强版，还删了network
```

## docker-compose.yml
### 基本

```yml
version: "3.2"

services:
  mysql:
    # 使用的镜像名
    image: mysql    
    
    # 容器名，不指定就默认 mydata-mysql-1，但不指定容器名，也不会重复创建，还是这个默认名的容器。
    container_name: mysql   
    # 端口
    ports: 
      - "3306:3306"     # 字符串可以，不加引号、单引号、双引号

    # 环境变量
    environment:      # 键值对形式  
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: 123
    environment:      # 列表形式。environment这里要求是单个元素，用等于号变成一整个字符串。
      - TZ=Asia/Shanghai
      - MYSQL_ROOT_PASSWORD=123
    
    # 挂载
    volumes:        
      - "./mysql/conf:/etc/mysql/conf.d"
      - "./mysql/data:/var/lib/mysql"
    # 重启
    restart: always 
    # 网络
    networks:   
      - new
networks:
  new:
    name: tjxt
```

### network

不写这个，也会创建默认网络。
```bash
[root@localhost mydata]# docker-compose up -d
[+] Running 2/2
 ✔ Network mydata_default    Created                                      0.2s
 ✔ Container mydata-mysql-1  Started                                      0.0s
```
docker-compose中定义的网络，在外边使用docker network ls命令并不能找到它们。

使用已存在的网络(docker network create)
```yml
# 未测试
networks:
  default:
    external:
      name: my-pre-existing-network
# 未测试
networks:
 demo:
  external: true
```

### links不知道

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231906861.png)

### 使用现成镜像和构建镜像

```yml
version: '3'

services:
  # dockerfile构建
  web:
    build: .    # 当前上下文  
  # 现成镜像      
  redis:
    image: redis    
```
### GPU

指定与服务的部署和运行有关的配置。只在 swarm 模式下才会有用。

那么什么是 swarm 模式？

1. To enable access only to GPU-0 and GPU-3 devices: `device_ids: ['0', '3']`

```yml
service:
  hhhhh:
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              device_ids: ["0"]
              capabilities: [gpu]
```
2. `count` can be used to limit the number of GPU devices assigned to a service container
```yml
devices:
- driver: nvidia
  count: 2
  capabilities: [gpu]
```

3. If no count or device_ids are set, **all** GPUs available on the host are going to be used by default.
