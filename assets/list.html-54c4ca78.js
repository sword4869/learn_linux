import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const l={},i=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
$ <span class="token assign-left variable">listTest</span><span class="token operator">=</span><span class="token punctuation">(</span>value1 value2 value3<span class="token punctuation">)</span>

$ <span class="token builtin class-name">echo</span> <span class="token variable">$listTest</span> 
value1
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${listTest}</span>
value1

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${listTest<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
value1 value2 value3

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${listTest<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>
value1
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${listTest<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>
value2
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${listTest<span class="token punctuation">[</span>-1<span class="token punctuation">]</span>}</span>
value3

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>listTest<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token number">3</span>

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">!</span>listTest<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">subdirs</span><span class="token operator">=</span><span class="token punctuation">(</span>bala  biden  justin  malte_1  marcel  nf_01  nf_03  obama<span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">subject</span> <span class="token keyword">in</span> <span class="token variable">\${subdirs<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$subject</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[i];function c(p,o){return n(),a("div",null,t)}const d=s(l,[["render",c],["__file","list.html.vue"]]);export{d as default};
