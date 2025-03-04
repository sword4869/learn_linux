import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const t={},l=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可以非图形化设置网关</span>
<span class="token comment"># sudo vim /etc/sysconfig/network-scripts/ifcfg-ens33 </span>
<span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet
<span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span>none
<span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span>no
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>none      	<span class="token comment"># &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; none，用固定ip; dhcp，动态</span>
<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPV6_ADDR_GEN_MODE</span><span class="token operator">=</span>stable-privacy
<span class="token assign-left variable">NAME</span><span class="token operator">=</span>ens33
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>28711c7c-1216-454e-a454-b7c9a08e71e6
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>ens33
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes          	<span class="token comment"># yes,开机启动</span>
<span class="token assign-left variable">IPV6_PRIVACY</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.137.3    <span class="token comment"># &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; ip</span>
<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token number">24</span>
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.137.2   <span class="token comment"># &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; 网关</span>
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token number">8.8</span>.8.8            <span class="token comment"># &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; DNS也可以同网关，委托给网关获取DNS</span>
<span class="token assign-left variable">DNS2</span><span class="token operator">=</span><span class="token number">114.114</span>.114.144
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 应用完后，重启后才变化</span>
$ systemctl restart network
$ <span class="token function">ifconfig</span> 
<span class="token punctuation">..</span><span class="token punctuation">..</span>. xxx.xxx.xxx.3

<span class="token comment"># 同时，这个文件也会同步变化</span>
$ <span class="token function">cat</span> /etc/resolv.conf
nameserver <span class="token number">8.8</span>.8.8
nameserver <span class="token number">114.114</span>.114.114
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题-重启网络失败-job-for-network-service-failed" tabindex="-1"><a class="header-anchor" href="#问题-重启网络失败-job-for-network-service-failed" aria-hidden="true">#</a> 问题：重启网络失败 Job for network.service failed</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Restarting network <span class="token punctuation">(</span>via systemctl<span class="token punctuation">)</span>: Job <span class="token keyword">for</span> network.service failed because the control process exited with error code.
See “systemctl status network.service” and “journalctl -xe” <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：</p><p>在CentOS系统上，目前有NetworkManager和network两种网络管理工具。如果两种都配置会引起冲突，而且NetworkManager在网络断开的时候，会清理路由，如果一些自定义的路由，没有加入到NetworkManager的配置文件中，路由就被清理掉，网络连接后需要自定义添加上去。</p><p>解决方法：</p><p>1.将networkmanager服务停了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop NetworkManager
systemctl disable NetworkManager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.重启网卡，就ok了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),i=[l];function r(o,c){return n(),a("div",null,i)}const d=s(t,[["render",r],["__file","修改网络ip.html.vue"]]);export{d as default};
