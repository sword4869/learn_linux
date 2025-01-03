import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<p>[toc]</p><hr><h2 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token parameter variable">--shutdown</span>
        立即终止所有正在运行的分发和 WSL <span class="token number">2</span> 轻型虚拟机。
wsl <span class="token parameter variable">--shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看wsl版本" tabindex="-1"><a class="header-anchor" href="#查看wsl版本" aria-hidden="true">#</a> 查看wsl版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token parameter variable">--status</span>
        显示适用于 Linux 的 Windows 子系统的状态。
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>lab<span class="token operator">&gt;</span>wsl <span class="token parameter variable">--status</span>
默认版本：2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="忘记了-linux-分发版的密码" tabindex="-1"><a class="header-anchor" href="#忘记了-linux-分发版的密码" aria-hidden="true">#</a> 忘记了 Linux 分发版的密码</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>    <span class="token operator">--</span>list<span class="token punctuation">,</span> <span class="token operator">-</span>l <span class="token namespace">[Options]</span>
        列出分发。

        选项:
            <span class="token operator">--</span>all
                列出所有分发，包括
                目前正在被安装或被卸载的分发。

            <span class="token operator">--</span>running
                仅列出目前正在运行的分发。

            <span class="token operator">--</span>quiet<span class="token punctuation">,</span> <span class="token operator">-</span>q
                仅显示分发名称。

            <span class="token operator">--</span>verbose<span class="token punctuation">,</span> <span class="token operator">-</span>v
                显示所有分发的相关详细信息。

            <span class="token operator">--</span>online<span class="token punctuation">,</span> <span class="token operator">-</span>o
                使用 <span class="token string">&#39;wsl.exe --install&#39;</span> 显示可以安装的可用分发列表。
<span class="token function">PS</span> C:\\WINDOWS\\system32&gt; wsl <span class="token operator">-</span>l <span class="token operator">-</span>v
  NAME                   STATE           VERSION   
<span class="token operator">*</span> Ubuntu-20<span class="token punctuation">.</span>04           Running         2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Ubuntu-20.04</code>就是已安装的 Linux 发行版 <code>-d &lt;DistributionName&gt;</code>。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>    <span class="token operator">--</span>distribution<span class="token punctuation">,</span> <span class="token operator">-</span>d &lt;Distro&gt;
        运行指定的分发。
    <span class="token operator">--</span>user<span class="token punctuation">,</span> <span class="token operator">-</span>u &lt;UserName&gt;
        以指定的用户身份运行。
<span class="token function">PS</span> C:\\WINDOWS\\system32&gt; wsl <span class="token operator">-</span>d Ubuntu-20<span class="token punctuation">.</span>04 <span class="token operator">-</span>u root  
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

root@DESKTOP-KSTB1B7:<span class="token operator">/</span>mnt/c/WINDOWS/system32<span class="token comment"># passwd &lt;username&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认用户" tabindex="-1"><a class="header-anchor" href="#默认用户" aria-hidden="true">#</a> 默认用户</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Ubuntu config --default-user lab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token parameter variable">--unregister</span> <span class="token operator">&lt;</span>Distro<span class="token operator">&gt;</span>
        注销分发并删除根文件系统。
$ wsl <span class="token parameter variable">--list</span>
适用于 Linux 的 Windows 子系统分发:
Ubuntu <span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
$ wsl <span class="token parameter variable">--unregister</span> Ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="迁移" tabindex="-1"><a class="header-anchor" href="#迁移" aria-hidden="true">#</a> 迁移</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ wsl <span class="token parameter variable">--shutdown</span>
$ wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>
  NAME              STATE           VERSION
* Ubuntu-22.04      Stopped         <span class="token number">2</span>
  docker-desktop    Stopped         <span class="token number">2</span>
$ wsl <span class="token parameter variable">--export</span> Ubuntu-22.04 <span class="token string">&quot;D:<span class="token entity" title="\\\\">\\\\</span>Ubuntu-22.04.tar&quot;</span>
$ wsl <span class="token parameter variable">--unregister</span> Ubuntu-22.04
$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> D:<span class="token punctuation">\\</span><span class="token punctuation">\\</span>MySoftwareData<span class="token punctuation">\\</span><span class="token punctuation">\\</span>wsl
$ wsl <span class="token parameter variable">--import</span> Ubuntu-22.04 <span class="token string">&quot;D:<span class="token entity" title="\\\\">\\\\</span>MySoftwareData<span class="token entity" title="\\\\">\\\\</span>wsl<span class="token entity" title="\\\\">\\\\</span>ubuntu&quot;</span> <span class="token string">&quot;D:<span class="token entity" title="\\\\">\\\\</span>Ubuntu-22.04.tar&quot;</span> <span class="token parameter variable">--version</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),t=[l];function r(p,d){return n(),a("div",null,t)}const c=s(i,[["render",r],["__file","usage.html.vue"]]);export{c as default};
