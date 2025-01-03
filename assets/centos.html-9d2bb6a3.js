import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const i={},t=e(`<p>自动补全太好用了。</p><p>安装zsh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ①安装软件包</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">zsh</span> <span class="token function">git</span>
<span class="token comment"># ②更改默认终端</span>
chsh <span class="token parameter variable">-s</span> /bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候重新打开终端软件，应该就会默认进入 zsh 了。</p><p>配置oh-my-zsh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ①从igt仓库中拉取oh-my-zsh</span>
<span class="token function">git</span> clone https://gitee.com/mirrors/oh-my-zsh.git ~/.oh-my-zsh
<span class="token comment"># ②默认配置</span>
<span class="token function">cp</span> ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装高亮、自动补全插件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ①安装高亮插件：zsh-syntax-highlighting</span>
<span class="token function">git</span> clone https://gitee.com/dawnwords/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-syntax-highlighting

<span class="token comment"># ②安装自动补全：zsh-autosuggestions</span>
<span class="token function">git</span> clone https://gitee.com/lhaisu/zsh-autosuggestions.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-autosuggestions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开.zshrc文件，找到plugins=(git)，在这里增加自己想要的插件即可，多个插件名称之间使用空格或者换行分开（不能使用逗号）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> ~/.zshrc
<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>
        <span class="token function">git</span>
        <span class="token function">sudo</span>
        zsh-autosuggestions
        zsh-syntax-highlighting
<span class="token punctuation">)</span>
$ <span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function c(o,p){return n(),a("div",null,l)}const r=s(i,[["render",c],["__file","centos.html.vue"]]);export{r as default};
