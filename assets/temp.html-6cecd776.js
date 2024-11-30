import{_ as n,W as s,X as a,Y as t}from"./framework-9a5142fa.js";const e={},p=t(`<h2 id="本地正在开发-想提交在新分支下" tabindex="-1"><a class="header-anchor" href="#本地正在开发-想提交在新分支下" aria-hidden="true">#</a> 本地正在开发，想提交在新分支下</h2><p>那么可以直接创建新分支，<code>git checkout -b depth</code>。切换过去会发现，当前的change也会保留。</p><p>而且提交完切回 <code>main</code>，发现改变没了，也省得自己删除了。</p><h2 id="本地正在开发-不想提交-又要修改线上bug" tabindex="-1"><a class="header-anchor" href="#本地正在开发-不想提交-又要修改线上bug" aria-hidden="true">#</a> 本地正在开发，不想提交，又要修改线上bug</h2><p>暂存本地开发，<code>git stash</code></p><p>修改完bug后，切换会本地分支，使用<code>git stash apply</code>来恢复。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 暂存，多个暂存的顺序类似栈，新暂存头插到暂存栈</span>
<span class="token function">git</span> stash 					<span class="token comment"># 默认message + 只追踪</span>
<span class="token function">git</span> stash <span class="token parameter variable">-m</span> <span class="token string">&quot;depth&quot;</span>		<span class="token comment"># 添加message</span>
<span class="token function">git</span> stash <span class="token parameter variable">-u</span>			    <span class="token comment"># + 未跟踪</span>
<span class="token function">git</span> stash <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;最全记录&quot;</span>   <span class="token comment"># 全部变化的文件（跟踪的 + 未跟踪的 + 被 .gitignore忽视的文件），执行的完后的效果就像新clone下来一样。</span>

<span class="token comment"># 显示已有</span>
<span class="token function">git</span> stash list

<span class="token comment"># 显示某个stash的修改内容</span>
<span class="token function">git</span> stash show
<span class="token function">git</span> stash show <span class="token parameter variable">-u</span>


<span class="token comment"># 恢复</span>
<span class="token function">git</span> stash apply		<span class="token comment"># 恢复第一个，且不删除记录</span>
<span class="token function">git</span> stash pop		<span class="token comment"># 恢复第一个，且删除它</span>
<span class="token function">git</span> stash apply<span class="token operator">|</span>pop	<span class="token parameter variable">--index</span> <span class="token number">2</span>	<span class="token comment"># 根据序号。</span>
<span class="token function">git</span> stash apply<span class="token operator">|</span>pop	<span class="token string">&#39;stash@{0}&#39;</span>	<span class="token comment"># 根据完整名字。\`stash@{序号}\`</span>


<span class="token comment"># 删除</span>
<span class="token function">git</span> stash drop          	<span class="token comment"># 默认删除第一个</span>
<span class="token function">git</span> stash drop <span class="token string">&#39;stash@{0}&#39;</span>	<span class="token comment"># 根据完整名字</span>
<span class="token function">git</span> stash <span class="token function">clear</span>				<span class="token comment"># 删除所有</span>

<span class="token comment"># 超级删除：还原一个如同新clone下来一样干净的项目</span>
<span class="token function">git</span> stash -a<span class="token punctuation">;</span>  <span class="token function">git</span> stash drop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash branch <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>stash<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token function">git</span> stash save <span class="token punctuation">[</span>-p <span class="token operator">|</span> --patch<span class="token punctuation">]</span> <span class="token punctuation">[</span>-S <span class="token operator">|</span> --staged<span class="token punctuation">]</span> <span class="token punctuation">[</span>-k <span class="token operator">|</span> --<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>keep-index<span class="token punctuation">]</span> <span class="token punctuation">[</span>-q <span class="token operator">|</span> --quiet<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u <span class="token operator">|</span> --include-untracked<span class="token punctuation">]</span> <span class="token punctuation">[</span>-a <span class="token operator">|</span> --all<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>message<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token function">git</span> stash <span class="token punctuation">[</span>push 
				<span class="token punctuation">[</span>-p <span class="token operator">|</span> --patch<span class="token punctuation">]</span> <span class="token punctuation">[</span>-S <span class="token operator">|</span> --staged<span class="token punctuation">]</span> <span class="token punctuation">[</span>-k <span class="token operator">|</span> --<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>keep-index<span class="token punctuation">]</span> <span class="token punctuation">[</span>-q <span class="token operator">|</span> --quiet<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u <span class="token operator">|</span> --include-untracked<span class="token punctuation">]</span> <span class="token punctuation">[</span>-a <span class="token operator">|</span> --all<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>message<span class="token operator">&gt;</span><span class="token punctuation">]</span>      <span class="token comment"># 这些都是和save一样</span>
                <span class="token punctuation">[</span>--pathspec-from-file<span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token punctuation">[</span>--pathspec-file-nul<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>pathspec<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
          <span class="token punctuation">]</span>


<span class="token function">git</span> stash list <span class="token punctuation">[</span><span class="token operator">&lt;</span>log-options<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token function">git</span> stash show <span class="token punctuation">[</span>-u <span class="token operator">|</span> --include-untracked <span class="token operator">|</span> --only-untracked<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>diff-options<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>stash<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token function">git</span> stash pop <span class="token punctuation">[</span>--index<span class="token punctuation">]</span> <span class="token punctuation">[</span>-q <span class="token operator">|</span> --quiet<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>stash<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token function">git</span> stash apply <span class="token punctuation">[</span>--index<span class="token punctuation">]</span> <span class="token punctuation">[</span>-q <span class="token operator">|</span> --quiet<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>stash<span class="token operator">&gt;</span><span class="token punctuation">]</span>


<span class="token function">git</span> stash <span class="token function">clear</span>
<span class="token function">git</span> stash drop <span class="token punctuation">[</span>-q <span class="token operator">|</span> --quiet<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>stash<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token function">git</span> stash create <span class="token punctuation">[</span><span class="token operator">&lt;</span>message<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token function">git</span> stash store <span class="token punctuation">[</span><span class="token punctuation">(</span>-m <span class="token operator">|</span> --message<span class="token punctuation">)</span> <span class="token operator">&lt;</span>message<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-q <span class="token operator">|</span> --quiet<span class="token punctuation">]</span> <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git stash show</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(3d) PS D:\\git\\face-parsing.PyTorch&gt; git stash show &#39;stash@{0}&#39;     
 makeup/116_3.png | Bin 531600 -&gt; 0 bytes
 test.py          |   4 +---
 2 files changed, 1 insertion(+), 3 deletions(-)

(3d) PS D:\\git\\face-parsing.PyTorch&gt; git stash show -u  &#39;stash@{0}&#39;     
 .vscode/launch.json |  15 +++++++++++++++              # 未跟踪
 data/00000.jpg      | Bin 0 -&gt; 29351 bytes             # 未跟踪
 data/116_ori.png    | Bin 0 -&gt; 471886 bytes            # 未跟踪
 makeup/116_3.png    | Bin 531600 -&gt; 0 bytes
 test.py             |   4 +---
 5 files changed, 16 insertions(+), 3 deletions(-)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git stash | git stash push | git stash save</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(3d) PS D:\\git\\face-parsing.PyTorch&gt; git stash
Saved working directory and index state WIP on master: d2e684c add imgs
(3d) PS D:\\git\\face-parsing.PyTorch&gt; git stash list
stash@{0}: WIP on master: d2e684c add imgs          # WIP标识默认 message (当前提交id + 提交的message)

# + 未跟踪：默认是只记录已追踪的文件（已修改、已删除）；想要记录已追踪 + 未跟踪的文件（新文件） [-u | --include-untracked]
(3d) PS D:\\git\\face-parsing.PyTorch&gt; git stash  -u -m &#39;+未追踪&#39;       
Saved working directory and index state On master: +未追踪
(3d) PS D:\\git\\face-parsing.PyTorch&gt; git stash list
stash@{0}: On master: +未追踪

# 全部变化的文件（跟踪的 + 未跟踪的 + 被 .gitignore忽视的文件），执行的完后的效果就像新clone下来一样。
(3d) PS D:\\git\\face-parsing.PyTorch&gt; git stash  -a
Saved working directory and index state On master: sdfs
(3d) PS D:\\git\\face-parsing.PyTorch&gt; git stash show -u
 .vscode/launch.json                |  15 +++++++++++++++               # 未跟踪的
 __pycache__/logger.cpython-310.pyc | Bin 0 -&gt; 759 bytes                # 被 .gitignore忽视的文件
 __pycache__/model.cpython-310.pyc  | Bin 0 -&gt; 8173 bytes               # 被 .gitignore忽视的文件
 __pycache__/resnet.cpython-310.pyc | Bin 0 -&gt; 3584 bytes               # 被 .gitignore忽视的文件
 data/00000.jpg                     | Bin 0 -&gt; 29351 bytes
 data/116_ori.png                   | Bin 0 -&gt; 471886 bytes
 makeup/116_3.png                   | Bin 531600 -&gt; 0 bytes
 res/cp/79999_iter.pth              | Bin 0 -&gt; 53289463 bytes
 res/requirements.txt               | Bin 0 -&gt; 12316 bytes
 res/t.txt                          | Bin 0 -&gt; 12316 bytes
 res/test_res/00000.jpg             | Bin 0 -&gt; 78713 bytes
 res/test_res/00000.png             | Bin 0 -&gt; 5787 bytes
 res/test_res/116_ori.png           | Bin 0 -&gt; 361489 bytes
 test.py                            |   4 +---
 14 files changed, 16 insertions(+), 3 deletions(-)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git stash branch</p><p>先stash（搞新分支需要当前分支上干净），git stash branch 会创建并切换新分支、pop某个stash</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>3d<span class="token punctuation">)</span> PS D:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>face-parsing.PyTorch<span class="token operator">&gt;</span> <span class="token function">git</span> stash <span class="token parameter variable">-u</span>
Saved working directory and index state WIP on test: d2e684c <span class="token function">add</span> imgs

<span class="token comment"># git stash branch ttt &#39;stash@{0}&#39;</span>
<span class="token punctuation">(</span>3d<span class="token punctuation">)</span> PS D:<span class="token punctuation">\\</span>git<span class="token punctuation">\\</span>face-parsing.PyTorch<span class="token operator">&gt;</span> <span class="token function">git</span> stash branch ttt
Switched to a new branch <span class="token string">&#39;ttt&#39;</span>
On branch ttt
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add/rm &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        deleted:    makeup/116_3.png
        modified:   test.py

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        <span class="token number">111</span>

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
Dropped refs/stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token punctuation">(</span>b1dc3996af6dc49a30a50aec81a86cfda63193a0<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","temp.html.vue"]]);export{r as default};
