import{_ as e,W as s,X as n,Y as a}from"./framework-9a5142fa.js";const i={},c=a(`<p>将SELINUX=enforcing改为SELINUX=disabled</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vi</span> /etc/selinux/config
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
<span class="token comment"># 重启</span>
$ <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[c];function t(o,d){return s(),n("div",null,l)}const p=e(i,[["render",t],["__file","selinux.html.vue"]]);export{p as default};
