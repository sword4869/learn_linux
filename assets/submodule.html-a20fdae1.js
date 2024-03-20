import{_ as e,W as a,X as s,$ as n}from"./framework-586fce15.js";const i={},d=n(`<ul><li><a href="#1-submodule">1. submodule</a><ul><li><a href="#11-%E6%98%BE%E7%A4%BA">1.1. 显示</a></li><li><a href="#12-%E6%B7%BB%E5%8A%A0%E5%AD%90%E6%A8%A1%E5%9D%97">1.2. 添加子模块</a></li><li><a href="#13-%E6%80%8E%E4%B9%88%E4%B8%8B%E8%BD%BD%E6%9C%89%E5%AD%90%E6%A8%A1%E5%9D%97%E7%9A%84%E9%A1%B9%E7%9B%AE">1.3. 怎么下载有子模块的项目</a></li><li><a href="#14-%E5%88%A0%E9%99%A4">1.4. 删除</a></li><li><a href="#15-%E4%BF%AE%E6%94%B9%E9%97%AE%E9%A2%98">1.5. 修改问题</a></li></ul></li></ul><h1 id="_1-submodule" tabindex="-1"><a class="header-anchor" href="#_1-submodule" aria-hidden="true">#</a> 1. submodule</h1><h2 id="_1-1-显示" tabindex="-1"><a class="header-anchor" href="#_1-1-显示" aria-hidden="true">#</a> 1.1. 显示</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> submodule
啥也没有, 说明没有 submodule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># facenet_pytorch是表示所在文件夹位置</span>
$ <span class="token function">git</span> submodule
 4b5af565a967b84d0b7611e3f2589ac1a20d3c99 facenet_pytorch <span class="token punctuation">(</span>heads/master<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-添加子模块" tabindex="-1"><a class="header-anchor" href="#_1-2-添加子模块" aria-hidden="true">#</a> 1.2. 添加子模块</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># PS：这个submodule的子目录指定时不能以 “/”结尾， 比如上面的命令，就不能写成 \`Directory/\` 这个样子。</span>

<span class="token function">git</span> submodule <span class="token function">add</span> projectB.git Directory

<span class="token comment"># git submodule add https://gitlab.inria.fr/sibr/sibr_core.git SIBR_viewers</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就会往那个目录里下载文件(直接下, 而不是像git clone 一样套一层仓库的名字, 所以<code>SIBR_viewers</code>起了子文件夹的名字).</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── train.py
├── LICENSE.md
├── README.md
├── SIBR_viewers
│   ├── CMakeLists.txt
│   ├── LICENSE.md
│   ├── README.md
│   ├── cmake
│   ├── docs
│   └── src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且会生成<code>.gitmodules</code>文件，其内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>submodule <span class="token string">&quot;SIBR_viewers&quot;</span><span class="token punctuation">]</span>
	path <span class="token operator">=</span> SIBR_viewers
	url <span class="token operator">=</span> https://gitlab.inria.fr/sibr/sibr_core.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>PS2: 注意到 <code>facenet-pytorch.git </code> 和 <code>facenet_pytorch</code> 的 <code>-_</code>，是因为python import 的包名不能有<code>-</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>submodule <span class="token string">&quot;facenet_pytorch&quot;</span><span class="token punctuation">]</span>
	path <span class="token operator">=</span> facenet_pytorch
	url <span class="token operator">=</span> https://github.com/timesler/facenet-pytorch.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-怎么下载有子模块的项目" tabindex="-1"><a class="header-anchor" href="#_1-3-怎么下载有子模块的项目" aria-hidden="true">#</a> 1.3. 怎么下载有子模块的项目</h2><blockquote><p>分阶段</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone projectA.git
<span class="token builtin class-name">cd</span> projectA
<span class="token function">git</span> submodule init
<span class="token function">git</span> submodule update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>clone时一步到位</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--recursive</span> projectA.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下的时候子模块可能会失败，多下几次。</p><h2 id="_1-4-删除" tabindex="-1"><a class="header-anchor" href="#_1-4-删除" aria-hidden="true">#</a> 1.4. 删除</h2><p>删除子模块（四个步骤）</p><ol><li>删除子模块文件夹</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm -rf facenet_pytorch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>删除<code>.gitmodules</code>文件中相关子模块信息</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[submodule &quot;facenet_pytorch&quot;]
	path = facenet_pytorch
	url = https://github.com/timesler/facenet-pytorch.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>删除<code>.git/config</code>中的相关子模块信息</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[submodule &quot;facenet_pytorch&quot;]
	url = https://github.com/timesler/facenet-pytorch.git
	active = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>删除<code>.git/modules</code>文件夹下的相关子模块</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm -rf .git/modules/facenet_pytorch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>缓存</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm --cached facenet_pytorch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-5-修改问题" tabindex="-1"><a class="header-anchor" href="#_1-5-修改问题" aria-hidden="true">#</a> 1.5. 修改问题</h2><blockquote><p>问题：</p></blockquote><p>修改了模块，但是不想在git里提交。</p><blockquote><p>无效方法：</p></blockquote><p>使用 .gitignore 来忽略submodule的修改，但是无法做到。</p><blockquote><p>做法：</p></blockquote><p>我们要做的就是在<code>.gitmodules</code>中添加一个<code>ignore</code>子项，这个ignore子项可以有上个可选的值：</p><ul><li><code>untracked</code> ：忽略在子模块新添加的，即未受版本控制内容</li><li><code>dirty</code> ： 忽略对受版本控制的内容进行了修改</li><li><code>all</code> ： 同时忽略untracked和dirty</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>submodule <span class="token string">&quot;utils&quot;</span><span class="token punctuation">]</span>
	path <span class="token operator">=</span> utils
	url <span class="token operator">=</span> https://github.com/timesler/facenet-pytorch.git
	ignore <span class="token operator">=</span> all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),l=[d];function t(c,r){return a(),s("div",null,l)}const u=e(i,[["render",t],["__file","submodule.html.vue"]]);export{u as default};
