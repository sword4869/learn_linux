import{_ as s,W as a,X as n,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<h1 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">type</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>type</code>命令用于显示给定命令的类型。</p><p>​ 内建命令（shell的）、外部命令、别名还是函数。</p><h3 id="常见选项" tabindex="-1"><a class="header-anchor" href="#常见选项" aria-hidden="true">#</a> 常见选项</h3><ul><li><code>-a</code>：+ 命令位置</li><li><code>-t</code>：仅显示类型</li><li><code>-p</code>, <code>-P</code>：如果命令是可执行文件，显示路径。</li><li><code>-f</code>：忽略别名。</li></ul><h1 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h1><h2 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 别名</span>
$ <span class="token builtin class-name">type</span> <span class="token function">ls</span>
<span class="token function">ls</span> is aliased to <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>tty<span class="token string">&#39;

$ alias ll=&#39;</span><span class="token function">ls</span> -l&#39;
$ <span class="token builtin class-name">type</span> ll
ll 是别名，指向 <span class="token variable">\`</span></span><span class="token function">ls</span> -l\`

<span class="token comment"># 内建命令</span>
$ <span class="token builtin class-name">type</span> <span class="token builtin class-name">cd</span>
<span class="token builtin class-name">cd</span> is a shell <span class="token builtin class-name">builtin</span>

<span class="token comment"># 外部命令</span>
$ <span class="token builtin class-name">type</span> <span class="token function">date</span>
<span class="token function">date</span> is /bin/date

$ <span class="token builtin class-name">type</span> mysql
mysql is /usr/bin/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="a-命令位置" tabindex="-1"><a class="header-anchor" href="#a-命令位置" aria-hidden="true">#</a> <code>-a</code>：+ 命令位置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-a</span> <span class="token function">ls</span>
<span class="token function">ls</span> is aliased to \`ls <span class="token parameter variable">--color</span><span class="token operator">=</span>auto&#39;
<span class="token function">ls</span> is /bin/ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t-仅显示类型" tabindex="-1"><a class="header-anchor" href="#t-仅显示类型" aria-hidden="true">#</a> <code>-t</code>：仅显示类型</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token function">ls</span>
<span class="token builtin class-name">alias</span>
$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token builtin class-name">cd</span>
<span class="token builtin class-name">builtin</span>
$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token function">date</span>
<span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="p-p-显示命令的路径" tabindex="-1"><a class="header-anchor" href="#p-p-显示命令的路径" aria-hidden="true">#</a> <code>-p -P</code>：显示命令的路径</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-p</span> <span class="token function">ls</span>
$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-P</span> <span class="token function">ls</span>
/bin/ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么-p没效果？</p><h2 id="f-忽略别名" tabindex="-1"><a class="header-anchor" href="#f-忽略别名" aria-hidden="true">#</a> <code>-f</code> ：忽略别名</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-f</span> <span class="token function">ls</span>
<span class="token function">ls</span> 是 /bin/ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>好像没效果？</p>`,19),c=[l];function d(t,p){return a(),n("div",null,c)}const o=s(i,[["render",d],["__file","type.html.vue"]]);export{o as default};
