# Syntax

```bash
# 显示help
$ nmap -h
nmap [Scan Type(s)] [Options] {target specification}

# 显示过程详情
$ nmap -v ...
```

# target specification

## 全端口
```bash
# 命令行
nmap 192.168.0.1
nmap 192.168.0.1,10,11
nmap 192.168.0.1-100
nmap 192.168.0.*
nmap 192.168.*.*
nmap 192.168.0.1/24
nmap scanme.nmap.org
nmap 192.168.0.1 10.168.1.1 10.168.0.100
```

```bash
# 从列表中输入
# nmap -iL <inputfilename>
nmap -iL list.txt
```

```
192.168.0.1
192.168.0.10
```

只要生成要扫描的主机的列表，用-iL 把文件名作为选项传给 Nmap。每一项必须以一个或多个空格，制表符或换行符分开。

```bash
# 随机生成的ip
nmap -iR <hostnum>
```

不合需要的 IP 如特定的私有，组播或者未分配的地址自动略过。
hostnum 选项告诉 Nmap 生成多少个 IP。
选项 0 意味着永无休止的扫描。

```bash
# 排除主机/网络
# nmap --exclude <host1[，host2][，host3]，...>
nmap 192.168.0.1-100 --exclude 192.168.0.10-20
```

如果在您指定的扫描范围有一些主机或网络不是您的目标。

```bash
# 从列表中排除
nmap --excludefile <excludefile> (排除文件中的列表)
```

## 指定端口

```bash
# 指定端口
nmap -p 80 192.168.0.1

# 也可以指定范围
nmap -p 1-80 192.168.0.1

# 多个端口
nmap -p 53,111,137,21-25,80,139,8080 0 192.168.0.1
```


3306: default port for MySQL.
1433: default port for Microsoft's SQL Server database.


# 发现主机

## 没有参数

```bash
# 没有参数
$ nmap 192.168.0.1
Starting Nmap 7.91 ( https://nmap.org ) at 2021-08-13 22:49 CST
Nmap scan report for 192.168.0.1
Host is up (0.0035s latency).
Not shown: 998 filtered ports
PORT     STATE SERVICE
80/tcp   open  http
1900/tcp open  upnp
MAC Address: 11:22:33:44:55:66
```

显示的主机的 ip、延迟 latency、端口服务 port service、mac address


## Simple Ping

```bash
$ nmap -sP 192.168.0.1
Starting Nmap 7.91 ( https://nmap.org ) at 2021-08-13 22:40 CST
Nmap scan report for 192.168.0.1
Host is up (0.0046s latency).
MAC Address: 11:22:33:44:55:66
Nmap done: 1 IP address (1 host up) scanned in 0.15 seconds
```

类似执行 PING 命令。不显示端口情况。
相较于没有参数的 nmap，更快。一般用来查看当前 wifi 下的在线设备`nmap -sP 192.168.0.1/24`，就知道谁连 wifi 了（只是活跃的主机，那种连上待机的抓不到）。

## 列出 ip

```bash
# 就是列出来每一个ip地址，啥也不干
$ nmap -sL 192.168.0.1/24
...
Nmap scan report for 192.168.0.110
Nmap scan report for 192.168.0.111
...
Nmap done: 2794 IP addresses (0 hosts up) scanned in 71.47 seconds
```

就列出要搜素的每个 ip 地址。`(0 hosts up)`是假的，永远都是 0。

## 其他类型

```bash
# TCP SYN扫描
$ nmap -sS 192.168.0.1

# TCP connect()扫描
$ nmap -sT 192.168.0.1

# UDP扫描
$ nmap -sU 192.168.0.1
```

# 信息量

## OS 信息

```bash
$ nmap -O 192.168.0.1
Starting Nmap 7.91 ( https://nmap.org ) at 2021-08-13 23:15 CST
Nmap scan report for 192.168.0.1
Host is up (0.0024s latency).
Not shown: 998 filtered ports
PORT     STATE SERVICE
80/tcp   open  http
1900/tcp open  upnp
MAC Address: 码 (Mercury Communication Technologies)
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Aggressive OS guesses: Canon imageRUNNER C5185 printer (98%), Canon imageRUNNER C2380 or C2880i or Xerox Phaser 8860MFP printer (94%), Fujitsu Externus DX80 or IBM DCS9900 NAS device (94%), VxWorks (94%), Avaya 4526GTX switch (92%), Nortel CS1000M VoIP PBX or Xerox Phaser 8560DT printer (90%), Aastra Dialog 4425 IP phone (88%), HP ProCurve 3500yl, 5406zl, or 6200yl switch or UTStarcom F1000 VoIP phone (88%), National Instruments CompactRIO automation controller (88%), Nortel Ethernet Routing Switch 4550T-PWR (88%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 1 hop

OS detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 8.97 seconds
```

附加显示 OS 信息。

## 全部信息

