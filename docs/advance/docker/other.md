# info

```bash
docker info：显示 Docker 系统信息
docker version：显示 Docker 版本信息
```
# storage

```bash
$ docker system df
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          8         4         1.762GB   1.076GB (61%)
Containers      5         0         525.9kB   525.9kB (100%)
Local Volumes   4         2         383.7MB   191.9MB (50%)
Build Cache     60        0         396.5MB   396.5MB
```

# ssh
可以在docker容器中, 直接ssh主机, 因此可以用scp互通文件

(但主机ssh容器好像不行, 容器ssh外部服务器也不行).



