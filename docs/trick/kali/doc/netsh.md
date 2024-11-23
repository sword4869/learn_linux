[Windows 中的 netsh 是一个命令行实用程序，用于配置和监视网络参数，例如网络接口、防火墙、IPsec、无线网络等。netsh 是 Network Shell 的缩写，可以通过命令行或脚本文件来执行各种网络相关操作 - suv789 - 博客园 (cnblogs.com)](https://www.cnblogs.com/suv789/p/18104638)







**管理无线网络**：



- `netsh wlan connect name="网络名称"`：连接到指定的无线网络。
- `netsh wlan disconnect`：断开当前的无线网络连接。

## 连接过的热点

### 显示有哪些配置

```cmd
C:\Windows\system32>netsh wlan show profile

接口 WLAN2 上的配置文件:


组策略配置文件(只读)
---------------------------------
    <无>

用户配置文件
-------------
    所有用户配置文件 : myphone               ## 以前连接过的wifi
    

## 指定网卡接口
C:\Windows\system32>netsh wlan show profile interface="wlan2"
```

### 显示某个配置的具体信息

```cmd
## 显示密码  key=clear
C:\Windows\system32>netsh wlan show profile name="myphone" key=clear

接口 WLAN2 上的配置文件 myphone:
=======================================================================

已应用: 所有用户配置文件

配置文件信息
-------------------
    版本                   : 1
    类型                   : 无线局域网
    名称                   : myphone
    控制选项               :
        连接模式           : 自动连接							### 自动连接、手动连接
        网络广播           : 只在网络广播时连接
        AutoSwitch         : 请勿切换到其他网络
        MAC 随机化: 禁用

连接设置
---------------------
    SSID 数目              : 1
    SSID 名称              :“myphone”
    网络类型               : 结构
    无线电类型             : [ 任何无线电类型 ]
    供应商扩展名           : 不存在

安全设置
-----------------
    身份验证         : WPA2 - 个人
    密码                 : CCMP
    身份验证         : WPA2 - 个人
    密码                 : GCMP
    安全密钥               : 存在
    关键内容            : 123123123								### 密码

费用设置
-------------
    费用                : 无限制
    阻塞                : 否
    接近数据限制        : 否
    过量数据限制        : 否
    漫游                : 否
    费用来源            : 默认
```

### 修改某个配置的具体信息

#### 自动连接

```cmd
netsh wlan set profileparameter "myphone" connectionmode=manual
netsh wlan set profileparameter "myphone" connectionmode=auto
```

### 删除

```cmd
C:\Windows\system32>netsh wlan delete profile name=myphone
已从接口“WLAN2”中删除配置文件“myphone”。
```

### 导出

```cmd
(base) PS C:\Users\lab> netsh wlan export profile key=clear

接口配置文件“myphone”已成功保存在文件“.\WLAN-myphone.xml”中。

接口配置文件“mysql80”已成功保存在文件“.\WLAN-mysql80.xml”中。
```

```xml
<?xml version="1.0"?>
<WLANProfile xmlns="http://www.microsoft.com/networking/WLAN/profile/v1">
	<name>mysql80</name>
	<SSIDConfig>
		<SSID>
			<hex>6D7973716C3830</hex>
			<name>mysql80</name>
		</SSID>
	</SSIDConfig>
	<connectionType>ESS</connectionType>
	<connectionMode>auto</connectionMode>
	<MSM>
		<security>
			<authEncryption>
				<authentication>WPA2PSK</authentication>
				<encryption>AES</encryption>
				<useOneX>false</useOneX>
			</authEncryption>
			<sharedKey>
				<keyType>passPhrase</keyType>
				<protected>false</protected>
				<keyMaterial>123123123</keyMaterial>
			</sharedKey>
		</security>
	</MSM>
	<MacRandomization xmlns="http://www.microsoft.com/networking/WLAN/profile/v3">
		<enableRandomization>false</enableRandomization>
		<randomizationSeed>2122009969</randomizationSeed>
	</MacRandomization>
</WLANProfile>
```

### 导入

```cmd
(base) PS C:\Users\lab> netsh wlan add profile filename=".\WLAN-myphone.xml"
已将配置文件 myphone 添加到接口 WLAN。
```



## 显示信息

- `netsh wlan show interface/interfaces`: 显示当前连接的无线网络信息

可以判断是否支持 ap, monitor功能的：

- `netsh wlan show driver/drivers`: ap
- `netsh wlan show wirelesscapabilities`: ap和monitor

```cmd
C:\Windows\system32>netsh wlan show interface

系统上有 1 个接口:

    名称                   : WLAN2
    描述                   : Qualcomm QCA9565 802.11b/g/n Wireless Adapter
    GUID                   : 681d9571-8fae-4d97-81e0-d5f233411749
    物理地址               : 74:40:bb:ec:63:fb
    状态                   : 已断开连接
    无线电状态           : 硬件 开
                             软件 开

    承载网络状态  : 不可用
    
    
    
C:\Users\test>netsh wlan show driver

接口名称: WLAN2

    驱动程序                  : Qualcomm QCA9565 802.11b/g/n Wireless Adapter
    供应商                    : Qualcomm Communications Inc.
    提供程序                  : Qualcomm Communications Inc.
    日期                      : 2019/5/21
    版本                      : 10.0.3.462
    INF 文件                  : oem33.inf
    类型                      : 本机 WLAN 驱动程序
    支持的无线电类型          : 802.11b 802.11g 802.11n
    支持 FIPS 140-2 模式: 是
    支持 802.11w 管理帧保护 : 是
    支持的承载网络  : 是								## ap功能
    基础结构模式中支持的身份验证和密码:
                                开放式             无
                                开放式             WEP-40bit
                                开放式             WEP-104 位
                                开放式             WEP
                                WPA - 企业        TKIP
                                WPA - 个人        TKIP
                                WPA2 - 企业       TKIP
                                WPA2 - 个人       TKIP
                                供应商定义的          TKIP
                                WPA2 - 企业       供应商定义的
                                供应商定义的          供应商定义的
                                WPA - 企业        CCMP
                                WPA - 个人        CCMP
                                WPA2 - 企业       CCMP
                                供应商定义的          CCMP
                                WPA2 - 企业       供应商定义的
                                供应商定义的          供应商定义的
                                WPA2 - 个人       CCMP
                                供应商定义的          供应商定义的
    临时模式中支持的身份验证和密码:
                                开放式             无
                                开放式             WEP-40bit
                                开放式             WEP-104 位
                                开放式             WEP
                                WPA2 - 个人       CCMP
                                供应商定义的          供应商定义的
    支持的无线显示器: 是 (图形驱动程序: 是，WLAN 驱动程序: 是)
```

```cmd
C:\Windows\system32>netsh wlan show wirelesscapabilities

无线系统功能
----------------------------
    连接到 802.11 无线电的天线数(值不可用)

    设备运行时可以同时占用的最大通道数(值不可用)

    共存支持                        : 未知


无线设备功能
----------------------------

接口名称: WLAN2

    WDI 版本(Windows)                       : 0.0.0.0

    WDI 版本(IHV)                           : 0.0.0.0

    固件版本                            :

    站                                     : 支持

    软 AP                                     : 支持				########## ap

    网络监视模式                        : 支持						########## monitor

    Wi-Fi Direct 设备                         : 支持

    Wi-Fi Direct GO                         : 支持

    Wi-Fi Direct 客户端                         : 支持

    受保护管理帧                 : 支持
    DOT11k 邻居报告                      : 未知

    ANQP 服务信息发现          : 不支持

    动作帧                                : 不支持

    分集天线                           : 未知

    IBSS                                        : 支持
    混杂模式                             : 支持
    P2P 设备发现                        : 不支持

    P2P 服务名称发现                  : 不支持

    P2P 服务信息发现                  : 不支持

    P2P 背景发现                    : 不支持

    5 GHz 的 P2P GO                             : 未知

    ASP 2.0 服务名称发现              : 不支持

    ASP 2.0 服务信息发现       : 不支持

    支持 IP 对接                          : 不支持

    FIPS                                        : 支持
    即时连接                             : 不支持

    Dx 待机 NLO                              : 不支持

    扩展通道交换机公告        : 未知

    功能级别重置                        : 不支持

    平台级别重置                        : 不支持

    总线级别重置                             : 不支持

    MAC 随机化                           : 不支持

    快速转换                             : 不支持

    MU-MIMO                                     : 未知

    Miracast 接收器                               : 未知

    BSS 转换(802.11v)                    : 不支持

    已配置 IHV 扩展模块         : 不支持

    SAE 身份验证                          : 不支持

    SAE 哈希到元素身份验证          : 不支持

    WPA3 SUITE-B 身份验证                 :不支持

    WPA3 SUITE-B FIPS 模式                      : 不支持

    OWE 身份验证                          : 不支持

    FTM 作为发起程序                            : 不支持

    MBO 支持                                 : 不支持

    Tx 空间流数目                : 0

    Rx 空间流数目                : 0

    支持的并发通道数     : 2

    P2P GO 端口计数                          : 1

    P2P 客户端端口计数                      : 2

    P2P 移动 AP 客户端数上限                   : 128

    支持的 ANQP 服务播发数上限   : 0

    共存支持                        : 未知
```



## 禁用开启网络设备

![image-20240716112221906](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407161122007.png)

下面即用命令来实现上面的图形化操作。

​	`netsh interface set interface`命令需要管理员权限。

​	`"WLAN"`是网卡的名字。

​	enabled只可以执行一次，disabled可以执行多次。

```cmd
C:\Windows\system32>netsh interface set interface "WLAN" enabled


C:\Windows\system32>netsh interface set interface "WLAN" enabled
此网络连接不存在。



C:\Windows\system32>netsh interface set interface "WLAN" disabled


C:\Windows\system32>netsh interface set interface "WLAN" disabled
```
