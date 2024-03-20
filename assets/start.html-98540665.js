import{_ as s,W as e,X as n,$ as a}from"./framework-586fce15.js";const i={},l=a(`<h1 id="script-and-console" tabindex="-1"><a class="header-anchor" href="#script-and-console" aria-hidden="true">#</a> script and console</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The command in the script is as same as the command in the console.</p><h1 id="where-is-shell-and-bash" tabindex="-1"><a class="header-anchor" href="#where-is-shell-and-bash" aria-hidden="true">#</a> where is shell and bash</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># show all shell available on your system</span>
$ <span class="token function">cat</span> /etc/shells
<span class="token comment"># /etc/shells: valid login shells</span>
/bin/sh
/bin/bash
/usr/bin/bash
/bin/rbash
/usr/bin/rbash
/bin/dash
/usr/bin/dash
/usr/bin/tmux
/usr/bin/screen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># the path of bash</span>
$ <span class="token function">which</span> <span class="token function">bash</span>
/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="hello-script" tabindex="-1"><a class="header-anchor" href="#hello-script" aria-hidden="true">#</a> hello script</h1><blockquote><p>create a script</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>#! /bin/bash</code> means a interpreter which executes the script.</p><blockquote><p>run it</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">chmod</span> +x hello.sh
$ .hello.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d=[l];function c(r,t){return e(),n("div",null,d)}const h=s(i,[["render",c],["__file","start.html.vue"]]);export{h as default};
