import{_ as s,W as n,X as e,Y as a}from"./framework-9a5142fa.js";const t={},l=a(`<p>感觉和 <code>&gt;</code> <code>&gt;&gt;</code> 没啥区别</p><p>tee</p><ul><li>从标准输入读取数据，并将其写入到标准输出和一个或多个文件中，并将结果输出到标准输出上</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 覆写</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;example output&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> file.txt
example output
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;example output&quot;</span> <span class="token operator">&gt;</span> file.txt

<span class="token comment"># 追加 -a</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;example output&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> file.txt
example output
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;example output&quot;</span> <span class="token operator">&gt;&gt;</span> file.txt

<span class="token comment"># 隐藏tee输出</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;example output&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> file.txt <span class="token operator">&gt;</span>/dev/null

<span class="token comment"># 使用tee命令在多个文件中写入相同的内容</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;example output&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> file1.txt file2.txt file3.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[l];function i(p,c){return n(),e("div",null,o)}const r=s(t,[["render",i],["__file","tee.html.vue"]]);export{r as default};
