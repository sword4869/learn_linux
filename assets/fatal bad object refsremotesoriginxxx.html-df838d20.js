import{_ as e,W as a,X as s,Y as i}from"./framework-9a5142fa.js";const r={},t=i(`<h2 id="fatal-bad-object-refs-remotes-origin-xxx" tabindex="-1"><a class="header-anchor" href="#fatal-bad-object-refs-remotes-origin-xxx" aria-hidden="true">#</a> fatal: bad object refs/remotes/origin/xxx</h2><p>git拉取时报错</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull     
error: github.com:sword4869/learn_java.git did not send all necessary objects

fatal: bad object refs/remotes/origin/main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法，到项目的<code>.git/refs/remotes/origin/</code> 目录下</p><p>删除所有内容</p><p>重新拉取，成功</p>`,6),n=[t];function o(d,c){return a(),s("div",null,n)}const b=e(r,[["render",o],["__file","fatal bad object refsremotesoriginxxx.html.vue"]]);export{b as default};