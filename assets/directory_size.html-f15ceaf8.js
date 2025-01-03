import{_ as e,W as n,X as s,Y as a}from"./framework-9a5142fa.js";const i={},d=a(`<h2 id="目录层级" tabindex="-1"><a class="header-anchor" href="#目录层级" aria-hidden="true">#</a> 目录层级</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> tree

tree <span class="token parameter variable">-L</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录总大小" tabindex="-1"><a class="header-anchor" href="#目录总大小" aria-hidden="true">#</a> 目录总大小</h2><p><code>tree</code>,<code>ls</code>都是4096B的指针大小。</p><p>真正的目录总大小： <code>du</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#### one parent directory</span>
<span class="token comment"># $ du -h --max-depth=0 /home/daygeek/Documents/</span>
$ <span class="token function">du</span> <span class="token parameter variable">-hs</span> /home/daygeek/Documents
20G    /home/daygeek/Documents


<span class="token comment">#### each child directories</span>
<span class="token comment"># 等同于 $ du -h --max-depth=1 .</span>
$ <span class="token function">du</span> <span class="token parameter variable">-hs</span> ./*
<span class="token number">4</span>.0K    ./公共的
68G     ./miniconda3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-h, --human-readable</code>: 以人类可读的格式输出大小（例如，1K 234M 2G）</li><li><code>-s, --summarize</code>: 仅对每个命令行参数输出一个总使用量, i.e. show respective total size of the directories <code>./*</code>.</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">du</span> <span class="token parameter variable">-hsc</span> ./*
<span class="token number">4</span>.0K    ./公共的
68G     ./miniconda3
68G     total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-c, --total</code>: 显示总计信息</li></ul>`,9),c=[d];function l(r,t){return n(),s("div",null,c)}const u=e(i,[["render",l],["__file","directory_size.html.vue"]]);export{u as default};
