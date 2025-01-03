import{_ as n,W as a,X as e,Y as s}from"./framework-9a5142fa.js";const i={},c=s(`<p>[toc]</p><h2 id="change-mac" tabindex="-1"><a class="header-anchor" href="#change-mac" aria-hidden="true">#</a> change MAC</h2><h3 id="显示某设备-mac" tabindex="-1"><a class="header-anchor" href="#显示某设备-mac" aria-hidden="true">#</a> 显示某设备 mac</h3><blockquote><p>方法1</p></blockquote><p><code>ifconfig</code>中<code>ether</code>就是 mac。</p><blockquote><p>方法2</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 同macchanger -s eth0</span>
$ macchanger eth0
Current MAC:   <span class="token number">64</span>:0b:4a:eb:ce:b5 <span class="token punctuation">(</span>Digital Telecom Technology Limited<span class="token punctuation">)</span>
Permanent MAC: 00:0c:29:22:38:7b <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Current MAC</code>: 是当前显示的地址</li><li><code>Permanent MAC</code>: 是 BIA（Burned-In Address，固化地址）。</li></ul><h3 id="查看-mac-地址的厂商" tabindex="-1"><a class="header-anchor" href="#查看-mac-地址的厂商" aria-hidden="true">#</a> 查看 mac 地址的厂商</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ macchanger <span class="token parameter variable">-l</span>
Misc MACs:
Num    MAC        Vendor
---    ---        ------
0000 - 00:00:00 - XEROX CORPORATION
<span class="token punctuation">..</span>.
Wireless MACs:
Num    MAC        Vendor
---    ---        ------
0000 - 00:00:8f - Raytheon Raylink/WebGear Aviator2.4
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>mac 地址的前 3 对十六进制数：表示网络硬件制造商的编号，即 OUI（Organizationally-Unique Identifier）。</li><li>mac 地址的后 3 对十六进制数：表示mac 厂商 vendor，两种大类型（Misc 杂项设备 和 Wireless 无线设备）。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>└─<span class="token comment"># macchanger -l | grep 64:0b:4a</span>
<span class="token number">15138</span> - <span class="token number">64</span>:0b:4a - Digital Telecom Technology Limited
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>64:0b:4a:eb:ce:b5</code>的<code>64:0b:4a</code>查询出来表示属于<code>Digital Telecom Technology Limited</code>的产品。</p><h3 id="修改-mac" tabindex="-1"><a class="header-anchor" href="#修改-mac" aria-hidden="true">#</a> 修改 mac</h3><blockquote><p>方法1</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 同样的大类，同样的厂商</span>
└─<span class="token comment"># macchanger -e eth0</span>
Current MAC:   <span class="token number">64</span>:0b:4a:eb:ce:b5 <span class="token punctuation">(</span>Digital Telecom Technology Limited<span class="token punctuation">)</span>
Permanent MAC: 00:0c:29:22:38:7b <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span>
New MAC:       <span class="token number">64</span>:0b:4a:78:13:16 <span class="token punctuation">(</span>Digital Telecom Technology Limited<span class="token punctuation">)</span>

<span class="token comment"># 同样的大类（Misc和Wireless），任意的厂商</span>
└─<span class="token comment"># macchanger -a eth0</span>
Current MAC:   <span class="token number">64</span>:0b:4a:78:13:16 <span class="token punctuation">(</span>Digital Telecom Technology Limited<span class="token punctuation">)</span>
Permanent MAC: 00:0c:29:22:38:7b <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span>
New MAC:       00:0a:97:8a:c8:c7 <span class="token punctuation">(</span>SONICblue, Inc.<span class="token punctuation">)</span>

<span class="token comment"># 任意大类，任意厂商</span>
└─<span class="token comment"># macchanger -A eth0</span>
Current MAC:   00:0a:97:8a:c8:c7 <span class="token punctuation">(</span>SONICblue, Inc.<span class="token punctuation">)</span>
Permanent MAC: 00:0c:29:22:38:7b <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span>
New MAC:       00:18:35:1a:1c:a9 <span class="token punctuation">(</span>Thoratec / ITC<span class="token punctuation">)</span>

<span class="token comment"># 任意的mac，有的没有注册厂商</span>
└─<span class="token comment"># macchanger -r eth0</span>
Current MAC:   00:18:35:1a:1c:a9 <span class="token punctuation">(</span>Thoratec / ITC<span class="token punctuation">)</span>
Permanent MAC: 00:0c:29:22:38:7b <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span>
New MAC:       da:32:34:7d:ec:8a <span class="token punctuation">(</span>unknown<span class="token punctuation">)</span>

<span class="token comment"># 指定mac修改</span>
└─<span class="token comment"># macchanger -m 64:0b:4a:eb:ce:b5 eth0</span>
Current MAC:   da:32:34:7d:ec:8a <span class="token punctuation">(</span>unknown<span class="token punctuation">)</span>
Permanent MAC: 00:0c:29:22:38:7b <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span>
New MAC:       <span class="token number">64</span>:0b:4a:eb:ce:b5 <span class="token punctuation">(</span>Digital Telecom Technology Limited<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>方法2</p></blockquote><p><code>ipconfig</code> show <strong>active</strong> network interfaces. Active means that you cannot see the dead network interface after use <code>ipconfig eth0 down</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">ifconfig</span> eth0 down
$ <span class="token function">sudo</span> <span class="token function">ifconfig</span> eth0 hw ether 00:11:22:33:44:55
$ <span class="token function">sudo</span> <span class="token function">ifconfig</span> eth0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp" aria-hidden="true">#</a> DHCP</h2><p>先设定成局域网的ip段，再获取动态IP</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ifconfig</span> eth0 <span class="token number">192.168</span>.0.4
$ dhclient eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><h3 id="dig" tabindex="-1"><a class="header-anchor" href="#dig" aria-hidden="true">#</a> dig</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dig</span> hackers-arise.com ns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ns</code> is nameserver, and for mail exchange server is <code>mx</code>.</p><h3 id="alter" tabindex="-1"><a class="header-anchor" href="#alter" aria-hidden="true">#</a> alter</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;nameserver 8.8.8.8&quot;</span> <span class="token operator">&gt;</span> /etc/resolv.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>DHCP serve provides a DNS setting (replace the contents of the file) when it renews the DHCP address.</p><h2 id="hosts" tabindex="-1"><a class="header-anchor" href="#hosts" aria-hidden="true">#</a> hosts</h2><p>You can determine which ip address when you enter www.microsoft.com, rather than let the DNS server decides.</p><p>This can be useful forhijacking a TCP connection on your local area network to direct traffic to a malicious web server with a too such as <code>dnsspoof</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># press TAB, not spacebar.</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;127.0.0.1   HOSTNAME&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,33),t=[c];function l(d,o){return a(),e("div",null,t)}const u=n(i,[["render",l],["__file","network.html.vue"]]);export{u as default};
