import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<p><code>sort</code>命令是Linux中用来对文本文件的内容进行排序的一个命令。以下是一些常用的选项和示例：</p><h1 id="常用选项" tabindex="-1"><a class="header-anchor" href="#常用选项" aria-hidden="true">#</a> 常用选项</h1><ul><li><code>-r</code>: 反向排序（从大到小）</li><li><code>-n</code>: 按数值排序（默认是按字典顺序）</li><li><code>-k</code>: 指定排序的列</li><li><code>-t</code>: 指定列的分隔符</li><li><code>-u</code>: 去重，只保留唯一的行</li><li><code>-o</code>: 将排序后的结果输出到指定文件</li><li><code>-b</code>: 忽略每行前导的空白字符</li><li><code>-f</code>: 忽略大小写</li></ul><h1 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h1><h2 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sort</span> a.txt
fsdf
sdf
sdf
sdfa

$ <span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">sort</span>
fsdf
sdf
sdf
sdfa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按字母顺序排序" tabindex="-1"><a class="header-anchor" href="#按字母顺序排序" aria-hidden="true">#</a> 按字母顺序排序</h2><p>使用以下命令对文件内容进行排序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># banana</span>
<span class="token comment"># apple</span>
<span class="token comment"># cherry</span>
$ <span class="token function">sort</span> file.txt
apple
banana
cherry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 10</span>
<span class="token comment"># 5</span>
<span class="token comment"># 20</span>
<span class="token comment"># 1</span>
$ <span class="token function">sort</span> <span class="token parameter variable">-n</span> numbers.txt
<span class="token number">1</span>
<span class="token number">10</span>
<span class="token number">20</span>
<span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按数值排序" tabindex="-1"><a class="header-anchor" href="#按数值排序" aria-hidden="true">#</a> 按数值排序</h2><p>使用以下命令按数值排序（对非数字不起作用）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 10</span>
<span class="token comment"># 5</span>
<span class="token comment"># 20</span>
<span class="token comment"># 1</span>
$ <span class="token function">sort</span> <span class="token parameter variable">-n</span> numbers.txt
<span class="token number">1</span>
<span class="token number">5</span>
<span class="token number">10</span>
<span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反向排序" tabindex="-1"><a class="header-anchor" href="#反向排序" aria-hidden="true">#</a> 反向排序</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># banana</span>
<span class="token comment"># apple</span>
<span class="token comment"># cherry</span>
$ <span class="token function">sort</span> <span class="token parameter variable">-r</span> file.txt
cherry
banana
apple

<span class="token comment"># 10</span>
<span class="token comment"># 5</span>
<span class="token comment"># 20</span>
<span class="token comment"># 1</span>
$ <span class="token function">sort</span> <span class="token parameter variable">-rn</span> numbers.txt
<span class="token number">20</span>
<span class="token number">10</span>
<span class="token number">5</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按特定列排序" tabindex="-1"><a class="header-anchor" href="#按特定列排序" aria-hidden="true">#</a> 按特定列排序</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Alice 25</span>
<span class="token comment"># Bob 30</span>
<span class="token comment"># Charlie 20</span>
$ <span class="token function">sort</span> <span class="token parameter variable">-nk</span> <span class="token number">2</span> data.txt
Charlie <span class="token number">20</span>
Alice <span class="token number">25</span>
Bob <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用分隔符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Alice,25</span>
<span class="token comment"># Bob,30</span>
<span class="token comment"># Charlie,20</span>
$ <span class="token function">sort</span> -t, <span class="token parameter variable">-nk</span> <span class="token number">2</span> data.csv
Charlie,20
Alice,25
Bob,30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去重排序" tabindex="-1"><a class="header-anchor" href="#去重排序" aria-hidden="true">#</a> 去重排序</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># apple</span>
<span class="token comment"># banana</span>
<span class="token comment"># apple</span>
<span class="token comment"># cherry</span>
<span class="token comment"># banana</span>
$ <span class="token function">sort</span> <span class="token parameter variable">-u</span> duplicate.txt
apple
banana
cherry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出到文件" tabindex="-1"><a class="header-anchor" href="#输出到文件" aria-hidden="true">#</a> 输出到文件</h2><p>可以使用 <code>-o</code> 选项将排序结果输出到指定文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token parameter variable">-o</span> sorted.txt file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样会将 <code>file.txt</code> 的排序结果写入 <code>sorted.txt</code>。</p>`,25),d=[l];function c(r,t){return s(),a("div",null,d)}const v=n(i,[["render",c],["__file","sort.html.vue"]]);export{v as default};
