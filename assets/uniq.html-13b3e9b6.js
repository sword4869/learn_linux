import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 唯一</span>
$ <span class="token function">cat</span> a.txt
fsdf
sdfa
sdf
sdf
$ <span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">uniq</span>
fsdf
sdfa
sdf

<span class="token comment"># 显示出现几次</span>
$ <span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
      <span class="token number">1</span> fsdf
      <span class="token number">1</span> sdfa
      <span class="token number">2</span> sdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function d(t,r){return s(),a("div",null,c)}const v=n(i,[["render",d],["__file","uniq.html.vue"]]);export{v as default};
