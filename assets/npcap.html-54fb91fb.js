import{_ as s,W as i,X as d,Z as n,$ as e,a0 as l,Y as c,E as r}from"./framework-9a5142fa.js";const t={},p={href:"https://npcap.com/#download",target:"_blank",rel:"noopener noreferrer"},o=c(`<p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407130909615.png" alt="在这里插入图片描述"></p><h2 id="查看、修改网卡模式" tabindex="-1"><a class="header-anchor" href="#查看、修改网卡模式" aria-hidden="true">#</a> 查看、修改网卡模式</h2><p>查看目标网卡名称</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>(base) PS C:\\Users\\lab&gt; netsh wlan show interfaces
系统上有 1 个接口:

    名称                   : WLAN						############# 这里显示adapter的名字

(base) PS C:\\Users\\lab&gt; ipconfig
无线局域网适配器 WLAN:			 ############# 这里显示adapter的名字

   连接特定的 DNS 后缀 . . . . . . . :
   IPv6 地址 . . . . . . . . . . . . : 240e:478:5810:3e89:df99:d99a:1afc:d50b
   临时 IPv6 地址. . . . . . . . . . : 240e:478:5810:3e89:4d57:3e76:82e1:e6d1
   本地链接 IPv6 地址. . . . . . . . : fe80::fc6c:f1f0:df6f:ca4b%12
   IPv4 地址 . . . . . . . . . . . . : 192.168.224.52
   子网掩码  . . . . . . . . . . . . : 255.255.255.0
   默认网关. . . . . . . . . . . . . : fe80::9c0f:a7ff:fe2b:f04b%12
                                       192.168.224.100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>WlanHelper需要cmd用管理员权限打开</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Windows\\System32&gt;cd C:\\Windows\\System32\\Npcap

# wlan是上面选择的adpater的名字
C:\\Windows\\System32\\Npcap&gt;WlanHelper.exe wlan mode		# 当前支持模式
managed

C:\\Windows\\System32\\Npcap&gt;WlanHelper.exe wlan modes		# 网卡的支持模式，这样就是不支持ap、monitor
managed

C:\\Windows\\System32\\Npcap&gt;WlanHelper.exe wlan modes		# 网卡的支持模式，支持ap、monitor
master, managed, monitor

C:\\Windows\\System32\\Npcap&gt;WlanHelper.exe wlan mode monitor	# 切换模式
Success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>manged: 我们接入别人的热点来上网</p><p>master: 我们自己变成热点</p><p>monitor: 监控无线网络内部的流量</p><p>PS: 修改名字<code>WLAN 2</code> 为<code>wlan2</code>，去掉空格</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>System32<span class="token punctuation">\\</span>Npcap<span class="token operator">&gt;</span>WlanHelper.exe WLAN <span class="token number">2</span> modes
Error: invalid parameter, <span class="token builtin class-name">type</span> <span class="token keyword">in</span> <span class="token string">&quot;WlanHelper -h&quot;</span> <span class="token keyword">for</span> help.

C:<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>System32<span class="token punctuation">\\</span>Npcap<span class="token operator">&gt;</span>WlanHelper.exe WLAN <span class="token number">2</span> modes
Error: invalid parameter, <span class="token builtin class-name">type</span> <span class="token keyword">in</span> <span class="token string">&quot;WlanHelper -h&quot;</span> <span class="token keyword">for</span> help.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407151803082.png" alt="image-20240715180320999"></p><h2 id="修改信道、频率" tabindex="-1"><a class="header-anchor" href="#修改信道、频率" aria-hidden="true">#</a> 修改信道、频率</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Windows\\System32\\Npcap&gt;WlanHelper.exe wlan freq 2
Success

C:\\Windows\\System32\\Npcap&gt;WlanHelper.exe wlan channel 36
Success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function m(v,u){const a=r("ExternalLinkIcon");return i(),d("div",null,[n("p",null,[e("建议不安装wireshark里的npcap，去"),n("a",p,[e("Npcap: Windows Packet Capture Library & Driver"),l(a)]),e("下载最新版本的。")]),o])}const g=s(t,[["render",m],["__file","npcap.html.vue"]]);export{g as default};