```bash
$ nmap -A  192.168.0.1
Starting Nmap 7.91 ( https://nmap.org ) at 2021-08-13 23:18 CST
Nmap scan report for 192.168.0.1
Host is up (0.0023s latency).
Not shown: 998 filtered ports
PORT     STATE SERVICE VERSION
80/tcp   open  http
| fingerprint-strings:
|   FourOhFourRequest:
|     HTTP/1.0 404 Not Found
|     Content-Type: text/plain;charset=UTF-8
|     Content-Length: 0
|     Connection: close
|     Cache-control: no-cache
|   GenericLines, Help, TerminalServerCookie:
|     HTTP/1.1 400 Bad Request
|     Content-Type: text/html;charset=UTF-8
|     Content-Length: 0
|     Connection: close
|     Cache-control: no-cache
|   GetRequest:
|     HTTP/1.0 200 OK
|     Content-Type: text/html;charset=UTF-8
|     Content-Length: 671
|     Connection: close
|     Cache-control: no-cache
|     <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
|     <html xmlns="http://www.w3.org/1999/xhtml">
|     <head>
|     <title>MW315R</title>
|     <link rel="shortcut Icon" href="../images/icon_me.ico" type="image/x-icon" />
|     <script type="text/javascript" src="../dynaform/class.js"></script>
|     <link rel="stylesheet" type="text/css" href="../dynaform/class.css" />
|     </head>
|     <body>
|     <div id="Error"></div>
|     <div id="Confirm"></div>
|     <div id="Con"></div>
|     <div id="Help"></div>
|     <div id="Cover"></div>
|     <div id="Login"></div>
|     <script type="text/javascript">
|     pageOnload();
|     </script>
|     </body>
|     </html>
|   HTTPOptions, RTSPRequest:
|     HTTP/1.1 405 Method Not Allowed
|     Content-Type: text/html;charset=UTF-8
|     Content-Length: 0
|     Connection: close
|_    Cache-control: no-cache
|_http-title: MW315R
1900/tcp open  upnp?
| fingerprint-strings:
|   FourOhFourRequest:
|     HTTP/1.0 401 Unauthorized
|     Content-Type: text/plain;charset=UTF-8
|     Content-Length: 303
|     Connection: close
|     Cache-control: no-cache
|     00007
|     00004
|     00000
|     PS<vm)brI>2msJ)r
|     y0ef0CWaKcYB3XW^pJFWOq*vK!tG>jm5BJ{f4o$f]]PPi^<GbAXoEOkN31*.>!u}4>!0![*[K4*FK{8pizKJvK4$4Q2s*q>$WYfCVZ$Zr*n2mHyvo{X7{$3j4m5uVU4XtM5r2nv9C]8ECrdIffm2o+CyOn3W^xq94>dIRHvlgl!Ed0TumWWjtO<Li0F<w0tZ5bh0ix86PvRE}~6vg,oN6tf6ga0ho$L*^F([FIK(DEQ3r~*}0lU$v4!GI*<y8r3
|     00002
|   GenericLines, Help, TerminalServerCookie:
|     HTTP/1.1 400 Bad Request
|     Content-Type: text/html;charset=UTF-8
|     Content-Length: 0
|     Connection: close
|     Cache-control: no-cache
|   GetRequest:
|     HTTP/1.0 404 Not Found
|     Content-Type: text/html;charset=UTF-8
|     Content-Length: 0
|     Connection: close
|     Cache-control: no-cache
|   HTTPOptions, RTSPRequest, SIPOptions:
|     HTTP/1.1 405 Method Not Allowed
|     Content-Type: text/html;charset=UTF-8
|     Content-Length: 0
|     Connection: close
|_    Cache-control: no-cache
2 services unrecognized despite returning data. If you know the service/version, please submit the following fingerprints at https://nmap.org/cgi-bin/submit.cgi?new-service :
==============NEXT SERVICE FINGERPRINT (SUBMIT INDIVIDUALLY)==============
码
==============NEXT SERVICE FINGERPRINT (SUBMIT INDIVIDUALLY)==============
码
MAC Address: 码 (Mercury Communication Technologies)
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Aggressive OS guesses: Canon imageRUNNER C5185 printer (98%), Canon imageRUNNER C2380 or C2880i or Xerox Phaser 8860MFP printer (94%), Fujitsu Externus DX80 or IBM DCS9900 NAS device (94%), VxWorks (94%), Avaya 4526GTX switch (94%), Nortel CS1000M VoIP PBX or Xerox Phaser 8560DT printer (90%), Aastra Dialog 4425 IP phone (88%), HP ProCurve 3500yl, 5406zl, or 6200yl switch or UTStarcom F1000 VoIP phone (88%), Apple AirPort Express WAP or AMX NI-3100 controller (VxWorks) (88%), Xerox ApeosPort-IV C3370 printer (88%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 1 hop

TRACEROUTE
HOP RTT     ADDRESS
1   2.26 ms 192.168.0.1

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 14.54 seconds
```

启用全面的扫描选项，显示很多信息。

## 追踪路由跳转

```bash
$ nmap --traceroute 8.8.8.8
Host is up (0.070s latency).
Not shown: 999 filtered ports
PORT   STATE SERVICE
53/tcp open  domain

TRACEROUTE (using port 53/tcp)
HOP RTT      ADDRESS
1   2.32 ms  192.168.0.1
2   2.38 ms  192.168.1.1
3   22.80 ms 10.146.128.1
4   ... 15
16  64.46 ms 209.85.244.201
17  62.17 ms 216.239.40.31
18  76.22 ms dns.google (8.8.8.8)
```

显示从本机的路由器 →ISP 的路由 → 互联网 → 目标 ip 的中间路由跳转 ip。

# 其他

## 时间限制

```bash
# T4时间限制
nmap -A -T4 scanme.nmap.org
```
## 实例


```bash
$ nmap -sT 192.168.181.1 -p 3306 >/dev/null -oG MySQLscan.txt
$ cat MySQLscan.txt | grep open
```

`>/dev/null`:
If you do this on a local machine, so it doesn’t matter so much, but if you were to use the script remotely, you’d want to hide the nmap output. To stay stealthy, we also send the standard nmap output that would usually appear on the screen to `/dev/null`, a special place to sent output so that it disappears.

`-oG`: 
We then send the output of the scan to a file named MySQLscan in a grep­able format, meaning a format that grep can work on.

`cat | grep`:
lines of output from nmap with hosts that have port 3306 open.


## Detail

发送 ICMP(Internet Control Message Protocol) 请求来查找活跃主机。



