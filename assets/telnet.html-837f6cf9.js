import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const t={},l=e(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> windows</h3><p>OptionalFeatures</p><p>选择tel客户端</p><h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> centos</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> telnet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>判断端口是否开放</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>telnet <span class="token number">192.168</span>.150.3 <span class="token number">80</span>


<span class="token comment"># 通的，开放的</span>
$  telnet <span class="token number">192.168</span>.150.3 <span class="token number">1180</span>
Trying <span class="token number">192.168</span>.150.3<span class="token punctuation">..</span>.
Connected to <span class="token number">192.168</span>.150.3.										
Escape character is <span class="token string">&#39;^]&#39;</span><span class="token builtin class-name">.</span>


brk
HTTP/1.1 <span class="token number">400</span> Bad Request
Server: nginx/1.26.2
Date: Fri, <span class="token number">29</span> Nov <span class="token number">2024</span> <span class="token number">17</span>:24:24 GMT
Content-Type: text/html
Content-Length: <span class="token number">157</span>
Connection: close

<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span><span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token number">400</span> Bad Request<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>center<span class="token operator">&gt;</span><span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token number">400</span> Bad Request<span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token operator">&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span><span class="token operator">&lt;</span>center<span class="token operator">&gt;</span>nginx/1.26.<span class="token operator"><span class="token file-descriptor important">2</span>&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>
Connection closed by foreign host.

<span class="token comment"># 不通的，不开放的</span>
$  telnet <span class="token number">192.168</span>.150.3 <span class="token number">180</span>
Trying <span class="token number">192.168</span>.150.3<span class="token punctuation">..</span>.
telnet: connect to address <span class="token number">192.168</span>.150.3: Connection refused		<span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[l];function o(p,i){return s(),a("div",null,r)}const d=n(t,[["render",o],["__file","telnet.html.vue"]]);export{d as default};
