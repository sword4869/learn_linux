import{_ as n,W as e,X as s,Y as a}from"./framework-9a5142fa.js";const i={},c=a(`<p>[toc]</p><p>When a file is created, the user who created it is the owner of the file, and the owning group is the user&#39;s current group.</p><h2 id="change-owner" tabindex="-1"><a class="header-anchor" href="#change-owner" aria-hidden="true">#</a> change owner</h2><p>用于更改文件或目录的所有者和所属组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更改单个文件的所有者：把 \`/path/to/file.txt\` 文件的所有者更改为 \`nginx\` 用户。</span>
<span class="token function">sudo</span> <span class="token function">chown</span> nginx /path/to/file.txt

<span class="token comment"># 同时更改所有者和所属组：把 \`/path/to/file.txt\` 文件的所有者和所属组都更改为 \`nginx\`。</span>
<span class="token function">sudo</span> <span class="token function">chown</span> nginx:nginx /path/to/file.txt

<span class="token comment"># 递归更改目录及其内容的所有者 \`-R\` 或 \`--recursive\`</span>
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> nginx:nginx /path/to/directory

<span class="token comment"># 只更改文件的所属组：把 \`/path/to/file.txt\` 文件的所属组更改为 \`nginx\`，而保持所有者不变。</span>
<span class="token function">sudo</span> <span class="token function">chown</span> :nginx /path/to/file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>符号链接</strong>：默认情况下，<code>chown</code> 不会影响符号链接本身，而是影响符号链接指向的目标文件。如果你想要更改符号链接本身的权限，请使用 <code>-h</code> 选项。</p><h2 id="change-group" tabindex="-1"><a class="header-anchor" href="#change-group" aria-hidden="true">#</a> change group</h2><p>You might have a group of pentesters and a group of security team members woking on the same project.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">chgrp</span> GROUP FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="change-permission" tabindex="-1"><a class="header-anchor" href="#change-permission" aria-hidden="true">#</a> change permission</h2><p>UGO(user, group, other) rwx(4, 2, 1)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">chmod</span> <span class="token number">766</span> FILE
$ <span class="token function">chmod</span> u+x,o-x FILE

<span class="token comment"># \`-R\`: 递归子目录</span>
$ <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> DIR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>see which user you&#39;re logged in</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">whoami</span>
user1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[c];function t(r,d){return e(),s("div",null,o)}const p=n(i,[["render",t],["__file","file permission.html.vue"]]);export{p as default};
