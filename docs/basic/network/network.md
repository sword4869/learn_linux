[toc]

## change MAC


### 显示某设备 mac
> 方法1

`ifconfig`中`ether`就是 mac。

> 方法2

```bash
# 同macchanger -s eth0
$ macchanger eth0
Current MAC:   64:0b:4a:eb:ce:b5 (Digital Telecom Technology Limited)
Permanent MAC: 00:0c:29:22:38:7b (VMware, Inc.)
```

- `Current MAC`: 是当前显示的地址
- `Permanent MAC`: 是 BIA（Burned-In Address，固化地址）。

### 查看 mac 地址的厂商


```bash
$ macchanger -l
Misc MACs:
Num    MAC        Vendor
---    ---        ------
0000 - 00:00:00 - XEROX CORPORATION
...
Wireless MACs:
Num    MAC        Vendor
---    ---        ------
0000 - 00:00:8f - Raytheon Raylink/WebGear Aviator2.4
...
```

- mac 地址的前 3 对十六进制数：表示网络硬件制造商的编号，即 OUI（Organizationally-Unique Identifier）。
- mac 地址的后 3 对十六进制数：表示mac 厂商 vendor，两种大类型（Misc 杂项设备 和 Wireless 无线设备）。


```bash
└─# macchanger -l | grep 64:0b:4a
15138 - 64:0b:4a - Digital Telecom Technology Limited
```

`64:0b:4a:eb:ce:b5`的`64:0b:4a`查询出来表示属于`Digital Telecom Technology Limited`的产品。

### 修改 mac

> 方法1

```bash
# 同样的大类，同样的厂商
└─# macchanger -e eth0
Current MAC:   64:0b:4a:eb:ce:b5 (Digital Telecom Technology Limited)
Permanent MAC: 00:0c:29:22:38:7b (VMware, Inc.)
New MAC:       64:0b:4a:78:13:16 (Digital Telecom Technology Limited)

# 同样的大类（Misc和Wireless），任意的厂商
└─# macchanger -a eth0
Current MAC:   64:0b:4a:78:13:16 (Digital Telecom Technology Limited)
Permanent MAC: 00:0c:29:22:38:7b (VMware, Inc.)
New MAC:       00:0a:97:8a:c8:c7 (SONICblue, Inc.)

# 任意大类，任意厂商
└─# macchanger -A eth0
Current MAC:   00:0a:97:8a:c8:c7 (SONICblue, Inc.)
Permanent MAC: 00:0c:29:22:38:7b (VMware, Inc.)
New MAC:       00:18:35:1a:1c:a9 (Thoratec / ITC)

# 任意的mac，有的没有注册厂商
└─# macchanger -r eth0
Current MAC:   00:18:35:1a:1c:a9 (Thoratec / ITC)
Permanent MAC: 00:0c:29:22:38:7b (VMware, Inc.)
New MAC:       da:32:34:7d:ec:8a (unknown)

# 指定mac修改
└─# macchanger -m 64:0b:4a:eb:ce:b5 eth0
Current MAC:   da:32:34:7d:ec:8a (unknown)
Permanent MAC: 00:0c:29:22:38:7b (VMware, Inc.)
New MAC:       64:0b:4a:eb:ce:b5 (Digital Telecom Technology Limited)
```
> 方法2

`ipconfig` show **active** network interfaces. Active means that you cannot see the dead network interface after use `ipconfig eth0 down`.


```bash
$ sudo ifconfig eth0 down
$ sudo ifconfig eth0 hw ether 00:11:22:33:44:55
$ sudo ifconfig eth0 up
```

## DHCP
先设定成局域网的ip段，再获取动态IP
```bash
$ ifconfig eth0 192.168.0.4
$ dhclient eth0
```

## DNS
### dig

```bash
$ dig hackers-arise.com ns
```
`ns` is nameserver, and for mail exchange server is `mx`. 

### alter
```bash
$ echo "nameserver 8.8.8.8" > /etc/resolv.conf
```
DHCP serve provides a DNS setting (replace the contents of the file) when it renews the DHCP address.

## hosts

You can determine which ip address when you enter www.microsoft.com, rather than let the DNS server decides.

This can be useful forhijacking a TCP connection on your local area network to direct traffic to a malicious web server with a too such as `dnsspoof`.

```bash
# press TAB, not spacebar.
$ echo "127.0.0.1   HOSTNAME" >> /etc/hosts
```



