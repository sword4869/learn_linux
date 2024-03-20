import{_ as e,W as a,X as n,$ as s}from"./framework-586fce15.js";const i={},t=s(`<blockquote><p>for filename with space</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># quotation</span>
$ ./file.sh <span class="token string">&quot;log diary.txt&quot;</span>
hello world

<span class="token comment"># slash the space</span>
$ ./file.sh log<span class="token punctuation">\\</span> diary.txt
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="write-to-file" tabindex="-1"><a class="header-anchor" href="#write-to-file" aria-hidden="true">#</a> write to file</h1><h2 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> echo</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># rewrite</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">&gt;</span> log.txt

<span class="token comment"># append</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;world&quot;</span> <span class="token operator">&gt;&gt;</span> log.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> log.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>you get into an editor where you can input from keyboard. Even you can input enter character.</p><p>when you wand to get out of it, press <code>ctrl + d</code>.</p>`,9),l=[t];function o(c,d){return a(),n("div",null,l)}const u=e(i,[["render",o],["__file","file.html.vue"]]);export{u as default};
