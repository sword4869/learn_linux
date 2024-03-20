import{_ as s,W as a,X as n,$ as e}from"./framework-586fce15.js";const l={},i=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">n1</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token builtin class-name">declare</span> <span class="token assign-left variable">n1</span><span class="token operator">=</span><span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>readonly variable</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">declare</span> <span class="token parameter variable">-r</span> <span class="token assign-left variable">n2</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token comment"># error</span>
<span class="token comment"># n2=11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[i];function c(t,o){return a(),n("div",null,r)}const p=s(l,[["render",c],["__file","variable.html.vue"]]);export{p as default};
