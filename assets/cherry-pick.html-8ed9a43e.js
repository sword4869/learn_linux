import{_ as n,W as s,X as e,Y as a}from"./framework-9a5142fa.js";const i={},c=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    a - b - c - d   Master
         <span class="token punctuation">\\</span>
           e - f - g Feature
           

<span class="token comment"># 切换到 master 分支，master分支捡起 Feature分支的f</span>
$ <span class="token function">git</span> checkout master
$ <span class="token function">git</span> cherry-pick f



    a - b - c - d - f   Master		【master分支的末尾增加了一个提交f，是完全独立于 Feature 的】
         <span class="token punctuation">\\</span>
           e - f - g Feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提交记录是全局唯一的，即使在不同分支上。</span>
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span>

<span class="token comment"># 一次转移多个</span>
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>HashA<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>HashB<span class="token operator">&gt;</span>

<span class="token comment"># [A...B]，提交 A 必须早于提交 B</span>
$ <span class="token function">git</span> cherry-pick A<span class="token punctuation">..</span>B 

<span class="token comment"># (A...B]</span>
$ <span class="token function">git</span> cherry-pick A^<span class="token punctuation">..</span>B 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理：</p><p>1、成功，最好</p><p>2、代码冲突：</p><p>（1）手动解决冲突，然后</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token parameter variable">--continue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）冲突解决不了，那么放弃整个操作，回到cherry-pick前的样子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token parameter variable">--abort</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）发生代码冲突后，退出 Cherry pick，但是不回到操作前的样子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token parameter variable">--quit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常用</p><p><strong><code>-n</code>，<code>--no-commit</code></strong></p><p>只更新工作区和暂存区，不产生新的提交。</p><p>这样用来提取为一次提交记录。</p>`,16),l=[c];function r(t,d){return s(),e("div",null,l)}const o=n(i,[["render",r],["__file","cherry-pick.html.vue"]]);export{o as default};
