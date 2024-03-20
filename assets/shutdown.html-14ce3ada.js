import{_ as n,W as s,X as a,$ as e}from"./framework-586fce15.js";const i={},l=e(`<p>linux</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># shutdown 需要root</span>

<span class="token comment"># 立刻关机，halt</span>
<span class="token function">sudo</span> <span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now
<span class="token comment"># 10 mins</span>
<span class="token function">sudo</span> <span class="token function">shutdown</span> <span class="token parameter variable">-h</span> <span class="token number">10</span>

<span class="token comment"># 重启, reboot</span>
<span class="token function">sudo</span> <span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 立刻关机</span>
<span class="token function">halt</span>

<span class="token comment"># 立刻关机</span>
poweroff

<span class="token comment"># 重启</span>
<span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>win</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 立刻关机</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-t</span> <span class="token number">0</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-p</span>

<span class="token comment"># 10 min</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-t</span> <span class="token number">600</span>

<span class="token comment"># 重启</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-t</span> <span class="token number">0</span>

<span class="token comment"># 强制不询问</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[l];function t(o,d){return s(),a("div",null,c)}const r=n(i,[["render",t],["__file","shutdown.html.vue"]]);export{r as default};
