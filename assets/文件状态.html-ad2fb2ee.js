import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const i={},t=e(`<p>[toc]</p><p>【？？？没搞懂】</p><p>暂存区：存的是更新。本质是文件列表，记录到底什么东西要加入到新版本中，最后commit写入新版本的历史记录。 工作区，修改。 版本库，历史记录。</p><p>git add:</p><p>​ 新东西。untracked → staged</p><p>​ 版本库中的修改了。modified → staged</p><p>clone, checkout: 版本库→工作目录</p><p>git rm移除版本库: 未修改→untracked</p><h2 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> git init</h2><p>怎么让这个普通的文件夹，变成git的仓库呢？ 用这个命令生成一个 <code>.git</code>配置来允许git来管理它，所有 Git 需要的数据和资源都存放在这个目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你会发现在文件夹下面多里一个名为<code>.git</code>的文件夹。</p><h2 id="文件的状态" tabindex="-1"><a class="header-anchor" href="#文件的状态" aria-hidden="true">#</a> 文件的状态</h2><p>文件管理器的显示，或者说我们看到的文件内容，是已提交文件的基础 + 工作区和暂存区的变化。</p><p>工作区、暂存区，这些都是&quot;变化&quot;，提交历史是实体。</p><ul><li><p>工作区(working directory)：未add。</p></li><li><p>暂存区(Staging Area / Index）：已add。<code>.git/index</code></p><p>工作区和提交历史的中间地带。</p></li><li><p>本地仓库/提交历史：已提交commit</p></li></ul><p>提交 commit</p><p>提交历史 commit history</p><p>https://www.bilibili.com/video/BV11z4y1X79p</p><p>Git 文件的主要状态：</p><ol><li><p><strong>未跟踪 (Untracked)</strong>：</p><p>当文件是新创建的，并且从未被添加到 Git 的索引时</p></li><li><p><strong>已跟踪 (Tracked)</strong>：</p><p>已经被纳入版本控制的文件，Git 会记录它们的变化。</p><p>已跟踪文件又可以根据它们是否被修改过进一步分类为以下几种子状态：</p><ul><li><strong>已修改 (Modified)</strong>：文件自上次提交后已被修改，但尚未暂存。此时文件的内容已经改变，但是还没有准备进入下一次提交。</li><li><strong>已暂存 (Staged)</strong>：修改后的文件已经被标记为将在下次提交时包含进去。这是通过 <code>git add</code> 命令完成的操作。</li><li><strong>已提交 (Committed)</strong>：文件已经被安全地保存在本地数据库中（即已经通过 <code>git commit</code> 操作保存的历史快照）。</li></ul></li><li><p><strong>未合并 (Unmerged)</strong>：</p><ul><li>在发生合并冲突的情况下，文件处于“未合并”状态。这意味着 Git 尝试将更改合并到文件中，但是由于存在冲突，它无法自动完成合并过程，需要用户手动解决冲突。</li></ul></li><li><p><strong>忽略 (Ignored)</strong>：</p><ul><li>如果文件匹配 <code>.gitignore</code> 文件中的模式，则会被 Git 忽略，不会被追踪。这类文件通常是一些编译生成的临时文件、日志文件等不需要加入版本控制的文件。</li></ul></li></ol><p><code>git status</code> 分三类显示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Changes not staged for commit	对应已追踪的文件的已修改(还没add)
	modified
	deleted

Untracked files					对应未追踪(还没add)

Changes to be committed			对应已追踪的文件的已暂存(已add，未commit)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="顺着添加修改" tabindex="-1"><a class="header-anchor" href="#顺着添加修改" aria-hidden="true">#</a> 顺着添加修改</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 干净的工作区何暂存区</span>
$ <span class="token function">git</span> status
On branch main
nothing to commit, working tree clean
$ <span class="token function">git</span> ls-files
file1.txt
file2.txt

<span class="token comment">######## 创建新文件，untracked</span>
$ <span class="token builtin class-name">echo</span> <span class="token number">3</span> <span class="token operator">&gt;</span> file3.txt
<span class="token comment"># 【Untracked files】</span>
$ <span class="token function">git</span> status
On branch main
【Untracked files】:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        file3.txt

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
$ <span class="token function">git</span> ls-files <span class="token parameter variable">-o</span>
file3.txt


<span class="token comment">###### 修改老文件 modified</span>
$ <span class="token builtin class-name">echo</span> <span class="token number">2</span> <span class="token operator">&gt;&gt;</span> file2.txt
<span class="token comment"># 【Changes not staged for commit】【modified】</span>
$ <span class="token function">git</span> status
On branch main
【Changes not staged <span class="token keyword">for</span> commit】:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        【modified】:   file2.txt

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        file3.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
$ <span class="token function">git</span> ls-files <span class="token parameter variable">-m</span>
file2.txt


<span class="token comment">###### Staged</span>
<span class="token comment"># file3 untracked → staged；file2 modified → staged</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># 【Changes to be committed】</span>
$ <span class="token function">git</span> status
On branch main
【Changes to be committed】:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        modified:   file2.txt
        new file:   file3.txt
<span class="token comment"># file3 是 staged 文件git了</span>
$ <span class="token function">git</span> ls-files <span class="token parameter variable">-s</span>
<span class="token number">100644</span> 58c9bdf9d017fcd178dc8c073cbfcbb7ff240d6c <span class="token number">0</span>       file1.txt
<span class="token number">100644</span> 51993f072d5832f20b98b6bd0cf763fb8b4c8a1b <span class="token number">0</span>       file2.txt
<span class="token number">100644</span> 00750edc07d6415dcc07ae0351e9397b0222b7ba <span class="token number">0</span>       file3.txt


<span class="token comment">##### commited</span>
<span class="token comment"># file2、fil3：Staged → commited</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> 2nd
<span class="token punctuation">[</span>main 0c8e133<span class="token punctuation">]</span> 2nd
 <span class="token number">2</span> files changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> file3.txt
$ <span class="token function">git</span> status
On branch main
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git add：全部改动 <code>git add -A</code>或 <code>git add .</code></p><h3 id="逆修改" tabindex="-1"><a class="header-anchor" href="#逆修改" aria-hidden="true">#</a> 逆修改</h3><p>撤销工作区的变化（即恢复到最近一次提交的状态）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 同 -W --worktree</span>
$ <span class="token function">git</span> restore click3.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>撤销暂存区（意思是，保留这些更改在工作目录中）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -S, --staged</span>
$ <span class="token function">git</span> restore <span class="token parameter variable">--staged</span> click3.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一步到位，撤销工作区和暂存区的修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> restore <span class="token parameter variable">-W</span> <span class="token parameter variable">-S</span> click3.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="本地仓库" tabindex="-1"><a class="header-anchor" href="#本地仓库" aria-hidden="true">#</a> 本地仓库</h3><p>将暂存区里的文件都commit到本地仓库 <code>.git</code>中，变成一条提交记录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;备注信息&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908736.png" alt="1664849832160575.png"></p><p>可以使用 <code>git log</code>来查看提交记录。</p><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908737.png" alt="16648498324312801.png"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token number">2</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>.txt
<span class="token comment"># \`-a\`: 融合 \`git add .\`</span>
<span class="token comment"># 只能对于已追踪的文件，而新添加的文件还是得手动</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&#39;xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h3><p>如果未追踪的新文件，那么直接rm删除。</p><p>如果已追踪的文件：</p><p>（1）rm + git add</p><p><code>rm xxx</code>只是删除了工作区的文件，而其还在被git追踪。</p><p>所以你要告诉git你的变动，添加变化到暂存区、提交。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span>
file1.txt  file2.txt  main.txt  new.txt
$ <span class="token function">rm</span> main.txt
$ <span class="token function">git</span> status
On branch main
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add/rm &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        deleted:    main.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）git rm = rm + git add</p><p>删除暂存区和工作区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span>
file1.txt  file2.txt  main.txt  new.txt
$ <span class="token function">git</span> <span class="token function">rm</span> main.txt
<span class="token function">rm</span> <span class="token string">&#39;main.txt&#39;</span>
$ <span class="token function">git</span> status
On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        deleted:    main.txt

$ <span class="token function">ls</span>
file1.txt  file2.txt  new.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>【删除git本地仓库中没有，只是提交到暂存区的，并删除工作区的】</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PS：如果git本地仓库中有，也提交到暂存区的。那么删除后，暂存区中的和本地仓库中的都没得。</p><p>（2）从暂存区中移除文件（不再跟踪），但保留该文件在工作区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> Main.java
$ <span class="token function">git</span> status
On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        deleted:    Main.java

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        Main.java													<span class="token comment"># Main.java现在是未跟踪的文件了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再<code>git add .</code>添加到暂存区，那么相当于什么也没干。</p><h2 id="git-ls-files" tabindex="-1"><a class="header-anchor" href="#git-ls-files" aria-hidden="true">#</a> git ls-files</h2><p>不带任何参数时，<code>git ls-files</code> 将列出所有被追踪的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -c, --cached          show cached files in the output (default)</span>
<span class="token comment"># git ls-files 默认就是带 git ls-files -c</span>
<span class="token comment"># 混合使用 git ls-files -co</span>
$ <span class="token function">git</span> ls-files
file1.txt
file2.txt


<span class="token comment"># -m, --modified        show modified files in the output</span>
<span class="token comment"># 修改了文件</span>
$ <span class="token builtin class-name">echo</span> <span class="token number">2</span> <span class="token operator">&gt;&gt;</span> file2.txt
$ <span class="token function">git</span> ls-files <span class="token parameter variable">-m</span>
file2.txt


<span class="token comment"># -d, --deleted         show deleted files in the output</span>
<span class="token comment"># 删除了已被追踪的文件</span>
$ <span class="token function">rm</span> file3.txt
$ <span class="token function">git</span> ls-files <span class="token parameter variable">-d</span>
file3.txt
    -m, <span class="token parameter variable">--modified</span>        show modified files <span class="token keyword">in</span> the output


<span class="token comment"># -o, --others          show other files in the output</span>
<span class="token comment"># 新建了一个未追踪的文件 </span>
$ <span class="token builtin class-name">echo</span> <span class="token number">333</span> <span class="token operator">&gt;</span> file3.txt
$ <span class="token function">git</span> ls-files <span class="token parameter variable">-o</span>
file3.txt


<span class="token comment">#-s, --stage           show staged contents&#39; object name in the output</span>
$ <span class="token function">git</span> ls-files <span class="token parameter variable">-s</span>
<span class="token number">100644</span> 58c9bdf9d017fcd178dc8c073cbfcbb7ff240d6c <span class="token number">0</span>       file1.txt
<span class="token number">100644</span> 0cfbf08886fca9a91cb753ec8734c84fcbe52c9f <span class="token number">0</span>       file2.txt
    
<span class="token comment"># -k, --killed          show files on the filesystem that need to be removed</span>
<span class="token comment"># -u, --unmerged        show unmerged files in the output</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59),l=[t];function d(c,o){return s(),a("div",null,l)}const r=n(i,[["render",d],["__file","文件状态.html.vue"]]);export{r as default};
