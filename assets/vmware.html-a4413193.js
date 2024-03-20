import{_ as n,W as s,X as a,$ as e}from"./framework-586fce15.js";const i="/learn_linux/assets/image-20-3acb1d9d.png",l="/learn_linux/assets/image-21-586d5166.png",t={},p=e(`<h2 id="vmware-tools" tabindex="-1"><a class="header-anchor" href="#vmware-tools" aria-hidden="true">#</a> vmware tools</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./vmware-install.pl <span class="token parameter variable">-f</span> <span class="token parameter variable">-d</span>
<span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 强制安装
<span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 自动回答问题与建议的答案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nat" tabindex="-1"><a class="header-anchor" href="#nat" aria-hidden="true">#</a> nat</h2><ol><li>虚拟机通过虚拟机网络适配器wmnet8 来联网，它的ip是<code>xxx.xxx.xxx.1</code>。所以虚拟机ip、虚拟机网关都要不是这个。</li><li>subip和mask是虚拟机ip的可选范围，虚拟机网关也在这个范围里，默认是<code>xxx.xxx.xxx.2</code></li><li>登录虚拟机，设置ip为固定ip<code>xxx.xxx.xxx.3</code>，重启虚拟机网络。</li><li>可以ping通www.baidu.com, 虚拟机网关2, 主机ip。不能vmnet8的1</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>以太网适配器 VMware Network Adapter VMnet8:

连接特定的 DNS 后缀 . . . . . . . :
本地链接 IPv6 地址. . . . . . . . : fe80::bc2:e3cd:62f8:f82d%5
IPv4 地址 . . . . . . . . . . . . : 192.168.137.1
子网掩码  . . . . . . . . . . . . : 255.255.255.0
默认网关. . . . . . . . . . . . . :
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt="alt text"></p><p><img src="'+l+`" alt="alt text"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 应用完后，重启后才变化
$ service network restart
$ ifconfig 
..... xxx.xxx.xxx.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 可以非图形化设置网关
# sudo vim /etc/sysconfig/network-scripts/ifcfg-ens33 
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none      # none，用固定
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=28711c7c-1216-454e-a454-b7c9a08e71e6
DEVICE=ens33
ONBOOT=yes          # yes,开机启动
IPV6_PRIVACY=no
IPADDR=192.168.137.3    # ip
PREFIX=24
GATEWAY=192.168.137.2   # 网关
DNS1=8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 网关</span>
<span class="token punctuation">[</span>root@localhost miaoruntu<span class="token punctuation">]</span><span class="token comment"># ping 192.168.137.2</span>
PING <span class="token number">192.168</span>.137.2 <span class="token punctuation">(</span><span class="token number">192.168</span>.137.2<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">192.168</span>.137.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">128</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.189</span> ms
<span class="token number">64</span> bytes from <span class="token number">192.168</span>.137.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">128</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.148</span> ms
^C
--- <span class="token number">192.168</span>.137.2 <span class="token function">ping</span> statistics ---
<span class="token number">2</span> packets transmitted, <span class="token number">2</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 1000ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.148</span>/0.168/0.189/0.024 ms
<span class="token comment"># 主机</span>
<span class="token punctuation">[</span>root@localhost miaoruntu<span class="token punctuation">]</span><span class="token comment"># ping 192.168.190.52</span>
PING <span class="token number">192.168</span>.190.52 <span class="token punctuation">(</span><span class="token number">192.168</span>.190.52<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">192.168</span>.190.52: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">128</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.417</span> ms
^C
--- <span class="token number">192.168</span>.190.52 <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.417</span>/0.417/0.417/0.000 ms
<span class="token comment"># 上网</span>
<span class="token punctuation">[</span>root@localhost miaoruntu<span class="token punctuation">]</span><span class="token comment"># ping www.baidu.com</span>
PING www.a.shifen.com <span class="token punctuation">(</span><span class="token number">183.2</span>.172.185<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">183.2</span>.172.185 <span class="token punctuation">(</span><span class="token number">183.2</span>.172.185<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">128</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">49.6</span> ms

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[p];function o(r,d){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","vmware.html.vue"]]);export{u as default};
