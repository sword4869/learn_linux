import{_ as n,W as a,X as s,Y as e}from"./framework-9a5142fa.js";const i={},t=e(`<p>[toc]</p><h2 id="show-branch" tabindex="-1"><a class="header-anchor" href="#show-branch" aria-hidden="true">#</a> show branch</h2><p><code>git branch</code>列出的分支前带 <code>*</code>号的表示当前分支。</p><ul><li>默认显示本地分支</li><li>-v 显示详细信息</li><li>-a 显示本地和远程</li><li>-r 只显示远程。所以去掉了r</li></ul><p>但是并不会显示fetch下来的分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
* main

$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* main 35a169c <span class="token punctuation">[</span>behind <span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">1</span>

$ <span class="token function">git</span> branch <span class="token parameter variable">-a</span>
* main
  remotes/origin/HEAD -<span class="token operator">&gt;</span> origin/main
  remotes/origin/gh-pages
  remotes/origin/main
  
$ <span class="token function">git</span> branch <span class="token parameter variable">-r</span>
  origin/HEAD -<span class="token operator">&gt;</span> origin/main
  origin/gh-pages
  origin/main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="remove-branch" tabindex="-1"><a class="header-anchor" href="#remove-branch" aria-hidden="true">#</a> remove branch</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 同当前分支一样，即merge过的，那么就不会error</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># 同当前分支不一样，所以要强制删除</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="切换和添加分支" tabindex="-1"><a class="header-anchor" href="#切换和添加分支" aria-hidden="true">#</a> 切换和添加分支</h2><p>对于不同分支，<strong>工作区和暂存区是共用的</strong>。</p><p>创建分支，是对当前分支的<strong>提交历史</strong>进行镜像，而并不复制工作区和暂存区。</p><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout orange
<span class="token comment"># 由于checkout也是对文件的命令，git为了避免歧义而新建了switch命令。</span>
$ <span class="token function">git</span> switch orange
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-a-branch" tabindex="-1"><a class="header-anchor" href="#add-a-branch" aria-hidden="true">#</a> add a branch</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git branch &lt;branch&gt;</span>
$ <span class="token function">git</span> branch orange
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># add a branch and switch to it. \`-b\` means branch.</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>
$ <span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rename-a-branch" tabindex="-1"><a class="header-anchor" href="#rename-a-branch" aria-hidden="true">#</a> rename a branch</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-M: 
Shortcut for --move --force.

-m/--move:
Move/rename a branch, together with its config and reflog.

-f/--force
Reset &lt;branchname&gt; to &lt;startpoint&gt;, even if &lt;branchname&gt; exists already. Without -f, git branch refuses to change an existing branch. In combination with -d (or --delete), allow deleting the branch irrespective of its merged status, or whether it even points to a valid commit. In combination with -m (or --move), allow renaming the branch even if the new branch name already exists, the same applies for -c (or --copy).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>i.e. 想要重命名已存在的分支，重命名是 <code>-m</code>，而修改已存在需要 <code>--force</code>，<code>-M = -m -f</code>。</p><h2 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> merge</h2><p><code>git merge &lt;other branch&gt;</code>: <strong>当前分支吸收指定分支的内容</strong></p><ul><li><p>merge后，指定分支<strong>并不会消失</strong>。</p></li><li><p>merge分为两种情况</p><p>fast-forward：</p><p>​ 当前分支没有变化，而只有其他分支变化时，那么合并的结果就完全可以是其他分支的记录。</p><p>​ 只是移动头指针，<strong>记录数不变</strong>。</p><p>no-fast-forward：</p><p>​ 当前分支和对方分支都变了，那么合并的结果必然是一个不同于二者的新记录。</p><p>​ 当前分支就<strong>多了一条提交记录</strong>。</p></li></ul><p>merge规则：</p><ul><li><p>当前分支中有，某分支中没有的：则<strong>删除</strong>当前分支中的。</p></li><li><p>当前分支中没有，某分支中有的：则添加到当前分支。</p></li><li><p>当前分支和某分支中的共同部分：冲突。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># new 分支新增文件</span>
$ <span class="token function">git</span> switch new
Switched to branch <span class="token string">&#39;new&#39;</span>
$ <span class="token builtin class-name">echo</span> <span class="token number">2</span> <span class="token operator">&gt;</span> new.txt
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;2&#39;</span>
<span class="token punctuation">[</span>new 00d73b9<span class="token punctuation">]</span> <span class="token number">2</span>
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> new.txt
$ <span class="token function">git</span> switch main
Switched to branch <span class="token string">&#39;main&#39;</span>

<span class="token comment"># main分支合并new分支</span>
$ <span class="token function">git</span> merge new
Merge made by the <span class="token string">&#39;ort&#39;</span> strategy.
 new.txt <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> new.txt
<span class="token comment"># 这里跳出来让你填写提交记录：我们就保持默认的Merge branch &#39;new&#39;</span>

$ <span class="token function">git</span> log <span class="token parameter variable">--all</span> <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--graph</span>
*   8b357c5 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span> Merge branch <span class="token string">&#39;new&#39;</span>			【新的提交记录】
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * 00d73b9 <span class="token punctuation">(</span>new<span class="token punctuation">)</span> <span class="token number">2</span>
* <span class="token operator">|</span> 3f0d8eb merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="merge冲突" tabindex="-1"><a class="header-anchor" href="#merge冲突" aria-hidden="true">#</a> merge冲突</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> merge new
Auto-merging main.txt
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> main.txt
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.		【检测到有冲突】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里可以选择：</p><p>（1）放弃合并 <code>git merge --abort</code></p><p>（2）解决冲突，手动提交，完成合并。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch main
You have unmerged paths.
  <span class="token punctuation">(</span>fix conflicts and run <span class="token string">&quot;git commit&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git merge --abort&quot;</span> to abort the merge<span class="token punctuation">)</span>

Unmerged paths:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to mark resolution<span class="token punctuation">)</span>
        both modified:   main.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 查看冲突文件：-是删除，+是新增。&lt;&lt;&lt;&lt; 和 &gt;&gt;&gt; 表示不同的分支的内容，中间的 === 是两分支不同内容的分隔。</span>
$ <span class="token function">git</span> <span class="token function">diff</span> new
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/main.txt b/main.txt
index <span class="token number">2081982</span><span class="token punctuation">..</span>94e8c68 <span class="token number">100644</span>
--- a/main.txt
+++ b/main.txt
@@ <span class="token parameter variable">-1</span> +1,5 @@
+<span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> HEAD
+1_main
<span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
 1_new
+<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> new

<span class="token comment"># 手动编辑：冲突的文本内容 git 已经帮我们提出出来了，很方便</span>
$ <span class="token function">vi</span> main.txt
<span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> HEAD
1_main
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
1_new
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> new

$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> status
On branch main
All conflicts fixed but you are still merging.
  <span class="token punctuation">(</span>use <span class="token string">&quot;git commit&quot;</span> to conclude merge<span class="token punctuation">)</span>

Changes to be committed:
        modified:   main.txt

<span class="token comment"># 手动提交</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;merge&#39;</span>
<span class="token punctuation">[</span>main 3f0d8eb<span class="token punctuation">]</span> merge
$ <span class="token function">git</span> log <span class="token parameter variable">--all</span> <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--graph</span>
*   3f0d8eb <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span> merge
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * 46a6990 <span class="token punctuation">(</span>new<span class="token punctuation">)</span> new
* <span class="token operator">|</span> 45c76ec main
* <span class="token operator">|</span> ee42f27 main update
<span class="token operator">|</span>/
* 6113dc0 <span class="token number">2</span>
* 857afae <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h2><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202412051902473.png" alt="image-20241205190240424"></p><p>Merge</p><p>​ 优点:不会破坏原分支的提交历史，方便回溯和查看。</p><p>​ 缺点:会产生额外的提交节点，分支图比较复杂。</p><p>Rebase</p><p>​ 优点:不会新增额外的提交记录，形成线性历史，比较直观和干净</p><p>​ 缺点:会改变提交历史，改变了当前分支branch out的节点</p><p>建议：</p><p>​ 对于公共的分支，为了避免大家对于历史记录的困扰，不要用rebase，用merge。</p><p>​ 自己的本地分支，可以用rebase来简洁。</p>`,43),l=[t];function c(r,p){return a(),s("div",null,l)}const d=n(i,[["render",c],["__file","branch.html.vue"]]);export{d as default};
