import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const t={},i=e(`<h2 id="删除大文件" tabindex="-1"><a class="header-anchor" href="#删除大文件" aria-hidden="true">#</a> 删除大文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第三列表示大小（单位B），按照第三列数值排序，取尾巴展示3个（最后一个最大 47MB）</span>
$ <span class="token function">git</span> verify-pack <span class="token parameter variable">-v</span> .git/objects/pack/pack-*.idx <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-k</span> <span class="token number">3</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-3</span>
37bac79bc6f002d965f363e0b20514904504a4d9 blob   <span class="token number">7840016</span> <span class="token number">4419835</span> <span class="token number">40235285</span>
e6ee0e37929b03937517cd45e65f4e8ca9de720d blob   <span class="token number">26421880</span> <span class="token number">26429945</span> <span class="token number">75503520</span>
ff2f5a96367a3c1656f09c93649f07143ff8b11e blob   <span class="token number">47040016</span> <span class="token number">26414660</span> <span class="token number">49088860</span>


<span class="token comment"># 显示名字是 &#39;pytorch/data/FashionMNIST/raw/t10k-images-idx3-ubyte&#39;</span>
$ <span class="token function">git</span> rev-list <span class="token parameter variable">--objects</span> <span class="token parameter variable">--all</span> <span class="token operator">|</span> <span class="token function">grep</span> 37bac79bc6f002d965f363e0b20514904504a4d9
37bac79bc6f002d965f363e0b20514904504a4d9 pytorch/data/FashionMNIST/raw/t10k-images-idx3-ubyte

<span class="token comment"># 根据这个名字删除</span>
$ <span class="token function">git</span> filter-branch --index-filter <span class="token string">&#39;git rm --cached --ignore-unmatch  pytorch/data/FashionMNIST/raw/t10k-images-idx3-ubyte&#39;</span>
WARNING: git-filter-branch has a glut of gotchas generating mangled <span class="token function">history</span>
         rewrites.  Hit Ctrl-C before proceeding to abort, <span class="token keyword">then</span> use an
         alternative filtering tool such as <span class="token string">&#39;git filter-repo&#39;</span>
         <span class="token punctuation">(</span>https://github.com/newren/git-filter-repo/<span class="token punctuation">)</span> instead.  See the
         filter-branch manual page <span class="token keyword">for</span> <span class="token function">more</span> details<span class="token punctuation">;</span> to squelch this warning,
         <span class="token builtin class-name">set</span> <span class="token assign-left variable">FILTER_BRANCH_SQUELCH_WARNING</span><span class="token operator">=</span><span class="token number">1</span>.
Proceeding with filter-branch<span class="token punctuation">..</span>.

Rewrite d7576968372e3b929a1631fe95ef7dba910ab76f <span class="token punctuation">(</span><span class="token number">1</span>/1<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token number">0</span> seconds passed, remaining <span class="token number">0</span> predicted<span class="token punctuation">)</span>    
WARNING: Ref <span class="token string">&#39;refs/heads/main&#39;</span> is unchanged

<span class="token comment"># 本地删除</span>
$ <span class="token function">rm</span> <span class="token parameter variable">-rf</span> .git/refs/original/


$ <span class="token function">git</span> reflog expire <span class="token parameter variable">--expire</span><span class="token operator">=</span>now <span class="token parameter variable">--all</span>


$ <span class="token function">git</span> gc <span class="token parameter variable">--prune</span><span class="token operator">=</span>now
Enumerating objects: <span class="token number">2440</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2440</span>/2440<span class="token punctuation">)</span>, done.
Delta compression using up to <span class="token number">16</span> threads
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">1189</span>/1189<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2440</span>/2440<span class="token punctuation">)</span>, done.
Total <span class="token number">2440</span> <span class="token punctuation">(</span>delta <span class="token number">1208</span><span class="token punctuation">)</span>, reused <span class="token number">2440</span> <span class="token punctuation">(</span>delta <span class="token number">1208</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>


$ <span class="token function">git</span> gc <span class="token parameter variable">--aggressive</span> <span class="token parameter variable">--prune</span><span class="token operator">=</span>now
Enumerating objects: <span class="token number">2440</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2440</span>/2440<span class="token punctuation">)</span>, done.
Delta compression using up to <span class="token number">16</span> threads
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2397</span>/2397<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2440</span>/2440<span class="token punctuation">)</span>, done.
Total <span class="token number">2440</span> <span class="token punctuation">(</span>delta <span class="token number">1303</span><span class="token punctuation">)</span>, reused <span class="token number">1068</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment"># 这里对远程无效，是因为commit没有做任何修改，仅仅删除obejct文件是不认做修改的。</span>
$ <span class="token function">git</span> push origin main <span class="token parameter variable">--force</span>
Everything up-to-date


$ <span class="token function">git</span> remote prune origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，少了2mb。</p>`,3),p=[i];function c(l,o){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","删除大文件.html.vue"]]);export{u as default};
