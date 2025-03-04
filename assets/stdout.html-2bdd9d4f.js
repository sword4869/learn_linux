import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const t={},l=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token comment"># just record std out</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token operator">&gt;</span>file.txt

<span class="token comment"># 1 represent std out, 2 represent std error.</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>file.txt <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>file2.txt

<span class="token comment"># file.txt records std out and std error</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token operator">&gt;</span>file.txt <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token comment"># another format</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token operator">&gt;&amp;</span> file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[l];function o(i,p){return n(),a("div",null,r)}const d=s(t,[["render",o],["__file","stdout.html.vue"]]);export{d as default};
