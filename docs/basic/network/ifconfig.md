```bash
yum install -y net-tools
sudo apt install -y net-tools
```

```bash
# 关闭网络接口
$ sudo ifconfig eth0 down

# 显示活跃的网络接口
$ ifconfig 
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
wlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500

# 显示全部的网络接口
$ ifconfig -a
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
wlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500

# 开启网络接口
$ sudo ifconfig eth0 up
```

有 3 个 **networking interface**: `eth0`（本机）、`lo`（回环）、`wlan0`（usb wifi）

使用 `ifconfig eth0 up/down` 来代替 `ifup/ifdown eth0`，因为 `ifup/ifdown` 还需要配置 `/etc/network/interfaces`。



临时修改网络接口的ip、netmask、broadcast，重启失效。

```bash
# default mask is 255.255.255.0 and broadcast.
$ sudo ifconfig eth0 192.168.150.5

# special mask and broadcast
$ sudo ifconfig eth0 192.168.150.5 netmask 255.255.255.0 broadcast 192.168.150.2
```

