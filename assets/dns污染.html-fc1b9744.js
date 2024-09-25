import{_ as i,W as t,X as o,Z as s,$ as n,a0 as l,Y as e,E as c}from"./framework-9a5142fa.js";const r={},p=s("h2",{id:"ssh-config",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ssh-config","aria-hidden":"true"},"#"),n(" ssh config")],-1),d=s("p",null,"替换 github.com 的 HostName 来找到",-1),u=e(`<li><p>上默认</p><p>一般用 <code>ssh.github.com</code> 就可以找到</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /home/sword/.ssh/config
Host github.com
    <span class="token comment"># &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span>
    HostName ssh.github.com
    PreferredAuthentications publickey
    IdentityFile /home/sword/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),m=e(`<p>精准域名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /home/sword/.ssh/config
Host github.com
    <span class="token comment"># &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span>
    HostName <span class="token number">140.82</span>.113.4
    PreferredAuthentications publickey
    IdentityFile /home/sword/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 域名污染, 找不到 github.com</span>
$ <span class="token function">ssh</span> <span class="token parameter variable">-vT</span> git@github.com
OpenSSH_8.9p1 Ubuntu-3ubuntu0.3, OpenSSL <span class="token number">3.0</span>.2 <span class="token number">15</span> Mar <span class="token number">2022</span>
debug1: Reading configuration data /home/sword/.ssh/config
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line <span class="token number">19</span>: include /etc/ssh/ssh_config.d/*.conf matched no files
debug1: /etc/ssh/ssh_config line <span class="token number">21</span>: Applying options <span class="token keyword">for</span> *
ssh: Could not resolve <span class="token function">hostname</span> github.com: Temporary failure <span class="token keyword">in</span> name resolution

$ <span class="token function">ping</span> ssh.github.com
Ping 请求找不到主机 ssh.github.com。请检查该名称，然后重试。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g={href:"https://myssl.com/dns_check.html",target:"_blank",rel:"noopener noreferrer"},b=e(`<p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231907927.png" alt="图 1"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ping</span> <span class="token number">140.82</span>.113.4

正在 Ping <span class="token number">140.82</span>.113.4 具有 <span class="token number">32</span> 字节的数据:
来自 <span class="token number">140.82</span>.113.4 的回复: 字节<span class="token operator">=</span><span class="token number">32</span> 时间<span class="token operator">=</span>278ms <span class="token assign-left variable">TTL</span><span class="token operator">=</span><span class="token number">43</span>
来自 <span class="token number">140.82</span>.113.4 的回复: 字节<span class="token operator">=</span><span class="token number">32</span> 时间<span class="token operator">=</span>296ms <span class="token assign-left variable">TTL</span><span class="token operator">=</span><span class="token number">43</span>
来自 <span class="token number">140.82</span>.113.4 的回复: 字节<span class="token operator">=</span><span class="token number">32</span> 时间<span class="token operator">=</span>309ms <span class="token assign-left variable">TTL</span><span class="token operator">=</span><span class="token number">43</span>
来自 <span class="token number">140.82</span>.113.4 的回复: 字节<span class="token operator">=</span><span class="token number">32</span> 时间<span class="token operator">=</span>286ms <span class="token assign-left variable">TTL</span><span class="token operator">=</span><span class="token number">43</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(h,k){const a=c("ExternalLinkIcon");return t(),o("div",null,[p,d,s("ol",null,[u,s("li",null,[m,s("p",null,[n("如果出现了意外情况，那么只能手动"),s("a",g,[n("查找域名"),l(a)])]),b])])])}const _=i(r,[["render",v],["__file","dns污染.html.vue"]]);export{_ as default};
