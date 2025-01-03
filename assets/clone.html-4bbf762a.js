import{_ as n,W as e,X as s,Y as a}from"./framework-9a5142fa.js";const i={},c=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载所有分支 + 检出为默认分支</span>
<span class="token function">git</span> clone origin

<span class="token comment"># 下载所有分支 + 指定了要检出的分支</span>
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> 分支名 origin

<span class="token comment"># 只下载指定分支并检出</span>
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> 分支名 --single-branch origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[c];function t(o,r){return e(),s("div",null,l)}const m=n(i,[["render",t],["__file","clone.html.vue"]]);export{m as default};
