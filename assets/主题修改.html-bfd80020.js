import{_ as e,W as i,X as n,Y as d}from"./framework-9a5142fa.js";const a={},s=d(`<h2 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h2><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410241229172.png" alt="image-20241024122923132"></p><p>基于 github风格的，编辑文件<code>github.css</code></p><h2 id="默认-完全看不出左右" tabindex="-1"><a class="header-anchor" href="#默认-完全看不出左右" aria-hidden="true">#</a> 默认<code>“”</code>完全看不出左右</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>body {
    font-family: &quot;Open Sans&quot;,&quot;Clear Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &#39;Segoe UI Emoji&#39;, sans-serif;
    color: rgb(51, 51, 51);
    line-height: 1.6;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删掉第一个字体 <code>&quot;Open Sans&quot;,</code> 即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>body {
    font-family: &quot;Clear Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &#39;Segoe UI Emoji&#39;, sans-serif;
    color: rgb(51, 51, 51);
    line-height: 1.6;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code代码字体缩小" tabindex="-1"><a class="header-anchor" href="#code代码字体缩小" aria-hidden="true">#</a> code代码字体缩小</h2><h3 id="code-block" tabindex="-1"><a class="header-anchor" href="#code-block" aria-hidden="true">#</a> code block \`\`\`</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.md-fences {
	background-color: #f8f8f8;
	font-size: 0.8em;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加<code>font-size: 0.8em;</code></p><h3 id="code-inline" tabindex="-1"><a class="header-anchor" href="#code-inline" aria-hidden="true">#</a> code inline \`\`</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>code {
    background-color: #f3f4f4;
    padding: 0 2px 0 2px;
    font-size: 1em;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加<code>font-size: 1em;</code> ：让其和正常字体一样大小</p><h2 id="占满屏幕" tabindex="-1"><a class="header-anchor" href="#占满屏幕" aria-hidden="true">#</a> 占满屏幕</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#write {
    max-width: 860px;
  	margin: 0 auto;
  	padding: 30px;
    padding-bottom: 100px;
}

@media only screen and (min-width: 1400px) {
	#write {
		max-width: 1024px;
	}
}

@media only screen and (min-width: 1800px) {
	#write {
		max-width: 1200px;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删掉 <code>max-width</code> 的属性限制</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#write {
  	margin: 0 auto;
  	padding: 30px;
    padding-bottom: 100px;
}

@media only screen and (min-width: 1400px) {
}

@media only screen and (min-width: 1800px) {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[s];function r(c,t){return i(),n("div",null,l)}const o=e(a,[["render",r],["__file","主题修改.html.vue"]]);export{o as default};
