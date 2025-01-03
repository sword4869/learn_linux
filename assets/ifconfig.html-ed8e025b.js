import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const o={},t=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭网络接口</span>
$ <span class="token function">sudo</span> <span class="token function">ifconfig</span> eth0 down

<span class="token comment"># 显示活跃的网络接口</span>
$ <span class="token function">ifconfig</span> 
lo: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">7</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,LOOPBACK,RUNNING<span class="token operator">&gt;</span>  mtu <span class="token number">65536</span>
wlan0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">409</span><span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>UP,BROADCAST,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>

<span class="token comment"># 显示全部的网络接口</span>
$ <span class="token function">ifconfig</span> <span class="token parameter variable">-a</span>
eth0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
lo: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">7</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,LOOPBACK,RUNNING<span class="token operator">&gt;</span>  mtu <span class="token number">65536</span>
wlan0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">409</span><span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>UP,BROADCAST,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>

<span class="token comment"># 开启网络接口</span>
$ <span class="token function">sudo</span> <span class="token function">ifconfig</span> eth0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有 3 个 <strong>networking interface</strong>: <code>eth0</code>（本机）、<code>lo</code>（回环）、<code>wlan0</code>（usb wifi）</p><p>使用 <code>ifconfig eth0 up/down</code> 来代替 <code>ifup/ifdown eth0</code>，因为 <code>ifup/ifdown</code> 还需要配置 <code>/etc/network/interfaces</code>。</p><p>临时修改网络接口的ip、netmask、broadcast，重启失效。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># default mask is 255.255.255.0 and broadcast.</span>
$ <span class="token function">sudo</span> <span class="token function">ifconfig</span> eth0 <span class="token number">192.168</span>.150.5

<span class="token comment"># special mask and broadcast</span>
$ <span class="token function">sudo</span> <span class="token function">ifconfig</span> eth0 <span class="token number">192.168</span>.150.5 netmask <span class="token number">255.255</span>.255.0 broadcast <span class="token number">192.168</span>.150.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function i(p,c){return n(),a("div",null,l)}const d=s(o,[["render",i],["__file","ifconfig.html.vue"]]);export{d as default};
