import{_ as a,W as n,X as s,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<h1 id="find-解析" tabindex="-1"><a class="header-anchor" href="#find-解析" aria-hidden="true">#</a> find 解析</h1><p><code>find path [options] [expression] </code></p><p>path 默认当前路径</p><p>​ 查找指定路径及其内部的所有子目录。</p><p>expression：默认-print</p><p>​ -print find命令将匹配的文件输出到标准输出。</p><p>​ -exec find命令对匹配的文件执行该参数所给出的shell命令。</p><p>​ -ok 和- exec的作用相同，只不过以一种更为安全的模式来执行该参数所给出的shell命令，在执行每一个命令之前，提示用户是否执行.</p><p>options</p><p>​ -name 按照文件名，支持通配符</p><p>​ -perm 按照文件权限来查找文件</p><p>​ -type 查找某一类型的文件</p><p>​ f(普通文件从<code>-</code>变成<code>f</code>),d ​ b,c ​ l,p,s</p><p>​ -size选项 ,按文件的大小查找文件的</p><p>​ -mtime -n +n 按照文件的更改时间来查找文件，-n表示文件更改时间距现在n天以内，+n表示文件更改时间距现在n天以前。</p><p>​ -newer file1 查找更改时间比文件file1新的文件。</p><h1 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h1><h2 id="指定名字" tabindex="-1"><a class="header-anchor" href="#指定名字" aria-hidden="true">#</a> 指定名字</h2><p>当前目录下指定名字</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">find</span> /usr <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;Bash&quot;</span>

<span class="token comment"># 不区分大小写</span>
$ <span class="token function">find</span> /usr <span class="token parameter variable">-type</span> f <span class="token parameter variable">-iname</span> <span class="token string">&quot;Bash&quot;</span>
/usr/share/menu/bash
/usr/share/lintian/overrides/bash
/usr/bin/bash

<span class="token comment"># 逻辑或</span>
$ <span class="token function">find</span> <span class="token parameter variable">-name</span> *.log <span class="token parameter variable">-o</span> <span class="token parameter variable">-name</span> *yml
./logs/nacos/config.log
./logs/nacos/naming.log
./docker-compose.yml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大小" tabindex="-1"><a class="header-anchor" href="#大小" aria-hidden="true">#</a> 大小</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 大小正好为 50KB 的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-size</span> 50k
<span class="token comment"># 大于 20 bytes 的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-size</span> +20c
<span class="token comment"># 小于 1G 的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-size</span> <span class="token parameter variable">-1G</span>
<span class="token comment"># 大于 500 MB 但小于 1 GB 的文件：</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-size</span> +500M <span class="token parameter variable">-size</span> <span class="token parameter variable">-1G</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>-size N</code>: 文件大小</p><p><code>N</code> 表示正好 N大小的文件，<code>+N</code> 查找大于 N 的文件，<code>-N</code> 查找小于 N 的文件。</p><p>不支持小数，<code>3.5G</code>不行，<code>3500M</code>才行</p><ul><li>c: bytes</li><li>k: kilobytes</li><li>M: Megabytes</li><li>G: Gigabytes</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># \`-empty\`: 查找空文件，可以配合\`-type\`区分文件还是目录</span>
$ <span class="token function">find</span> <span class="token parameter variable">-empty</span>
./.pki/nssdb
./.m2/repository
./logs/nacos/naming.log
./registry-data/docker/registry/v2/repositories/wisehub-file-service/_uploads

$ <span class="token function">find</span> <span class="token parameter variable">-empty</span> <span class="token parameter variable">-type</span> d
./.pki/nssdb
./.m2/repository
./registry-data/docker/registry/v2/repositories/wisehub-file-service/_uploads
$ <span class="token function">find</span> <span class="token parameter variable">-empty</span> <span class="token parameter variable">-type</span> f
./logs/nacos/naming.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行删除" tabindex="-1"><a class="header-anchor" href="#执行删除" aria-hidden="true">#</a> 执行删除</h2><p><code>rm</code> 只能支持删除某一层的文件，不能删除其子孙目录的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rfv</span> *.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>find 递归删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.md&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-v</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token function">find</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.md&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-v</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> +
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>{}</code> 大括号充当匹配文件结果的占位符，因此 <code>rm-v {}</code> 将删除find命令找到的文件；</li><li>结束 shell 执行的命令（exec之后的命令） <ul><li>第一种是<code>\\;</code>。反斜杠 <code>\\</code>是转义分号。</li><li>第二种是<code>+</code></li></ul></li></ul>`,30),p=[l];function r(c,d){return n(),s("div",null,p)}const o=a(i,[["render",r],["__file","find.html.vue"]]);export{o as default};
