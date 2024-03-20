import{_ as i,W as l,X as t,Y as s,Z as n,a0 as a,$ as o,E as r}from"./framework-586fce15.js";const d={},c=s("ul",null,[s("li",null,[s("a",{href:"#1-os"},"1. OS")]),s("li",null,[s("a",{href:"#2-%E7%84%B6%E8%80%8C-%E7%BD%91%E5%8D%A1%E6%B2%A1%E7%94%A8"},"2. 然而 网卡没用")])],-1),p=s("hr",null,null,-1),u=s("h1",{id:"_1-os",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-os","aria-hidden":"true"},"#"),n(" 1. OS")],-1),b={href:"https://docs.microsoft.com/en-us/windows/wsl/connect-usb",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,[n("然后发现kali不行：没有那个"),s("code",null,"linux-tools-5.4.0-77-generic"),n("包。只有ubuntu有这个包，那么只能切换到ubuntu了.")],-1),m=s("code",null,"Building your own USB/IP enabled WSL 2 kernel",-1),k={href:"https://github.com/dorssel/usbipd-win/wiki/WSL-support#usbip-client-tools",target:"_blank",rel:"noopener noreferrer"},h=o(`<h1 id="_2-然而-网卡没用" tabindex="-1"><a class="header-anchor" href="#_2-然而-网卡没用" aria-hidden="true">#</a> 2. 然而 网卡没用</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$win</span><span class="token builtin class-name">:</span> wsl <span class="token parameter variable">--list</span>
适用于 Linux 的 Windows 子系统分发版:
Ubuntu-20.04<span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
docker-desktop-data
docker-desktop
kali-linux
wsl2-usbip

<span class="token variable">$win</span><span class="token builtin class-name">:</span> usbipd wsl list
BUSID  VID:PID    DEVICE                                                        STATE
<span class="token number">1</span>-2    148f:3070  <span class="token number">802</span>.11n USB Wireless LAN Card                                 Not attached
<span class="token number">1</span>-3    275d:0ba6  USB 输入设备                                                  Not attached
<span class="token number">2</span>-1    <span class="token number">5986</span>:2115  Integrated Camera                                             Not attached
<span class="token number">2</span>-2    0bda:c024  Realtek Bluetooth Adapter                                     Not attached

<span class="token comment"># -a: Automatically re-attach when the device is detached or unplugged</span>
<span class="token comment"># -d: 就不用设置默认 wsl os</span>
<span class="token variable">$win</span><span class="token builtin class-name">:</span> usbipd wsl attach <span class="token parameter variable">-a</span> <span class="token parameter variable">--busid</span> <span class="token number">1</span>-2 <span class="token parameter variable">-d</span> wsl2-usbip
usbipd: info: Starting endless attach loop<span class="token punctuation">;</span> press Ctrl+C to quit.
Attached
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$wsl</span><span class="token builtin class-name">:</span> lsusb
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation <span class="token number">3.0</span> root hub
Bus 001 Device 011: ID 148f:3070 Ralink Technology, Corp. RT2870/RT3070 Wireless Adapter
Bus 001 Device 002: ID <span class="token number">5986</span>:2115 Acer, Inc Integrated Camera
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation <span class="token number">2.0</span> root hub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$wsl</span><span class="token builtin class-name">:</span> usbip port
Imported USB devices
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
libusbip: error: fopen
libusbip: error: read_record
Port 00: <span class="token operator">&lt;</span>Port <span class="token keyword">in</span> Use<span class="token operator">&gt;</span> at High Speed<span class="token punctuation">(</span>480Mbps<span class="token punctuation">)</span>
       Ralink Technology, Corp. <span class="token builtin class-name">:</span> RT2870/RT3070 Wireless Adapter <span class="token punctuation">(</span>148f:3070<span class="token punctuation">)</span>
       <span class="token number">1</span>-1 -<span class="token operator">&gt;</span> unknown host, remote port and remote busid
           -<span class="token operator">&gt;</span> remote bus/dev 001/002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>usb是有了，但是网卡没</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$wsl</span><span class="token builtin class-name">:</span> iwconfig
lo        no wireless extensions.

bond0     no wireless extensions.

dummy0    no wireless extensions.

tunl0     no wireless extensions.

sit0      no wireless extensions.

eth0      no wireless extensions.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function _(g,w){const e=r("ExternalLinkIcon");return l(),t("div",null,[c,p,u,s("p",null,[n("win10 的 WLS2 不支持usb，所以得手动安装 usb: "),s("a",b,[n("usbip"),a(e)]),n("。")]),v,s("p",null,[n("然后运行发现 kernel 不支持：就是 "),m,n(" 这个得安。"),s("a",k,[n("usbip"),a(e)]),n("。")]),h])}const f=i(d,[["render",_],["__file","usb support.html.vue"]]);export{f as default};
