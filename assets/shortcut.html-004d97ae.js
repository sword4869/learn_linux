import{_ as s,W as t,X as e,Y as n}from"./framework-9a5142fa.js";const a={},i=n(`<h1 id="shortcut" tabindex="-1"><a class="header-anchor" href="#shortcut" aria-hidden="true">#</a> shortcut</h1><h2 id="ubuntu快速回到桌面" tabindex="-1"><a class="header-anchor" href="#ubuntu快速回到桌面" aria-hidden="true">#</a> ubuntu快速回到桌面</h2><p>ctrl+alt+d win+d</p><h2 id="tty" tabindex="-1"><a class="header-anchor" href="#tty" aria-hidden="true">#</a> tty</h2><p>ctrl+alt+f1/f2/f3/f4/f5/f6 打字机 ctrl+alt+f7 桌面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 我用的lightdm，其他还有gdm</span>

<span class="token comment"># 关闭tty7的桌面</span>
<span class="token function">sudo</span> systemctl stop lightdm

<span class="token comment"># 开启tty7的桌面</span>
<span class="token function">sudo</span> systemctl start lightdm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[i];function d(l,r){return t(),e("div",null,c)}const u=s(a,[["render",d],["__file","shortcut.html.vue"]]);export{u as default};
