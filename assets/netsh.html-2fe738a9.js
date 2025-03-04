import{_ as a,W as e,X as i,Z as n,$ as l,a0 as t,Y as d,E as c}from"./framework-9a5142fa.js";const v={},u=n("p",null,"[toc]",-1),p={href:"https://www.cnblogs.com/suv789/p/18104638",target:"_blank",rel:"noopener noreferrer"},r=d(`<p><strong>管理无线网络</strong>：</p><ul><li><code>netsh wlan connect name=&quot;网络名称&quot;</code>：连接到指定的无线网络。</li><li><code>netsh wlan disconnect</code>：断开当前的无线网络连接。</li></ul><h2 id="连接过的热点" tabindex="-1"><a class="header-anchor" href="#连接过的热点" aria-hidden="true">#</a> 连接过的热点</h2><h3 id="显示有哪些配置" tabindex="-1"><a class="header-anchor" href="#显示有哪些配置" aria-hidden="true">#</a> 显示有哪些配置</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Windows\\system32&gt;netsh wlan show profile

接口 WLAN2 上的配置文件:


组策略配置文件(只读)
---------------------------------
    &lt;无&gt;

用户配置文件
-------------
    所有用户配置文件 : myphone               ## 以前连接过的wifi
    

## 指定网卡接口
C:\\Windows\\system32&gt;netsh wlan show profile interface=&quot;wlan2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示某个配置的具体信息" tabindex="-1"><a class="header-anchor" href="#显示某个配置的具体信息" aria-hidden="true">#</a> 显示某个配置的具体信息</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>## 显示密码  key=clear
C:\\Windows\\system32&gt;netsh wlan show profile name=&quot;myphone&quot; key=clear

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改某个配置的具体信息" tabindex="-1"><a class="header-anchor" href="#修改某个配置的具体信息" aria-hidden="true">#</a> 修改某个配置的具体信息</h3><h4 id="自动连接" tabindex="-1"><a class="header-anchor" href="#自动连接" aria-hidden="true">#</a> 自动连接</h4><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>netsh wlan set profileparameter &quot;myphone&quot; connectionmode=manual
netsh wlan set profileparameter &quot;myphone&quot; connectionmode=auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Windows\\system32&gt;netsh wlan delete profile name=myphone
已从接口“WLAN2”中删除配置文件“myphone”。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>(base) PS C:\\Users\\lab&gt; netsh wlan export profile key=clear

接口配置文件“myphone”已成功保存在文件“.\\WLAN-myphone.xml”中。

接口配置文件“mysql80”已成功保存在文件“.\\WLAN-mysql80.xml”中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WLANProfile</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.microsoft.com/networking/WLAN/profile/v1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mysql80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SSIDConfig</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SSID</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hex</span><span class="token punctuation">&gt;</span></span>6D7973716C3830<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hex</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mysql80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SSID</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SSIDConfig</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>connectionType</span><span class="token punctuation">&gt;</span></span>ESS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>connectionType</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>connectionMode</span><span class="token punctuation">&gt;</span></span>auto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>connectionMode</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MSM</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>security</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>authEncryption</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>authentication</span><span class="token punctuation">&gt;</span></span>WPA2PSK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>authentication</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encryption</span><span class="token punctuation">&gt;</span></span>AES<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encryption</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useOneX</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>useOneX</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>authEncryption</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sharedKey</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keyType</span><span class="token punctuation">&gt;</span></span>passPhrase<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keyType</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>protected</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>protected</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keyMaterial</span><span class="token punctuation">&gt;</span></span>123123123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keyMaterial</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sharedKey</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>security</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MSM</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MacRandomization</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.microsoft.com/networking/WLAN/profile/v3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enableRandomization</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enableRandomization</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>randomizationSeed</span><span class="token punctuation">&gt;</span></span>2122009969<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>randomizationSeed</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MacRandomization</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WLANProfile</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>(base) PS C:\\Users\\lab&gt; netsh wlan add profile filename=&quot;.\\WLAN-myphone.xml&quot;
已将配置文件 myphone 添加到接口 WLAN。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示信息" tabindex="-1"><a class="header-anchor" href="#显示信息" aria-hidden="true">#</a> 显示信息</h2><ul><li><code>netsh wlan show interface/interfaces</code>: 显示当前连接的无线网络信息</li></ul><p>可以判断是否支持 ap, monitor功能的：</p><ul><li><code>netsh wlan show driver/drivers</code>: ap</li><li><code>netsh wlan show wirelesscapabilities</code>: ap和monitor</li></ul><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Windows\\system32&gt;netsh wlan show interface

系统上有 1 个接口:

    名称                   : WLAN2
    描述                   : Qualcomm QCA9565 802.11b/g/n Wireless Adapter
    GUID                   : 681d9571-8fae-4d97-81e0-d5f233411749
    物理地址               : 74:40:bb:ec:63:fb
    状态                   : 已断开连接
    无线电状态           : 硬件 开
                             软件 开

    承载网络状态  : 不可用
    
    
    
C:\\Users\\test&gt;netsh wlan show driver

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Windows\\system32&gt;netsh wlan show wirelesscapabilities

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="禁用开启网络设备" tabindex="-1"><a class="header-anchor" href="#禁用开启网络设备" aria-hidden="true">#</a> 禁用开启网络设备</h2><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407161122007.png" alt="image-20240716112221906"></p><p>下面即用命令来实现上面的图形化操作。</p><p>​ <code>netsh interface set interface</code>命令需要管理员权限。</p><p>​ <code>&quot;WLAN&quot;</code>是网卡的名字。</p><p>​ enabled只可以执行一次，disabled可以执行多次。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Windows\\system32&gt;netsh interface set interface &quot;WLAN&quot; enabled


C:\\Windows\\system32&gt;netsh interface set interface &quot;WLAN&quot; enabled
此网络连接不存在。



C:\\Windows\\system32&gt;netsh interface set interface &quot;WLAN&quot; disabled


C:\\Windows\\system32&gt;netsh interface set interface &quot;WLAN&quot; disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function o(m,b){const s=c("ExternalLinkIcon");return e(),i("div",null,[u,n("p",null,[n("a",p,[l("Windows 中的 netsh 是一个命令行实用程序，用于配置和监视网络参数，例如网络接口、防火墙、IPsec、无线网络等。netsh 是 Network Shell 的缩写，可以通过命令行或脚本文件来执行各种网络相关操作 - suv789 - 博客园 (cnblogs.com)"),t(s)])]),r])}const k=a(v,[["render",o],["__file","netsh.html.vue"]]);export{k as default};
