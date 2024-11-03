## windows

###  [netsh.md](netsh.md) 

```cmd
netsh wlan show wirelesscapabilities
```

###  [npcap.md](npcap.md) 

```cmd
C:\Windows\System32\Npcap>WlanHelper.exe wlan modes		# 网卡的支持模式，这样就是不支持ap、monitor
managed

C:\Windows\System32\Npcap>WlanHelper.exe wlan modes		# 网卡的支持模式，支持ap、monitor
master, managed, monitor
```

## linux

### iw list未测试

我们使用命令 `iw list` 查看 "Supported interface modes:"支持的列表中是否有AP，如有则说明支持配置为AP热点。

```bash
nvidia@nvidia-desktop:~$ iw list
Wiphy phy1
        max # scan SSIDs: 9
        max scan IEs length: 2304 bytes
        max # sched scan SSIDs: 0
        max # match sets: 0
        max # scan plans: 1
        max scan plan interval: -1
        max scan plan iterations: 0
        Retry short limit: 7
        Retry long limit: 4
        Coverage class: 0 (up to 0m)
        Supported Ciphers:
                * WEP40 (00-0f-ac:1)
                * WEP104 (00-0f-ac:5)
                * TKIP (00-0f-ac:2)
                * CCMP-128 (00-0f-ac:4)
                * CMAC (00-0f-ac:6)
        Available Antennas: TX 0 RX 0
        Supported interface modes:
                 * IBSS
                 * managed
                 * AP
                 * P2P-client
                 * P2P-GO
                 * P2P-device
```

## 网卡的芯片组牌子

Atheros AR9271: [Atheros AR9271 Wireless Network Adapter Drivers | Device Drivers (oemdrivers.com)](https://oemdrivers.com/network-atheros-ar9271-wireless-network-adapter#google_vignette), [crafter999/ar9271: The official Atheros AR9271 driver for Windows 10 (github.com)](https://github.com/crafter999/ar9271)

Ralink 慎重考虑，这些网卡工作时间似乎很短, 经常会出现一会儿就停止工作的现象

​	RT2870, RT3070, RT3572, RT5370N

Realtek 8187L (Wireless G adapters), RTL8812AU (2017年新增)

Intersil/Conexant 老东西，经常出问题 

Broadcom

Intel

## 网卡牌子

[Aircrack-ng支持网卡列表(下)_aircrack-ng支持的网卡-CSDN博客](https://blog.csdn.net/qq_28208251/article/details/47177785)

Alfa 

​	AWUS036AXML (a/b/g/n/ac/ax, WiFi 6E)  best 

​	AWUS036AXM (a/b/g/n/ac/ax, WiFi 6E) 

​	AWUS036ACH (a/b/g/n/ac)   unstable 

​	AWUS036ACM (a/b/g/n/ac) 

​	AWUS036H [b/g USB]

​	AWUS036NHA [b/g/n USB]

​	AWUS051NH v2 [a/b/g/n USB]

Ubiquiti 

​	SRC

SRC [a/b/g Cardbus]

SRX [a/b/g ExpressCard]

Airpcap series [USB]

TP-Link 

​	TL-WN722N v1 [b/g/n USB] - Beware, if version is not specified by vendor, it is **NOT** v1

​	TL-WN610G

TrendNet 

​	TEW-441PC

Netgear 

​	WAG511

​	WG511T

​	WG511U

