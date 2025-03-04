import{_ as e,W as n,X as a,Y as s}from"./framework-9a5142fa.js";const i={},l=s(`<p>^ 表示 ctrl，M-表示alt</p><p>保存并退出：^S，^X</p><p>直接退出：^X，然后会问，选择N就是不保存，选择Y就是保存并退出，选择^C就是继续编辑</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Save modified buffer?    
 Y Yes
 N No           ^C Cancel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>alt+U撤销，alt+E反撤销</p><p>^K剪切，^U粘贴</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -l: 显示行号</span>
<span class="token function">nano</span> <span class="token parameter variable">-l</span> main.txt

<span class="token comment"># -m: 使用鼠标来移动</span>
<span class="token function">nano</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function c(d,r){return n(),a("div",null,t)}const p=e(i,[["render",c],["__file","nano.html.vue"]]);export{p as default};
