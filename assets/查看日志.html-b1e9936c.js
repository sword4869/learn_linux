import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<p>[toc]</p><h2 id="实时监控日志" tabindex="-1"><a class="header-anchor" href="#实时监控日志" aria-hidden="true">#</a> 实时监控日志</h2><p>即一个不断新增写入的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tail</span> <span class="token parameter variable">-f</span> xx.log

<span class="token comment"># -n 100 只监控最后100行</span>
<span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">100</span> <span class="token parameter variable">-f</span> xx.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行号" tabindex="-1"><a class="header-anchor" href="#行号" aria-hidden="true">#</a> 行号</h2><h3 id="显示行号" tabindex="-1"><a class="header-anchor" href="#显示行号" aria-hidden="true">#</a> 显示行号</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -n 显示行号</span>
$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> xx.log
     <span class="token number">1</span>  dsf
     <span class="token number">2</span>  log
     <span class="token number">3</span>
     <span class="token number">4</span>  sdf
     <span class="token number">5</span>  2log3

<span class="token comment"># less也行：类似vim的模式</span>
$ <span class="token function">less</span> <span class="token parameter variable">-N</span> xx.log
     <span class="token number">1</span>  dsf
     <span class="token number">2</span>  log
     <span class="token number">3</span>
     <span class="token number">4</span>  sdf
     <span class="token number">5</span>  2log3
     
<span class="token comment"># nl: numbering the lines。但是不用它的原因是它bu空行</span>
$ <span class="token function">nl</span> xx.log
     <span class="token number">1</span>  dsf
     <span class="token number">2</span>  log

     <span class="token number">3</span>  sdf
     <span class="token number">4</span>  2log3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据关键字定位行号" tabindex="-1"><a class="header-anchor" href="#根据关键字定位行号" aria-hidden="true">#</a> 根据关键字定位行号</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -n 显示行号</span>
$ <span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;log&quot;</span> xx.log
<span class="token number">2</span>:log
<span class="token number">5</span>:2log3

$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> xx.log <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;log&quot;</span>
     <span class="token number">2</span>  log
     <span class="token number">5</span>  2log3

<span class="token comment"># 查找mysql，p是打印（但是默认输出和p打印在一起会双重打印），所以 \`sed -n\` 取消默认输出 </span>
$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> xx.log <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/log/p&#39;</span>
     <span class="token number">2</span>  log
     <span class="token number">5</span>  2log3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按行号查询" tabindex="-1"><a class="header-anchor" href="#按行号查询" aria-hidden="true">#</a> 按行号查询</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 前100行</span>
$ <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">100</span> xx.log

<span class="token comment"># 后100行</span>
$ <span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">100</span> xx.log

<span class="token comment"># 从第100行到结束</span>
$ <span class="token function">tail</span> <span class="token parameter variable">-n</span> +100 xx.log

<span class="token comment"># 第100行到第200行</span>
$ <span class="token function">tail</span> <span class="token parameter variable">-n</span> +100 xx.log <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h2><p>less和more：less和more基础功能一样，但less更强大。</p><ul><li><code>/id</code>: 查询<code>id</code>关键字出现的位置，按n下一个位置，按shift+n上一个位置。</li><li><code>d</code> 下一页（半屏）, <code>u</code> 上一页（半屏）。</li><li><code>G</code> 移动到最后一行, <code>g</code> 移动到第一行</li></ul><h2 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 替换mysql为MYSQL，只是打印替换结果来预览。</span>
$ <span class="token function">sed</span> <span class="token string">&#39;s/mysql/MYSQL/g&#39;</span> FILE

<span class="token comment"># -i: 同一文件中进行更改</span>
<span class="token comment"># -e 多点编辑 让一条sed可以执行多条指令</span>
$ <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/mysql/MYSQL/g&#39;</span> FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># g: global occurrences</span>
$ <span class="token function">sed</span> <span class="token string">&#39;s/mysql/MYSQL/g&#39;</span> FILE

<span class="token comment"># 替换每行第一次出现的位置（1可省略）</span>
$ <span class="token function">sed</span> <span class="token string">&#39;s/mysql/MYSQL/&#39;</span> FILE
$ <span class="token function">sed</span> <span class="token string">&#39;s/mysql/MYSQL/1&#39;</span> FILE

<span class="token comment"># 替换每行第二次出现的位置</span>
$ <span class="token function">sed</span> <span class="token string">&#39;s/mysql/MYSQL/2&#39;</span> FILE

<span class="token comment"># 只替换第2行第1次出现的位置（1可省略）</span>
$ <span class="token function">sed</span> <span class="token string">&#39;2s/mysql/MYSQL/1&#39;</span> FILE

<span class="token comment"># 替换行号范围内(包含尾部)的字符串</span>
$ <span class="token function">sed</span> <span class="token string">&#39;1,2s/mysql/MYSQL/1&#39;</span> FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sed删除" tabindex="-1"><a class="header-anchor" href="#sed删除" aria-hidden="true">#</a> sed删除</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除第一行</span>
$ <span class="token function">sed</span> <span class="token string">&#39;1d&#39;</span> FILE

<span class="token comment"># 删除第1到2行</span>
$ <span class="token function">sed</span> <span class="token string">&#39;1,2d&#39;</span> FILE

<span class="token comment"># 从第1行删除到最后一行</span>
$ <span class="token function">sed</span> <span class="token string">&#39;1,$d&#39;</span> FILE 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除包含特定字符串的行</span>
<span class="token function">sed</span> <span class="token string">&#39;/mysql/d&#39;</span> FILE

<span class="token comment"># 删除不包含特定字符串的行，只留下包含特定字符串的行</span>
<span class="token function">sed</span> <span class="token string">&#39;/mysql/!d&#39;</span> FILE

<span class="token comment"># 删除空行</span>
<span class="token function">sed</span> <span class="token string">&#39;/^$/d&#39;</span> FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sed插入" tabindex="-1"><a class="header-anchor" href="#sed插入" aria-hidden="true">#</a> sed插入</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一行后插入 ddd 新行</span>
$ <span class="token function">sed</span> <span class="token string">&#39;1a\\ddd&#39;</span> FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在每个包含特定字符串的行之后（同行包含多个只算一次），插入新行，内容为ddd</span>
$ <span class="token function">sed</span> <span class="token string">&#39;/mysql/a\\ddd&#39;</span> FILE

<span class="token comment"># 在每个包含特定字符串的行之前，插入新行，内容为ddd</span>
$ <span class="token function">sed</span> <span class="token string">&#39;/mysql/i\\ddd&#39;</span> FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 写入到文件</span>
$ <span class="token function">cat</span> /etc/os-release <span class="token operator">|</span> <span class="token function">tee</span> xxx.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,24),d=[l];function c(r,t){return s(),a("div",null,d)}const o=n(i,[["render",c],["__file","查看日志.html.vue"]]);export{o as default};
