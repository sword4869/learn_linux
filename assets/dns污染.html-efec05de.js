import{_ as t,W as i,X as o,Z as s,$ as n,a0 as l,Y as e,E as c}from"./framework-9a5142fa.js";const p={},r=e(`<blockquote><p>问题锁定：</p></blockquote><p>使用密钥认证来登录github时</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找不到 github.com</span>
$ <span class="token function">ssh</span> <span class="token parameter variable">-vT</span> git@github.com
OpenSSH_8.9p1 Ubuntu-3ubuntu0.3, OpenSSL <span class="token number">3.0</span>.2 <span class="token number">15</span> Mar <span class="token number">2022</span>
debug1: Reading configuration data /home/sword/.ssh/config
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line <span class="token number">19</span>: include /etc/ssh/ssh_config.d/*.conf matched no files
debug1: /etc/ssh/ssh_config line <span class="token number">21</span>: Applying options <span class="token keyword">for</span> *
ssh: Could not resolve <span class="token function">hostname</span> github.com: Temporary failure <span class="token keyword">in</span> name resolution			<span class="token comment">#### &lt;&lt;&lt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>解决：替换 github.com 的 HostName 来找到</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /home/sword/.ssh/config
Host github.com
    <span class="token comment"># &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span>
    HostName ssh.github.com
   	<span class="token comment"># HostName 140.82.113.4</span>
   	<span class="token comment"># &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span>
    PreferredAuthentications publickey
    IdentityFile /home/sword/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）一般用 <code>ssh.github.com</code> 就可以找到</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ping</span> ssh.github.com
Ping 请求找不到主机 ssh.github.com。请检查该名称，然后重试。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d={href:"https://myssl.com/dns_check.html",target:"_blank",rel:"noopener noreferrer"},u=e(`<p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202411161521476.png" alt="image-20241116152104412"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ping</span> <span class="token number">20.205</span>.243.166

正在 Ping <span class="token number">20.205</span>.243.166 具有 <span class="token number">32</span> 字节的数据:
来自 <span class="token number">20.205</span>.243.166 的回复: 字节<span class="token operator">=</span><span class="token number">32</span> 时间<span class="token operator">=</span>140ms <span class="token assign-left variable">TTL</span><span class="token operator">=</span><span class="token number">111</span>
来自 <span class="token number">20.205</span>.243.166 的回复: 字节<span class="token operator">=</span><span class="token number">32</span> 时间<span class="token operator">=</span>130ms <span class="token assign-left variable">TTL</span><span class="token operator">=</span><span class="token number">111</span>
来自 <span class="token number">20.205</span>.243.166 的回复: 字节<span class="token operator">=</span><span class="token number">32</span> 时间<span class="token operator">=</span>132ms <span class="token assign-left variable">TTL</span><span class="token operator">=</span><span class="token number">111</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(g,b){const a=c("ExternalLinkIcon");return i(),o("div",null,[r,s("p",null,[n("（2）如果出现了意外情况，那么只能手动"),s("a",d,[n("查找域名"),l(a)])]),u])}const h=t(p,[["render",m],["__file","dns污染.html.vue"]]);export{h as default};
