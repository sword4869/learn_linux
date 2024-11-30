import{_ as e,W as s,X as a,Y as n}from"./framework-9a5142fa.js";const i={},d=n(`<p>[toc]</p><hr><h1 id="scanf" tabindex="-1"><a class="header-anchor" href="#scanf" aria-hidden="true">#</a> scanf</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> v1
<span class="token builtin class-name">echo</span> <span class="token variable">$v1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./read_input.sh 
enter a word
fff
fff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="print" tabindex="-1"><a class="header-anchor" href="#print" aria-hidden="true">#</a> print</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">keyword1
keep 
the
same
keyword1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./long_echo.sh 
keep 
the
same
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS: must be <code>&lt;&lt;</code>! <code>&lt;</code> is error.</p>`,10),l=[d];function r(c,t){return s(),a("div",null,l)}const u=e(i,[["render",r],["__file","index.html.vue"]]);export{u as default};
