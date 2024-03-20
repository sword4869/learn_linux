import{_ as s,W as n,X as a,$ as e}from"./framework-586fce15.js";const l={},i=e(`<h1 id="script-arguments" tabindex="-1"><a class="header-anchor" href="#script-arguments" aria-hidden="true">#</a> script arguments</h1><blockquote><p>first argument is the name of the srcipt.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$0</span> <span class="token variable">$1</span> <span class="token variable">$2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./dollar.sh hello <span class="token number">21</span>
./dollar.sh hello <span class="token number">21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>$0</code> is the name of the script.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$1</span> <span class="token variable">$2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./dollar2.sh <span class="token number">2</span> <span class="token number">3</span>
<span class="token number">2</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>first argument is indeed argument.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token comment"># the length of arguments</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$#</span>

<span class="token comment"># all arguments</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$@</span>

<span class="token comment"># the arguments by index</span>
<span class="token assign-left variable">args</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${args<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span> <span class="token variable">\${args<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that <code>args=(&#39;$@&#39;)</code> is error.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./args.sh hello <span class="token number">1</span>
<span class="token number">2</span>
hello <span class="token number">1</span>
hello <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[i];function t(r,d){return n(),a("div",null,c)}const p=s(l,[["render",t],["__file","arguments.html.vue"]]);export{p as default};
