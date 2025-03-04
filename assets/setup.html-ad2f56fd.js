import{_ as t,W as d,X as u,Z as e,a0 as i,a1 as c,$ as n,Y as s,E as a}from"./framework-9a5142fa.js";const o={},p=s(`<p>[toc]</p><h2 id="part-1" tabindex="-1"><a class="header-anchor" href="#part-1" aria-hidden="true">#</a> part 1</h2><p>1、点击“启用或关闭 Windows 功能”，或直接运行 <code>C:\\Windows\\System32\\OptionalFeatures.exe</code>，勾选</p><ul><li><code>Windows Subsystem for Linux（适用于Linux的Windows子系统）</code></li><li>\`\`Virtual Machine Platform（虚拟机平台）\`</li><li><code>Hyper-V</code></li></ul><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914789.png" alt=""></p><p>2、确保BIOS的Virtualization已开启</p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231933766.jpg" style="zoom:67%;"><p>3、Hypervisor enabled at Windows startup</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请启用“虚拟机平台”可选组件，并确保在 BIOS 中启用虚拟化。
通过运行以下命令启用“虚拟机平台”: wsl.exe --install --no-distribution
有关信息，请访问 https://aka.ms/enablevirtualization
错误代码: Wsl/Service/CreateInstance/CreateVm/HCS/HCS_E_HYPERV_NOT_INSTALLED		【就是Hyper-V没安装】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># - Open cmd (not powershell) window as an administrator.</span>

<span class="token comment"># - watch the value of \`hypervisorlaunchtype\`. We need enable it.</span>
bcdedit /enum <span class="token punctuation">{</span>current<span class="token punctuation">}</span>

<span class="token comment"># - enable hypervisor.</span>
bcdedit /set hypervisorlaunchtype auto
<span class="token comment"># - Close the cmd and restart the system.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、修复端口问题</p>`,11),v=e("h2",{id:"part-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#part-2","aria-hidden":"true"},"#"),n(" part 2")],-1),m=s(`<li><p>wsl2</p><p>更改新分发的默认安装版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    --set-default-version <span class="token operator">&lt;</span>Version<span class="token operator">&gt;</span>
    更改新分发的默认安装版本。
$ wsl --set-default-version <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装一个 Linux 发行版</p><p>打开 Microsoft Store 应用，搜索 “Ubuntu”</p><p>或者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ wsl <span class="token parameter variable">--list</span> <span class="token parameter variable">--online</span>
以下是可安装的有效分发的列表。
使用 <span class="token string">&#39;wsl.exe --install &lt;Distro&gt;&#39;</span> 安装。

NAME                                   FRIENDLY NAME
Ubuntu                                 Ubuntu
Debian                                 Debian GNU/Linux
kali-linux                             Kali Linux Rolling
Ubuntu-18.04                           Ubuntu <span class="token number">18.04</span> LTS
Ubuntu-20.04                           Ubuntu <span class="token number">20.04</span> LTS
Ubuntu-22.04                           Ubuntu <span class="token number">22.04</span> LTS
OracleLinux_7_9                        Oracle Linux <span class="token number">7.9</span>
OracleLinux_8_7                        Oracle Linux <span class="token number">8.7</span>
OracleLinux_9_1                        Oracle Linux <span class="token number">9.1</span>
openSUSE-Leap-15.5                     openSUSE Leap <span class="token number">15.5</span>
SUSE-Linux-Enterprise-Server-15-SP4    SUSE Linux Enterprise Server <span class="token number">15</span> SP4
SUSE-Linux-Enterprise-15-SP5           SUSE Linux Enterprise <span class="token number">15</span> SP5
openSUSE-Tumbleweed                    openSUSE Tumbleweed 

$ wsl <span class="token parameter variable">--install</span> Ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),b=s(`<p>WslRegisterDistribution failed with error: 0x800701bc</p><p>cmd(Adminitrator)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token parameter variable">--update</span>
     更新适用于 Linux 的 Windows 子系统程序包。

     选项:
         --web-download
             从 Internet 而不是 Microsoft Store 下载更新。

         --pre-release
             如果可用，则下载预发布版本。表示使用 --web-download.
$ wsl –-update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h={href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,[e("p",null,[n("这时候还没弄好，点子系统相关应用进去(windows-terminal 或者 适用于windows的linux子系统)告诉你没安装。其实是ubuntu没有配置用户名和密码。 点"),e("code",null,"ubuntu应用"),n("，配置完用户名和密码后，就好了。")])],-1);function w(x,g){const l=a("RouterLink"),r=a("ExternalLinkIcon");return d(),u("div",null,[p,e("p",null,[i(l,{to:"/system/wsl2/..%5Cwin10%5C%E7%AB%AF%E5%8F%A3%E8%A2%ABhyper-v%E5%8D%A0%E7%94%A8.html"},{default:c(()=>[n("端口被hyper-v占用.md")]),_:1})]),v,e("ol",null,[m,e("li",null,[b,e("p",null,[n("或者 "),e("a",h,[n("https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi"),i(r)])])]),_])])}const k=t(o,[["render",w],["__file","setup.html.vue"]]);export{k as default};
