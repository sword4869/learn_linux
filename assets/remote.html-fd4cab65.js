import{_ as e,W as n,X as a,Y as s}from"./framework-9a5142fa.js";const i={},d=s(`<p>[toc]</p><h2 id="show-names-of-remote-repository" tabindex="-1"><a class="header-anchor" href="#show-names-of-remote-repository" aria-hidden="true">#</a> show names of remote repository</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote
origin

$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
origin  https://gitee.com/sandalphon/weather_predict.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin  https://gitee.com/sandalphon/weather_predict.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>

<span class="token comment"># 没有远程仓库</span>
$ <span class="token function">git</span> remote
fatal: not a <span class="token function">git</span> repository <span class="token punctuation">(</span>or any of the parent directories<span class="token punctuation">)</span>: .git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add-and-remove" tabindex="-1"><a class="header-anchor" href="#add-and-remove" aria-hidden="true">#</a> add and remove</h2><h3 id="add-a-remote-repository" tabindex="-1"><a class="header-anchor" href="#add-a-remote-repository" aria-hidden="true">#</a> add a remote repository</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git remote add &lt;remote repository name&gt; &lt;remote repository url&gt;</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/sandalphon/weather_predict.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove-a-remote-repository" tabindex="-1"><a class="header-anchor" href="#remove-a-remote-repository" aria-hidden="true">#</a> remove a remote repository</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote remove origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="push-本地→远程" tabindex="-1"><a class="header-anchor" href="#push-本地→远程" aria-hidden="true">#</a> push 本地→远程</h2><p><code>git push &lt;远程仓库&gt; &lt;本地分支&gt;:&lt;远程分支&gt;</code>。</p><p>两种情况：</p><p>​ 远程仓库有 &lt;远程分支&gt;，则更新。</p><p>​ 没有 &lt;远程分支&gt;，则创建一个新的同名分支。</p><p>（1) 省略</p><p>​ <code>git push origin master</code>。省略远程分支名，认为远程分支名同本地分支名。</p><p>​ <code>git push origin</code>。默认当前分支。</p><p>​ <code>git push</code>。默认远程仓库、默认当前分支。只有当默认指定远程仓库 <code>git push -u origin</code> 后，才能使用！</p><p>（2）<code>git push origin :main</code></p><p>推送空本地分支，自然效果就是删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 等同于</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制更新-合并冲突的问题" tabindex="-1"><a class="header-anchor" href="#强制更新-合并冲突的问题" aria-hidden="true">#</a> 强制更新（合并冲突的问题）</h3><ul><li><p>使用此命令告诉 git 允许不相关历史合并</p><p>这样就能把远程文件拉取回来。执行此命令后会有一个提示，要求说明为何要讲两个不相关的分支合并，输入信息后保存即可。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull origin master –allow-unrelated-histories
$ <span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>强制将本地文件推送至远程</p><p><strong>这样会将远程仓库的master分支的历史文件都清掉</strong>，让远程都和本地推送的分支完全一样，从而不会产生因为合并冲突的问题. PS：建议使用此命令前备份原远程分支到本地。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin master <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="撤销远程提交" tabindex="-1"><a class="header-anchor" href="#撤销远程提交" aria-hidden="true">#</a> 撤销远程提交</h3><p>本地回退+强制推送</p><ol><li><p>查找需要回退至的版本号 <code>2eee0e26d2d5fd00ec462df47752223952f6bf4e</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git log
commit 13c1a52e0624f172cfa8612ad27e90a030735f2f (HEAD -&gt; main, origin/main, origin/HEAD)
Author: sword4869 &lt;xxx@qq.com&gt;
Date:   Tue Nov 7 18:41:35 2023 +0800

    add GPU number and lazy load img to GPU       ### 这次提交，想要被撤回

commit 2eee0e26d2d5fd00ec462df47752223952f6bf4e
Author: Bernhard Kerbl &lt;kerbl@icg.tugraz.at&gt;
Date:   Wed Nov 1 13:10:29 2023 +0100

    Bumped sibr viewers                           ### 那么就回退到这里

commit f11001b46c5c73a0a7d553353c898efd68412abe
Author: bkerbl &lt;bkerbl@ad.inria.fr&gt;
Date:   Mon Oct 23 16:02:30 2023 +0200

    Random background flag added
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>回退</p><ul><li>soft：保留当前工作区，以便重新提交，比如我们这次是修改后重新提交</li><li>hard：会撤销相应工作区的修改，一定要谨慎使用。一般用于指定某个版本的内容，不考虑自己的修改。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token parameter variable">--soft</span> 2eee0e26d2d5fd00ec462df47752223952f6bf4e
<span class="token comment"># git reset --hard 2eee0e26d2d5fd00ec462df47752223952f6bf4e</span>

<span class="token comment"># 验证</span>
$ <span class="token function">git</span> log
commit 2eee0e26d2d5fd00ec462df47752223952f6bf4e <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span>
Author: Bernhard Kerbl <span class="token operator">&lt;</span>kerbl@icg.tugraz.at<span class="token operator">&gt;</span>
Date:   Wed Nov <span class="token number">1</span> <span class="token number">13</span>:10:29 <span class="token number">2023</span> +0100

    Bumped sibr viewers

commit f11001b46c5c73a0a7d553353c898efd68412abe
Author: bkerbl <span class="token operator">&lt;</span>bkerbl@ad.inria.fr<span class="token operator">&gt;</span>
Date:   Mon Oct <span class="token number">23</span> <span class="token number">16</span>:02:30 <span class="token number">2023</span> +0200

    Random background flag added
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>强制推送</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin main <span class="token parameter variable">-f</span>
Total <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
To github.com:sword4869/gaussian-splatting.git
+ 13c1a52<span class="token punctuation">..</span>.2eee0e2 main -<span class="token operator">&gt;</span> main <span class="token punctuation">(</span>forced update<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="pull-fetch-merge" tabindex="-1"><a class="header-anchor" href="#pull-fetch-merge" aria-hidden="true">#</a> pull = fetch + merge</h2><p>基本用法：<code>git pull &lt;远程仓库&gt; &lt;远程分支&gt;:&lt;本地分支&gt;</code>。远程分支→本地分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将远程主机origin的master分支拉取过来，与本地的brantest分支合并。</span>
$ <span class="token function">git</span> pull origin master:brantest

<span class="token comment"># 默认本地分支同远程名</span>
$ <span class="token function">git</span> pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fetch-merge" tabindex="-1"><a class="header-anchor" href="#fetch-merge" aria-hidden="true">#</a> fetch + merge</h2><p>fetch：将远程拉取到本地，创建一个本地分支 <code>&lt;remote repository&gt;/&lt;remote branch&gt;</code>。但并不会在 <code>git branch</code>中显示。</p><p>merge：让当前分支融合 <code>&lt;remote repository&gt;/&lt;remote branch&gt;</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git fetch &lt;remote repository&gt; &lt;remote branch&gt;</span>
$ <span class="token function">git</span> fetch origin master
From github.com:sword4869/learn_python
 * branch            main       -<span class="token operator">&gt;</span> FETCH_HEAD
 
<span class="token comment"># 切换到想要被更新的本地分支</span>
$ <span class="token function">git</span> checkout main

<span class="token comment"># 默认就是融合 origin/master。git merge origin/master</span>
$ <span class="token function">git</span> merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比起来git fetch更安全一些，因为在merge前，我们可以查看更新情况，然后再决定是否合并。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> fetch origin master
$ <span class="token function">git</span> checkout main

<span class="token comment"># 查看区别，再决定合并</span>
$ <span class="token function">git</span> <span class="token function">diff</span>

$ <span class="token function">git</span> merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程分支" tabindex="-1"><a class="header-anchor" href="#远程分支" aria-hidden="true">#</a> 远程分支</h3><ul><li><p>当本地没有其他分支的代码仓库时</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上述命令后就将远程分支拉取到了本地。</p></li><li><p>当本地有其他分支的代码仓库时, 查看所有的远程分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-r</span>
  origin/docs
  origin/modern
  origin/residual
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>不需要本地分支和远程分支建立映射关系</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch origin 远程分支名xxx:本地分支名xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用这种方式会在本地仓库新建分支xxx，但是并不会自动切换到新建的分支xxx，需要手动checkout。然后远程分支xxx的代码也拉取到了本地分支xxx中。采用这种方法建立的本地分支不会和远程分支建立映射关系。</p></li><li><p>需要本地分支和远程分支建立映射关系</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 本地分支名xxx origin/远程分支名xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用这种方式会在本地仓库新建分支xxx，并自动切换到新建的分支xxx。然后远程分支xxx的代码也拉取到了本地分支xxx中。采用这种方法建立的本地分支会和远程分支建立映射关系。</p></li></ul></li></ul><h2 id="fork仓库拉取原仓库更新" tabindex="-1"><a class="header-anchor" href="#fork仓库拉取原仓库更新" aria-hidden="true">#</a> fork仓库拉取原仓库更新</h2><h3 id="merge法" tabindex="-1"><a class="header-anchor" href="#merge法" aria-hidden="true">#</a> merge法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> upstream git@github.com:facebookresearch/pytorch3d.git
<span class="token function">git</span> pull upstream main:main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reset法" tabindex="-1"><a class="header-anchor" href="#reset法" aria-hidden="true">#</a> reset法</h3><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908690.png" alt="Alt text"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> upstream git@github.com:facebookresearch/pytorch3d.git
<span class="token comment"># 回退到 main 一致的结点</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> 3b4f8a49
<span class="token function">git</span> pull upstream main:main
<span class="token comment"># 强制更新</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;fetch upstream&#39;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),t=[d];function l(r,c){return n(),a("div",null,t)}const p=e(i,[["render",l],["__file","remote.html.vue"]]);export{p as default};
