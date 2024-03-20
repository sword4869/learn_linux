import{_ as n,W as s,X as a,$ as e}from"./framework-586fce15.js";const l={},t=e(`<ul><li><a href="#1-%E6%80%BB%E7%BB%93">1. 总结</a></li><li><a href="#2-inode">2. inode</a></li><li><a href="#3-%E5%AE%9E%E9%AA%8C">3. 实验</a></li></ul><hr><h2 id="_1-总结" tabindex="-1"><a class="header-anchor" href="#_1-总结" aria-hidden="true">#</a> 1. 总结</h2><ul><li>创建</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 源文件 &lt;- 链接</span>

<span class="token comment"># 硬链接：默认</span>
<span class="token function">ln</span> ~/data data

<span class="token comment"># 软链接：-s </span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> ~/data data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更新</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 源文件 &lt;- 链接</span>
<span class="token comment"># -f 强制执行</span>
<span class="token comment"># -n 把符号链接视为一般目录</span>

<span class="token function">ln</span> <span class="token parameter variable">-snf</span> ~/data2 data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">对比参数</th><th style="text-align:center;">硬连接</th><th style="text-align:center;">软连接</th></tr></thead><tbody><tr><td style="text-align:center;">inode number</td><td style="text-align:center;">拥有相同的 inode number</td><td style="text-align:center;">拥有不同的 inode number</td></tr><tr><td style="text-align:center;">目录</td><td style="text-align:center;">不允许连接目录</td><td style="text-align:center;">允许连接目录</td></tr><tr><td style="text-align:center;">跨文件系统</td><td style="text-align:center;">不能跨文件系统使用</td><td style="text-align:center;">可以跨文件系统使用</td></tr><tr><td style="text-align:center;">源文件删除之后</td><td style="text-align:center;">源文件删除，硬连接文件仍然可以访问源文件数据</td><td style="text-align:center;">源文件删除，软连接将无法访问源文件数据</td></tr><tr><td style="text-align:center;">速度</td><td style="text-align:center;">更快</td><td style="text-align:center;">更慢</td></tr></tbody></table><h2 id="_2-inode" tabindex="-1"><a class="header-anchor" href="#_2-inode" aria-hidden="true">#</a> 2. inode</h2><p>文件的 inode 是一个描述文件或目录属性的数据库，如元信息、硬盘物理地址等。通过 inode，操作系统可以检索文件权限信息、物理地址等信息。当一个文件从一个文件夹移到另一个文件夹，文件将被移动到硬盘的另一个位置，文件的 inode 值也会自动发生变化。</p><ul><li>硬连接它直接引用源文件的 inode。</li><li>软连接则直接引用源文件，源文件再引用 inode，更像是源文件的一个快捷方式。</li></ul><p>删除操作：</p><ul><li><p>输出结果最左边一列是文件的 inode 值，它指向物理硬盘的一个区块。文件系统会维护一个引用计数，只要有文件指向这个区块，inode 就不会从硬盘上消失。</p></li><li><p>1).删除软链接,对源文件、硬链接无影响；</p><p>2).删除硬链接，对源文件、软链接也无影响；</p><p>3).删除源文件，对硬链接没有影响，导致软链接失效；</p><p>4).同时删除源文件、硬链接，计数被归零，整个文件才会真正的被删除。</p></li></ul><h2 id="_3-实验" tabindex="-1"><a class="header-anchor" href="#_3-实验" aria-hidden="true">#</a> 3. 实验</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建源文件</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello, source&quot;</span> <span class="token operator">&gt;</span> source.txt
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> source.txt 
hello, <span class="token builtin class-name">source</span>

<span class="token comment"># 创建硬链接</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">ln</span> source.txt link1
<span class="token comment"># 创建软链接</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> source.txt link2

<span class="token comment"># -i 展示 inode number</span>
<span class="token comment"># 可以看到 硬链接 和 源文件 具有一样的 inode number， 软链接则不同</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-i</span>
total <span class="token number">8</span>
<span class="token number">23961</span> -rw-r--r-- <span class="token number">2</span> lab lab <span class="token number">14</span> Jul <span class="token number">27</span> <span class="token number">10</span>:26 link1
<span class="token number">23962</span> lrwxrwxrwx <span class="token number">1</span> lab lab <span class="token number">10</span> Jul <span class="token number">27</span> <span class="token number">10</span>:27 link2 -<span class="token operator">&gt;</span> source.txt
<span class="token number">23961</span> -rw-r--r-- <span class="token number">2</span> lab lab <span class="token number">14</span> Jul <span class="token number">27</span> <span class="token number">10</span>:26 source.txt

<span class="token comment"># 软链接、硬链接都具有和源文件一样的内容</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link1
hello, <span class="token builtin class-name">source</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link2
hello, <span class="token builtin class-name">source</span>

<span class="token comment"># 修改软链接、硬链接或源文件，三者都共同变化</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;source++&quot;</span> <span class="token operator">&gt;&gt;</span> source.txt
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link1
hello, <span class="token builtin class-name">source</span>
source++
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link2
hello, <span class="token builtin class-name">source</span>
source++
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;link1++&quot;</span> <span class="token operator">&gt;&gt;</span> link1
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link1
hello, <span class="token builtin class-name">source</span>
source++
link1++
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link2
hello, <span class="token builtin class-name">source</span>
source++
link1++
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> source.txt 
hello, <span class="token builtin class-name">source</span>
source++
link1++
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;link2++&quot;</span> <span class="token operator">&gt;&gt;</span> link2
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link2
hello, <span class="token builtin class-name">source</span>
source++
link1++
link2++
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> source.txt 
hello, <span class="token builtin class-name">source</span>
source++
link1++
link2++
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link1
hello, <span class="token builtin class-name">source</span>
source++
link1++
link2++

<span class="token comment"># 删除源文件，硬链接不变，软链接失效</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">rm</span> source.txt 
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">ls</span>
link1  link2
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link1
hello, <span class="token builtin class-name">source</span>
source++
link1++
link2++
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link2
cat: link2: No such <span class="token function">file</span> or directory

<span class="token comment"># 再创建源文件（inode不同），硬链接内容不同，软链接恢复（内容与新创建的一致）</span>
<span class="token comment"># PS: 即使创建相同的内容，inode也是不同的。也就是说，本质是因为inode不同。</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;source++&quot;</span> <span class="token operator">&gt;&gt;</span> source.txt
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-i</span>
total <span class="token number">8</span>
<span class="token number">23961</span> -rw-r--r-- <span class="token number">1</span> lab lab <span class="token number">39</span> Jul <span class="token number">27</span> <span class="token number">10</span>:28 link1
<span class="token number">23962</span> lrwxrwxrwx <span class="token number">1</span> lab lab <span class="token number">10</span> Jul <span class="token number">27</span> <span class="token number">10</span>:27 link2 -<span class="token operator">&gt;</span> source.txt
<span class="token number">23963</span> -rw-r--r-- <span class="token number">1</span> lab lab  <span class="token number">9</span> Jul <span class="token number">27</span> <span class="token number">10</span>:30 source.txt
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link2
source++
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lab@eleven:~/temp$ <span class="token function">cat</span> link1
hello, <span class="token builtin class-name">source</span>
source++
link1++
link2++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[t];function c(p,o){return s(),a("div",null,i)}const r=n(l,[["render",c],["__file","soft link.html.vue"]]);export{r as default};
