import{_ as s,W as e,X as n,Y as a}from"./framework-9a5142fa.js";const i={},c=a(`<p>修改~/.ssh/config文件加入以下代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> ~/.ssh/config
Host *
HostkeyAlgorithms +ssh-rsa
PubkeyAcceptedKeyTypes +ssh-rsa
 
$ <span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">ssh</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[c];function o(l,d){return e(),n("div",null,t)}const u=s(i,[["render",o],["__file","host key不匹配.html.vue"]]);export{u as default};
