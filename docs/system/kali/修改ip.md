
```bash
$ sudo vim /etc/network/interfaces
auto lo
iface lo inet loopback
iface eth0 inet static
address 192.168.150.10
netmask 255.255.255.0
gateway 192.168.150.2
auto eth0

# 关闭NetworkManager服务,该服务是网络服务的图形管理工具,该服务会自动接管networking服务,有可能造成重启networking服务时配置不生效的问题
$ sudo systemctl stop NetworkManager
$ sudo systemctl disable NetworkManager
$ sudo systemctl restart networking
```