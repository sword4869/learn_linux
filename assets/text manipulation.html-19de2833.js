import{_ as n,W as s,X as e,$ as a}from"./framework-586fce15.js";const i={},l=a(`<ul><li><code>head</code> and <code>tail</code></li><li>nmubering the lines: <code>nl</code></li><li>replace: <code>sed</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># the first 10 lines</span>
$ <span class="token function">head</span> FILE

<span class="token comment"># the first 20 lines</span>
$ <span class="token function">head</span> <span class="token parameter variable">-20</span> FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nl</span> FILE          
    <span class="token number">1</span>  jk
    <span class="token number">2</span>  ddfd
    <span class="token number">3</span>  <span class="token function">df</span>
    <span class="token number">4</span>  sdfa
    <span class="token number">5</span>  dfsdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># g: global occurrences</span>
$ <span class="token function">sed</span> s/mysql/MYSQL/g FILE

<span class="token comment"># only first occurrence</span>
$ <span class="token function">sed</span> s/mysql/MYSQL FILE

<span class="token comment"># only second occurrence</span>
$ <span class="token function">sed</span> s/mysql/MYSQL/2 FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 写入到文件</span>
$ <span class="token function">cat</span> /etc/os-release <span class="token operator">|</span> <span class="token function">tee</span> xxx.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[l];function d(t,o){return s(),e("div",null,c)}const u=n(i,[["render",d],["__file","text manipulation.html.vue"]]);export{u as default};
