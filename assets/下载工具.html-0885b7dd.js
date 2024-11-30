import{_ as s,W as a,X as n,Y as e}from"./framework-9a5142fa.js";const t={},r=e(`<h1 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h1><p>网页和下载东西两者都可以。</p><h2 id="curl" tabindex="-1"><a class="header-anchor" href="#curl" aria-hidden="true">#</a> curl</h2><h3 id="网页和保存文件" tabindex="-1"><a class="header-anchor" href="#网页和保存文件" aria-hidden="true">#</a> 网页和保存文件</h3><p><code>-L</code> 重定向，</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 结果却是网页</span>
$ <span class="token function">curl</span> http://cn.wordpress.org/wordpress-3.1-zh_CN.zip
$ <span class="token function">cat</span> wordpress-3.1-zh_CN.zip
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span><span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token number">301</span> Moved Permanently<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>center<span class="token operator">&gt;</span><span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token number">301</span> Moved Permanently<span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token operator">&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span><span class="token operator">&lt;</span>center<span class="token operator">&gt;</span>nginx<span class="token operator">&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>

<span class="token comment"># 重定向才是东西</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-L</span> http://cn.wordpress.org/wordpress-3.1-zh_CN.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：<code>curl -fsSL</code></p><p>-f（或 --fail）：如果服务器返回错误码（例如 404），则 curl 将停止下载文件并返回错误。</p><p>-s（或 --silent）：禁止 curl 输出进度和错误信息，只显示下载结果。</p><p>-S（或 --show-error）：即使禁用了 -s 选项，也会显示错误信息。</p><p>-L（或 --location）：跟随重定向，如果服务器返回 3xx 错误码，则 curl 会自动跳转到新的 URL。</p><p>综合起来，curl -fsSL 表示使用 curl 命令下载文件时，不显示进度和错误信息，如果下载失败则立即停止，并自动跟随重定向。这通常是下载文件的一种安静、安全、稳定的方式。</p><h3 id="保存到文件的名字" tabindex="-1"><a class="header-anchor" href="#保存到文件的名字" aria-hidden="true">#</a> 保存到文件的名字</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 自定义文件名。结果是example.html</span>
<span class="token comment">#  -o, --output FILE   Write output to &lt;file&gt; instead of stdout</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> example.html https://www.example.com

<span class="token comment"># 使用远程服务器上的名字作为文件名。结果是bar.html</span>
<span class="token comment">#  -O, --remote-name   Write output to a file named as the remote file</span>
<span class="token function">curl</span> <span class="token parameter variable">-O</span> https://www.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wget" tabindex="-1"><a class="header-anchor" href="#wget" aria-hidden="true">#</a> wget</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://cn.wordpress.org/wordpress-3.1-zh_CN.zip 

<span class="token comment"># -c断点续传 </span>
<span class="token function">wget</span> <span class="token parameter variable">-c</span> http://cn.wordpress.org/wordpress-3.1-zh_CN.zip 

<span class="token comment"># -O下载并以不同的文件名保存 </span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> <span class="token number">1</span>.zip http://cn.wordpress.org/wordpress-3.1-zh_CN.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),p=[r];function o(l,c){return a(),n("div",null,p)}const d=s(t,[["render",o],["__file","下载工具.html.vue"]]);export{d as default};
