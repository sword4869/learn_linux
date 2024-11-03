

建议不安装wireshark里的npcap，去[Npcap: Windows Packet Capture Library & Driver](https://npcap.com/#download)下载最新版本的。



![在这里插入图片描述](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407130909615.png)

## 查看、修改网卡模式

查看目标网卡名称

```cmd
(base) PS C:\Users\lab> netsh wlan show interfaces
系统上有 1 个接口:

    名称                   : WLAN						############# 这里显示adapter的名字

(base) PS C:\Users\lab> ipconfig
无线局域网适配器 WLAN:			 ############# 这里显示adapter的名字

   连接特定的 DNS 后缀 . . . . . . . :
   IPv6 地址 . . . . . . . . . . . . : 240e:478:5810:3e89:df99:d99a:1afc:d50b
   临时 IPv6 地址. . . . . . . . . . : 240e:478:5810:3e89:4d57:3e76:82e1:e6d1
   本地链接 IPv6 地址. . . . . . . . : fe80::fc6c:f1f0:df6f:ca4b%12
   IPv4 地址 . . . . . . . . . . . . : 192.168.224.52
   子网掩码  . . . . . . . . . . . . : 255.255.255.0
   默认网关. . . . . . . . . . . . . : fe80::9c0f:a7ff:fe2b:f04b%12
                                       192.168.224.100
```

WlanHelper需要cmd用管理员权限打开

```cmd
C:\Windows\System32>cd C:\Windows\System32\Npcap

# wlan是上面选择的adpater的名字
C:\Windows\System32\Npcap>WlanHelper.exe wlan mode		# 当前支持模式
managed

C:\Windows\System32\Npcap>WlanHelper.exe wlan modes		# 网卡的支持模式，这样就是不支持ap、monitor
managed

C:\Windows\System32\Npcap>WlanHelper.exe wlan modes		# 网卡的支持模式，支持ap、monitor
master, managed, monitor

C:\Windows\System32\Npcap>WlanHelper.exe wlan mode monitor	# 切换模式
Success
```

manged: 我们接入别人的热点来上网

master: 我们自己变成热点

monitor: 监控无线网络内部的流量



PS: 修改名字`WLAN 2` 为`wlan2`，去掉空格

```bash
C:\Windows\System32\Npcap>WlanHelper.exe WLAN 2 modes
Error: invalid parameter, type in "WlanHelper -h" for help.

C:\Windows\System32\Npcap>WlanHelper.exe WLAN 2 modes
Error: invalid parameter, type in "WlanHelper -h" for help.
```

![image-20240715180320999](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407151803082.png)

## 修改信道、频率

```cmd
C:\Windows\System32\Npcap>WlanHelper.exe wlan freq 2
Success

C:\Windows\System32\Npcap>WlanHelper.exe wlan channel 36
Success
```

