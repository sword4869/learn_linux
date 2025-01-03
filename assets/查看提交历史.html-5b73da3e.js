import{_ as n,W as a,X as s,Y as e}from"./framework-9a5142fa.js";const i={},t=e(`<p>[toc]</p><h2 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log" aria-hidden="true">#</a> git log</h2><h3 id="默认" tabindex="-1"><a class="header-anchor" href="#默认" aria-hidden="true">#</a> 默认</h3><p>commit的 哈希值，作者、提交日期、提交说明</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log
commit d5e9fc2c811e0ca2b2d28506ef7dc14171a207d9 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Merge: c68142b <span class="token number">7774248</span>
Author: runoob <span class="token operator">&lt;</span>test@runoob.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">3</span> <span class="token number">15</span>:55:58 <span class="token number">2019</span> +0800

    Merge branch <span class="token string">&#39;change_site&#39;</span>

commit c68142b562c260c3071754623b08e2657b4c6d5b
Author: runoob <span class="token operator">&lt;</span>test@runoob.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">3</span> <span class="token number">15</span>:52:12 <span class="token number">2019</span> +0800

    修改代码
    
commit 777424832e714cf65d3be79b50a4717aea51ab69 <span class="token punctuation">(</span>change_site<span class="token punctuation">)</span>
Author: runoob <span class="token operator">&lt;</span>test@runoob.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">3</span> <span class="token number">15</span>:49:26 <span class="token number">2019</span> +0800

    changed the runoob.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oneline" tabindex="-1"><a class="header-anchor" href="#oneline" aria-hidden="true">#</a> --oneline</h3><p>精简一行：只现实哈希值前几位、提交说明</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
d5e9fc2 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> Merge branch <span class="token string">&#39;change_site&#39;</span>
c68142b 修改代码
<span class="token number">7774248</span> <span class="token punctuation">(</span>change_site<span class="token punctuation">)</span> changed the runoob.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="graph" tabindex="-1"><a class="header-anchor" href="#graph" aria-hidden="true">#</a> graph</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--graph</span>
* 6ccb57e8 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, origin/main, origin/HEAD<span class="token punctuation">)</span> <span class="token number">1130</span>
* 62f6181d 0601-am9-monitorian
* 106e138f <span class="token function">docker</span>
*   02d1e0bb Merge branch <span class="token string">&#39;main&#39;</span> of github.com:sword4869/learn_linux
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * 0b3027c8 0116
* <span class="token operator">|</span> d874a42a 0128
<span class="token operator">|</span>/
* 3553924c 1227c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="all-所有分支" tabindex="-1"><a class="header-anchor" href="#all-所有分支" aria-hidden="true">#</a> --all 所有分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--all</span>
* 6ccb57e8 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, origin/main, origin/HEAD<span class="token punctuation">)</span> <span class="token number">1130</span>
* 62f6181d 0601-am9-monitorian
<span class="token operator">|</span> * bca48f78 <span class="token punctuation">(</span>origin/gh-pages<span class="token punctuation">)</span> Auto deploy from Github Actions				【
<span class="token operator">|</span> * f73d5c27 <span class="token punctuation">(</span>refs/stash<span class="token punctuation">)</span> WIP on main: 106e138 <span class="token function">docker</span>
<span class="token operator">|</span>/<span class="token operator">|</span>
<span class="token operator">|</span> * 15cddcd4 index on main: 106e138 <span class="token function">docker</span>										其他分支没有融合的部分				
<span class="token operator">|</span>/
* 106e138f <span class="token function">docker</span>															】	
*   02d1e0bb Merge branch <span class="token string">&#39;main&#39;</span> of github.com:sword4869/learn_linux		【
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * 0b3027c8 0116
* <span class="token operator">|</span> d874a42a 0128																自己融合其他分支
<span class="token operator">|</span>/
* 3553924c 1227c															】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不加只会显示自己融合其他分支，但不会显示其他分支没有融合的部分。</p><h3 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h3><p><code>--reverse</code> 参数来逆向显示所有日志</p><p>​ <code>--graph</code> 不能和 <code>--reverse</code> 一起使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># </span>
$ <span class="token function">git</span> log <span class="token parameter variable">--reverse</span> <span class="token parameter variable">--oneline</span>
3b58100 第一次版本提交
3e92c19 <span class="token function">add</span> test.txt
c1501a2 removed test.txt、add runoob.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--author=xxx</code> 指定用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span>Linus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定时间：</p><ul><li><code>--after</code> / <code>--since</code>: 时间后</li><li><code>--before</code> / <code>--until</code>：时间前</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--before</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span>.weeks.ago<span class="token punctuation">}</span> <span class="token parameter variable">--after</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2010</span>-04-18<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>限制显示的提交数:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">-n</span> <span class="token number">5</span>
$ <span class="token function">git</span> log <span class="token parameter variable">-5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回退-git-reset" tabindex="-1"><a class="header-anchor" href="#回退-git-reset" aria-hidden="true">#</a> 回退 git reset</h2><ul><li>soft：保留当前工作区，以便重新提交，比如我们这次是修改后重新提交</li><li>hard：会撤销相应工作区的修改，一定要谨慎使用。一般用于指定某个版本的内容，不考虑自己的修改。</li><li>mixed（默认）：</li></ul><h3 id="查看所有提交历史-reflog" tabindex="-1"><a class="header-anchor" href="#查看所有提交历史-reflog" aria-hidden="true">#</a> 查看所有提交历史 reflog</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>git log只会显示HEAD记录链上的提交记录，git reflog则记录着所有的提交记录。</p><p>如果你不小心进行了硬重置 (<code>git reset --hard</code>) 并丢失了一些未推送的提交，你可以使用 <code>git reflog</code> 来查找并恢复这些提交。</p><h3 id="建议" tabindex="-1"><a class="header-anchor" href="#建议" aria-hidden="true">#</a> 建议</h3><p>git stash</p><p>git revert</p><p>使用 --hard 时需格外小心，因为它会导致不可恢复的数据丢失。确保你确实想要放弃那些未提交的更改，并考虑在此之前创建备份或使用更安全的方式如 <code>git stash</code> 或 <code>git checkout -- &lt;file&gt;</code> 来恢复个别文件10。</p><p>在团队协作环境中，尤其是在共享分支上进行开发时，应该避免使用 git reset 修改已经推送至远程仓库的历史记录。相反，建议使用 git revert 来生成新的提交来反向应用之前的更改12。</p>`,35),l=[t];function r(o,c){return a(),s("div",null,l)}const d=n(i,[["render",r],["__file","查看提交历史.html.vue"]]);export{d as default};
