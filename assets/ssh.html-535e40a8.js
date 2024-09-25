import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<ol><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># client</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> openssh-client
<span class="token comment"># server</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> openssh-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">ssh</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>看ip: 在ubuntu里看，windows的不对</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> net-tools

<span class="token comment"># 得到 192.168.137.2</span>
<span class="token function">ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>ssh</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> lab@192.168.137.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),t=[l];function c(o,d){return n(),a("div",null,t)}const r=s(i,[["render",c],["__file","ssh.html.vue"]]);export{r as default};
