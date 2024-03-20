import{_ as t,W as d,X as u,Y as n,a0 as s,a1 as o,Z as e,$ as i,E as a}from"./framework-586fce15.js";const c={},p=n("hr",null,null,-1),v=n("h2",{id:"part-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#part-1","aria-hidden":"true"},"#"),e(" part 1")],-1),b=n("h2",{id:"part-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#part-2","aria-hidden":"true"},"#"),e(" part 2")],-1),m=i(`<li><p>wsl2</p><p>更改新分发的默认安装版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    --set-default-version <span class="token operator">&lt;</span>Version<span class="token operator">&gt;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),_=i(`<p>WslRegisterDistribution failed with error: 0x800701bc</p><p>cmd(Adminitrator)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token parameter variable">--update</span>
     更新适用于 Linux 的 Windows 子系统程序包。

     选项:
         --web-download
             从 Internet 而不是 Microsoft Store 下载更新。

         --pre-release
             如果可用，则下载预发布版本。表示使用 --web-download.
$ wsl –-update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h={href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,[n("p",null,[e("这时候还没弄好，点子系统相关应用进去(windows-terminal 或者 适用于windows的linux子系统)告诉你没安装。其实是ubuntu没有配置用户名和密码。 点"),n("code",null,"ubuntu应用"),e("，配置完用户名和密码后，就好了。")])],-1);function w(S,k){const l=a("RouterLink"),r=a("ExternalLinkIcon");return d(),u("div",null,[p,v,n("p",null,[s(l,{to:"/advance/wsl2/wsl-vmware-virtualbox.html"},{default:o(()=>[e("WSL2, Docker")]),_:1})]),b,n("ol",null,[m,n("li",null,[_,n("p",null,[e("或者"),n("a",h,[e("https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi"),s(r)])])]),x])])}const g=t(c,[["render",w],["__file","setup.html.vue"]]);export{g as default};
