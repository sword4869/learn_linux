import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const i={},p=e(`<p>作业。</p><p>作业控制是一种允许用户在一个shell中同时运行多个进程的机制。<strong>所以，当前shell退出（ssh登出），那么jobs的任务都终止</strong>.</p><p>前台、后台。命令在后台运行，不会阻塞当前的shell。</p><p>缺点：后台作业还会输出打印到屏幕上，但是终端还是可以输入命令的，只要正确输入，就不会有问题。</p><h2 id="jobs显示当前有哪些作业" tabindex="-1"><a class="header-anchor" href="#jobs显示当前有哪些作业" aria-hidden="true">#</a> jobs显示当前有哪些作业</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linux@bashcommandnotfound.cn ~<span class="token punctuation">]</span>$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>   Running                 <span class="token function">ping</span> <span class="token number">8.8</span>.8.8 <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>-  Running                 <span class="token function">sleep</span> <span class="token number">100</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>+  Running                 python <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>[1]</code>是<strong>作业序号</strong>。<code>+</code>是最近作业，<code>-</code>是上一个作业，别的就是更早的作业。</p><p><code>&amp;</code>表示后台作业。</p><p><code>Stopped</code>, <code>Running</code>, <code>Killed</code></p><p>参数：</p><p>​ <code>-l</code>: 再显示 pid</p><h2 id="作业进入后台" tabindex="-1"><a class="header-anchor" href="#作业进入后台" aria-hidden="true">#</a> 作业进入后台</h2><p>方式一：执行时就<code>&amp;</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linux@bashcommandnotfound.cn ~<span class="token punctuation">]</span>$ <span class="token function">ping</span> www.bing.com <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>[1]</code>是<strong>作业序号</strong>，<code>1234</code>是pid。</p><p>方式二：前台程序时，按下 ctrl + z 进入后台并暂停，<code>bg</code>再让其执行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Stopped                 python
$ <span class="token function">bg</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ python <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作业进入前台" tabindex="-1"><a class="header-anchor" href="#作业进入前台" aria-hidden="true">#</a> 作业进入前台</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Stopped                 python
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> lenovo@lenovo:~$ <span class="token function">fg</span>
python
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本默认是不支持作业控制的，需要在脚本的开头加上 <code>set -m</code> 命令，来启用作业控制。</p><h2 id="暂停-stopped-作业" tabindex="-1"><a class="header-anchor" href="#暂停-stopped-作业" aria-hidden="true">#</a> 暂停 Stopped 作业</h2><p>暂停前台作业: ctrl + z</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Stopped                 python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>暂停 Stopped 后台作业</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># %作业序号</span>
<span class="token function">kill</span> <span class="token parameter variable">-STOP</span> %1

<span class="token comment"># pid</span>
<span class="token function">kill</span> <span class="token parameter variable">-STOP</span> <span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS: 恢复 作业 Running</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以后台继续</span>
<span class="token function">bg</span> %1
<span class="token comment"># 以前台继续</span>
<span class="token function">fg</span> %1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bg-fg" tabindex="-1"><a class="header-anchor" href="#bg-fg" aria-hidden="true">#</a> bg fg</h2><p>bg: 继续执行一个后台作业 Running</p><p>fg：将作业放到前台 Running</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bg</span> <span class="token punctuation">[</span>job_spec <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 什么不输入代表默认最近作业</span>
<span class="token function">bg</span>

<span class="token comment"># %作业序号. 可以直接输入作业序号</span>
<span class="token function">bg</span> %1
<span class="token function">bg</span> <span class="token number">1</span>

<span class="token comment"># 最近的一个作业</span>
<span class="token function">bg</span> %+
<span class="token comment"># 上一个作业</span>
<span class="token function">bg</span> %-

<span class="token comment"># %?str	包含str的作业	</span>
<span class="token function">bg</span> %?ping
<span class="token comment"># %str	以str开头的作业	</span>
<span class="token function">bg</span> %sleep
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),c=[p];function t(o,l){return s(),a("div",null,c)}const u=n(i,[["render",t],["__file","fg bg jobs.html.vue"]]);export{u as default};
