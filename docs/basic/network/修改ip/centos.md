```bash
yum install -y net-tools
```



```bash
# 可以非图形化设置网关
# sudo vim /etc/sysconfig/network-scripts/ifcfg-ens33 
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none      # none，用固定ip; dhcp，动态
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=28711c7c-1216-454e-a454-b7c9a08e71e6
DEVICE=ens33
ONBOOT=yes          # yes,开机启动
IPV6_PRIVACY=no
IPADDR=192.168.137.3    # ip
PREFIX=24
GATEWAY=192.168.137.2   # 网关
DNS1=8.8.8.8            # DNS也可以同网关，委托给网关获取DNS
```
```bash
# 应用完后，重启后才变化
$ systemctl restart network
$ ifconfig 
..... xxx.xxx.xxx.3
```



# 重启网络失败 Job for network.service failed

```bash
Restarting network (via systemctl): Job for network.service failed because the control process exited with error code.
See “systemctl status network.service” and “journalctl -xe” for details.
```

原因：

在CentOS系统上，目前有NetworkManager和network两种网络管理工具。如果两种都配置会引起冲突，而且NetworkManager在网络断开的时候，会清理路由，如果一些自定义的路由，没有加入到NetworkManager的配置文件中，路由就被清理掉，网络连接后需要自定义添加上去。

解决方法：

1.将networkmanager服务停了

```bash
systemctl stop NetworkManager
systemctl disable NetworkManager
```

2.重启网卡，就ok了

```bash
systemctl restart network
```
