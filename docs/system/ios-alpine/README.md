# 资料获取
[ish的wiki](https://github.com/ish-app/ish/wiki)

# 不同之处
- 进入root
```bash
sudo su -
```

- 写脚本
```bash
#! /bin/sh
```

# 费劲
配置源见`init_config.sh`，基本程序见`apk_add.sh`。

PS：pip下个库，还得本地编译，安一个numpy编译个几天（ipad pro9.7）...

# sshd & sshd
## ssh
连接别的设备，没啥问题。
```bash
ssh root@192.168.1.10
```
## sshd
```bash
$ echo "PermitRootLogin yes" >> /etc/ssh/sshd_config

$ rc-service sshd start
* service sshd added to runlevel default
$ rc-status
Runlevel: default
 sshd                                [ started  ]
Dynamic Runlevel: hotplugged         [ started  ]
Dynamic Runlevel: needed/wanted      [ started  ]
Dynamic Runlevel: manual             [ started  ]
```
然后，出问题，连接自己`ssh root@localhost`报错`banner exchange: Connection to ::1 port 2200: Broken pipe`。有关的帖子：[https://github.com/ish-app/ish/issues/1344](https://github.com/ish-app/ish/issues/1344)
然后，别的设备连接此IOS设备，一是连不上ipad的ip地址（这肯定的，ish内的ip和ipad的ip应该不一样），二是无法获取ish内的ip地址（`ip addr`失败，`ifconfig`失败，好像是没有网络设备接口？）