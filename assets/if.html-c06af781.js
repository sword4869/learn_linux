import{_ as n,W as s,X as a,$ as e}from"./framework-586fce15.js";const i={},c=e(`<p>[toc]</p><hr><h1 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">..</span>.
<span class="token keyword">then</span>
    <span class="token punctuation">..</span>.
<span class="token keyword">elif</span> <span class="token punctuation">..</span>.
<span class="token keyword">then</span>
    <span class="token punctuation">..</span>.
<span class="token keyword">else</span>
    <span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if</code> and <code>elif</code> need <code>then</code>, while <code>then</code> don&#39;t.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">..</span>.<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token punctuation">..</span>.
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">..</span>.<span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token punctuation">..</span>.<span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is another format which uses semicolon.</p><h1 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> case</h1>`,8),d=[c];function t(o,l){return s(),a("div",null,d)}const r=n(i,[["render",t],["__file","if.html.vue"]]);export{r as default};
