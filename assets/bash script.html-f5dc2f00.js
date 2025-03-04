import{_ as n,W as e,X as i,Z as l,a0 as t,a1 as c,Y as s,E as o,$ as r}from"./framework-9a5142fa.js";const d={},p=s('<p>[toc]</p><h2 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h2><h3 id="interpreter" tabindex="-1"><a class="header-anchor" href="#interpreter" aria-hidden="true">#</a> Interpreter</h3><p>The shebang <code>#!</code>: a combination of a bash mark and an exclamation mark.</p><p><code>#! /bin/bash</code>, <code>#! python3</code></p><h3 id="permission-to-execute" tabindex="-1"><a class="header-anchor" href="#permission-to-execute" aria-hidden="true">#</a> Permission to execute</h3>',6),u=s(`<h3 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> Run</h3><p><code>./</code> : it’s good practice to use the <code>./</code> when executing files as this localizes the file execution to the current directory. There may be another file with the same name on your system.</p><h2 id="usecase" tabindex="-1"><a class="header-anchor" href="#usecase" aria-hidden="true">#</a> Usecase</h2><p><code>echo</code>: submit a message to standard output.</p><p><code>read</code>: place whatever they input into a variable.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token builtin class-name">read</span> name
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello&quot;</span> <span class="token variable">$name</span> <span class="token string">&quot;to Bash Script&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="quotes" tabindex="-1"><a class="header-anchor" href="#quotes" aria-hidden="true">#</a> quotes</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> os
os
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;os&quot;</span>
os
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;&#39;os&#39;&quot;</span>
<span class="token string">&#39;os&#39;</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;&quot;os&quot;&#39;</span>
<span class="token string">&quot;os&quot;</span>
$ <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token number">123</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;&quot;&#39;</span><span class="token variable">$id</span><span class="token string">&#39;&quot;&#39;</span>
<span class="token string">&quot;123&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;&#39;&quot;</span><span class="token variable">$id</span><span class="token string">&quot;&#39;&quot;</span>
<span class="token string">&#39;123&#39;</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;&quot;!!&#39;</span> <span class="token variable">$id</span>---<span class="token string">&#39;&quot;&#39;</span>
<span class="token string">&quot;!! 123---&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行命令" tabindex="-1"><a class="header-anchor" href="#执行命令" aria-hidden="true">#</a> 执行命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">id1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">id</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-n</span><span class="token variable">\`</span></span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$id1</span>

$ <span class="token assign-left variable">id2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-n</span><span class="token variable">)</span></span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$id2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">hhh</span><span class="token operator">=</span><span class="token string">&#39;ls&#39;</span>
$ hhh
hhh: <span class="token builtin class-name">command</span> not found
$ <span class="token builtin class-name">echo</span> <span class="token variable">$hhh</span>
<span class="token function">ls</span>
$ <span class="token variable">$hhh</span>
cache.db  clash  config.yaml  Country.mmdb

$ <span class="token builtin class-name">alias</span> <span class="token assign-left variable">jjj</span><span class="token operator">=</span><span class="token string">&#39;ls&#39;</span>
$ jjj
docs  images  node_modules  package.json  yarn.lock
$ <span class="token builtin class-name">echo</span> <span class="token variable">$jjj</span>

$ <span class="token variable">$jjj</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function h(b,v){const a=o("RouterLink");return e(),i("div",null,[p,l("p",null,[t(a,{to:"/bash/file%20permission.md/#%20change%20permission"},{default:c(()=>[r("chmod")]),_:1})]),u])}const k=n(d,[["render",h],["__file","bash script.html.vue"]]);export{k as default};
