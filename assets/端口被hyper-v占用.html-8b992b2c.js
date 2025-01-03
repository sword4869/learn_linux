import{_ as e,W as a,X as i,Z as n,$ as c,a0 as l,Y as t,E as p}from"./framework-9a5142fa.js";const o={},r={href:"https://blog.csdn.net/ning521513/article/details/123524763",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="这个问题的背景分为两部分" tabindex="-1"><a class="header-anchor" href="#这个问题的背景分为两部分" aria-hidden="true">#</a> 这个问题的背景分为两部分</h2><p><code>Windows</code> 中有一个「TCP 动态端口范围」，处在这个范围内的端口，有时候会被一些服务占用。</p><p>​ 在 <code>Windows Vista</code>（或 <code>Windows Server 2008</code>）之前，动态端口范围是 <code>1025</code> 到 <code>5000</code>；在 <code>Windows Vista</code>（或 <code>Windows Server 2008</code>）之后，新的默认起始端口为 <code>49152</code>，新的默认结束端口为 <code>65535</code>。</p><p>如果安装了 <code>Hyper-V</code>，那么 <code>Hyper-V</code> 会为容器宿主网络服务（Windows Container Host Networking Service）在「TCP 动态端口范围」随机保留一些端口号使用。正常情况下，就算保留几百、几千个也影响不大。</p><p>但是，Windows 自动更新有时会出错，导致这个范围的起始端口被重置为 <code>1024</code>……这可就麻烦了，一些常用端口动不动就因为被保留而无法使用了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可以查看目前「TCP 动态端口」的范围</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>lab<span class="token operator">&gt;</span> netsh int ipv4 show dynamicport tcp

Protocol tcp Dynamic Port Range
---------------------------------
Start Port      <span class="token builtin class-name">:</span> <span class="token number">1024</span>
Number of Ports <span class="token builtin class-name">:</span> <span class="token number">13977</span>

<span class="token comment"># 查看当前所有已经被征用了的端口</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>lab<span class="token operator">&gt;</span> netsh int ipv4 show excludedportrange <span class="token assign-left variable">protocol</span><span class="token operator">=</span>tcp

Protocol tcp Port Exclusion Ranges

Start Port    End Port
----------    --------
      <span class="token number">1074</span>        <span class="token number">1173</span>
      <span class="token number">1174</span>        <span class="token number">1273</span>
      <span class="token number">1374</span>        <span class="token number">1473</span>
      <span class="token number">1474</span>        <span class="token number">1573</span>
      <span class="token number">1574</span>        <span class="token number">1673</span>
      <span class="token number">1678</span>        <span class="token number">1777</span>
      <span class="token number">2224</span>        <span class="token number">2323</span>
      <span class="token number">9598</span>        <span class="token number">9697</span>
      <span class="token number">9698</span>        <span class="token number">9797</span>
      <span class="token number">9798</span>        <span class="token number">9897</span>
      <span class="token number">9898</span>        <span class="token number">9997</span>
      <span class="token number">9998</span>       <span class="token number">10097</span>
     <span class="token number">10098</span>       <span class="token number">10197</span>
     <span class="token number">10198</span>       <span class="token number">10297</span>
     <span class="token number">10298</span>       <span class="token number">10397</span>
     <span class="token number">13510</span>       <span class="token number">13609</span>
     <span class="token number">27339</span>       <span class="token number">27339</span>
     <span class="token number">50000</span>       <span class="token number">50059</span>     *

* - Administered port exclusions.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这些被征用的端口范围随机挑选到 <code>8088</code>、<code>8000</code>、<code>3000</code> 等 Web 开发常用端口，那开发就会受到影响；如果挑选到其他应用软件要调用的端口，那这些应用软件就会受到影响，可以说非常坑爹了……</p><h2 id="错误的解决方法" tabindex="-1"><a class="header-anchor" href="#错误的解决方法" aria-hidden="true">#</a> 错误的解决方法</h2><p>错误的解决方法是，运行 <code>net stop winnat</code> 停止 winnat 服务，然后再运行 <code>net start winnat</code> 启动 winnat 服务。</p><p>这个方法本质上就是重启电脑的简化版……让 <code>Hyper-V</code> 再随机初始化一些端口保留，如果正好没随机到要用的端口，那一次成功。如果还是随机到了要用的端口，那就只能多来几次。</p><p>在那个问题的回答下，我看到有一些网友说「对我有用」，也有一些网友说「对我没用」，原因就是这个方法解决问题的概率完全是随机的……</p><h2 id="正确的解决方法" tabindex="-1"><a class="header-anchor" href="#正确的解决方法" aria-hidden="true">#</a> 正确的解决方法</h2><p>（1）管理员权限重新设置一下「TCP 动态端口范围」，让 <code>Hyper-V</code> 只在我们设定的范围内保留端口即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>netsh int ipv4 <span class="token builtin class-name">set</span> dynamic tcp <span class="token assign-left variable">start</span><span class="token operator">=</span><span class="token number">49152</span> <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">16384</span>

netsh int ipv6 <span class="token builtin class-name">set</span> dynamic tcp <span class="token assign-left variable">start</span><span class="token operator">=</span><span class="token number">49152</span> <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">16384</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启电脑，让winnat重新加载动态端口。</p><p>不想重启就手动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net stop winnat
net start winnat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）为了以防这种windows更新而导致「TCP 动态端口范围」异常的问题，直接关闭hyper-V。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dism.exe /Online /Disable-Feature:Microsoft-Hyper-V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19);function u(b,m){const s=p("ExternalLinkIcon");return a(),i("div",null,[n("p",null,[n("a",r,[c("hyper-v占用其他软件或服务端口解决方案_hyper-v 端口-CSDN博客"),l(s)])]),d])}const k=e(o,[["render",u],["__file","端口被hyper-v占用.html.vue"]]);export{k as default};
