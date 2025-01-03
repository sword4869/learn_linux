import{_ as n,W as s,X as e,Y as a}from"./framework-9a5142fa.js";const o={},t=a(`<p>文件描述符 ：0 是标准输入（STDIN），1 是标准输出（STDOUT），2 是标准错误输出（STDERR），<code>/dev/null</code>是不要的空输出</p><p><code>&gt;</code>覆写，<code>&gt;&gt;</code>追加写，<code>&gt;&amp;</code>重定向。</p><p><code>&gt; file</code>，<code>&gt;file</code>都行。默认标准输出1</p><p><code>n&gt;file</code>，<code>n&gt; file</code>都行。<code>n</code>和<code>&gt;</code>中不能有空格。</p><p><code>command &gt; file</code>默认标准输出1，同 <code>command 1&gt; file</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果 &gt; 符号前没有加描述符，默认为标准输出1。2还是保持输出到屏幕</span>
<span class="token comment"># 同 bash running.sh 1&gt; file.out</span>
$ <span class="token function">bash</span> running.sh <span class="token operator">&gt;</span> file.out

<span class="token comment"># 将标准输出1定向到 file.out 标准错误输出2定向到 file.err</span>
$ <span class="token function">bash</span> running.sh <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> file.out <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> file.err

<span class="token comment"># 或者将1与2合并定向到 file.all</span>
$ <span class="token function">bash</span> running.sh <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> file.all <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>

<span class="token comment"># 重定向到 /dev/null , /dev/null 就像一个无底洞，可以无限往里面扔东西，坏处就是程序输出了啥咱也不知道</span>
$ <span class="token function">bash</span> running.sh <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;&amp;</span> <span class="token number">1</span>

<span class="token comment"># 管道时一般都记录错误 2&gt;&amp;1</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> not_find_runoob <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> lsls.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function c(i,p){return s(),e("div",null,l)}const d=n(o,[["render",c],["__file","重定向.html.vue"]]);export{d as default};
