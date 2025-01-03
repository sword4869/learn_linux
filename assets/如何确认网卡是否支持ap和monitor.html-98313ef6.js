import{_ as l,W as c,X as o,Z as n,$ as e,a0 as a,a1 as r,Y as i,E as d}from"./framework-9a5142fa.js";const p={},m=n("h2",{id:"windows",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),e(" windows")],-1),u={id:"netsh-md",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#netsh-md","aria-hidden":"true"},"#",-1),h=i(`<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>$ netsh wlan show wirelesscapabilities
    软 AP                                     : 支持				########## ap

    网络监视模式                        : 支持						########## monitor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={id:"npcap-md",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#npcap-md","aria-hidden":"true"},"#",-1),g=i(`<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Windows\\System32\\Npcap&gt;WlanHelper.exe wlan modes		# 网卡的支持模式，这样就是不支持ap、monitor
managed

C:\\Windows\\System32\\Npcap&gt;WlanHelper.exe wlan modes		# 网卡的支持模式，支持ap、monitor
master, managed, monitor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> linux</h2><h3 id="iw-list未测试" tabindex="-1"><a class="header-anchor" href="#iw-list未测试" aria-hidden="true">#</a> iw list未测试</h3><p>我们使用命令 <code>iw list</code> 查看 &quot;Supported interface modes:&quot;支持的列表中</p><ul><li>AP: 有则说明支持配置为AP热点（网卡可以作为一个AP，提供无线网络服务给其他设备）。</li><li>monitor: 网卡可以接收所有的无线信号，如使用aircrack-ng等工具。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvidia@nvidia-desktop:~$ iw list
Wiphy phy1
        max <span class="token comment"># scan SSIDs: 9</span>
        max scan IEs length: <span class="token number">2304</span> bytes
        max <span class="token comment"># sched scan SSIDs: 0</span>
        max <span class="token comment"># match sets: 0</span>
        max <span class="token comment"># scan plans: 1</span>
        max scan plan interval: <span class="token parameter variable">-1</span>
        max scan plan iterations: <span class="token number">0</span>
        Retry short limit: <span class="token number">7</span>
        Retry long limit: <span class="token number">4</span>
        Coverage class: <span class="token number">0</span> <span class="token punctuation">(</span>up to 0m<span class="token punctuation">)</span>
        Supported Ciphers:
                * WEP40 <span class="token punctuation">(</span>00-0f-ac:1<span class="token punctuation">)</span>
                * WEP104 <span class="token punctuation">(</span>00-0f-ac:5<span class="token punctuation">)</span>
                * TKIP <span class="token punctuation">(</span>00-0f-ac:2<span class="token punctuation">)</span>
                * CCMP-128 <span class="token punctuation">(</span>00-0f-ac:4<span class="token punctuation">)</span>
                * CMAC <span class="token punctuation">(</span>00-0f-ac:6<span class="token punctuation">)</span>
        Available Antennas: TX <span class="token number">0</span> RX <span class="token number">0</span>
        Supported interface modes:
                 * IBSS
                 * managed
                 * AP
                 * P2P-client
                 * P2P-GO
                 * P2P-device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://pica.zhimg.com/v2-b74b91c14d2f11c6a0539d53da06f130_1440w.jpg" alt="img"></p><h2 id="网卡的芯片组牌子" tabindex="-1"><a class="header-anchor" href="#网卡的芯片组牌子" aria-hidden="true">#</a> 网卡的芯片组牌子</h2>`,8),k={href:"https://oemdrivers.com/network-atheros-ar9271-wireless-network-adapter#google_vignette",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/crafter999/ar9271",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"Ralink 慎重考虑，这些网卡工作时间似乎很短, 经常会出现一会儿就停止工作的现象",-1),A=n("p",null,"​ RT2870, RT3070, RT3572, RT5370N",-1),S=n("p",null,"Realtek 8187L (Wireless G adapters), RTL8812AU (2017年新增)",-1),w=n("p",null,"Intersil/Conexant 老东西，经常出问题",-1),W=n("p",null,"Broadcom",-1),C=n("p",null,"Intel",-1),R=n("h2",{id:"网卡牌子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网卡牌子","aria-hidden":"true"},"#"),e(" 网卡牌子")],-1),N={href:"https://blog.csdn.net/qq_28208251/article/details/47177785",target:"_blank",rel:"noopener noreferrer"},P=i("<p>Alfa</p><p>​ AWUS036AXML (a/b/g/n/ac/ax, WiFi 6E) best</p><p>​ AWUS036AXM (a/b/g/n/ac/ax, WiFi 6E)</p><p>​ AWUS036ACH (a/b/g/n/ac) unstable</p><p>​ AWUS036ACM (a/b/g/n/ac)</p><p>​ AWUS036H [b/g USB]</p><p>​ AWUS036NHA [b/g/n USB]</p><p>​ AWUS051NH v2 [a/b/g/n USB]</p><p>Ubiquiti</p><p>​ SRC</p><p>SRC [a/b/g Cardbus]</p><p>SRX [a/b/g ExpressCard]</p><p>Airpcap series [USB]</p><p>TP-Link</p><p>​ TL-WN722N v1 [b/g/n USB] - Beware, if version is not specified by vendor, it is <strong>NOT</strong> v1</p><p>​ TL-WN610G</p><p>TrendNet</p><p>​ TEW-441PC</p><p>Netgear</p><p>​ WAG511</p><p>​ WG511T</p><p>​ WG511U</p>",22);function T(U,B){const t=d("RouterLink"),s=d("ExternalLinkIcon");return c(),o("div",null,[m,n("h3",u,[v,e(),a(t,{to:"/system/kali/doc/netsh.html"},{default:r(()=>[e("netsh.md")]),_:1})]),h,n("h3",b,[_,e(),a(t,{to:"/system/kali/doc/npcap.html"},{default:r(()=>[e("npcap.md")]),_:1})]),g,n("p",null,[e("Atheros AR9271: "),n("a",k,[e("Atheros AR9271 Wireless Network Adapter Drivers | Device Drivers (oemdrivers.com)"),a(s)]),e(", "),n("a",f,[e("crafter999/ar9271: The official Atheros AR9271 driver for Windows 10 (github.com)"),a(s)])]),x,A,S,w,W,C,R,n("p",null,[n("a",N,[e("Aircrack-ng支持网卡列表(下)_aircrack-ng支持的网卡-CSDN博客"),a(s)])]),P])}const y=l(p,[["render",T],["__file","如何确认网卡是否支持ap和monitor.html.vue"]]);export{y as default};
