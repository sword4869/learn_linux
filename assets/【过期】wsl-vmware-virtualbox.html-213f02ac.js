import{_ as e,W as n,X as s,Y as i}from"./framework-9a5142fa.js";const a={},t=i(`<p>[toc]</p><hr><h1 id="_1-wsl2-docker" tabindex="-1"><a class="header-anchor" href="#_1-wsl2-docker" aria-hidden="true">#</a> 1. WSL2, Docker</h1><p>docker需要wsl，而wsl需要安一个OS，所以其实docker就是在wsl的OS系统上的。</p><ol><li><p>启用huo关闭 Windows 功能</p><p>运行 <code>C:\\Windows\\System32\\OptionalFeatures.exe</code>.</p><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914788.png" alt=""></p><p>勾选 <code>Windows Subsystem for Linux（适用于Linux的Windows子系统）</code> 和 <code>Virtual Machine Platform（虚拟机平台）</code></p><p>（Hyper-V默认已经勾选）</p><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914789.png" alt=""></p></li><li><p>Virtualization enabled in the BIOS</p></li></ol><p>​ <img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231933766.jpg" style="zoom:67%;"></p><ol start="3"><li><p><s>Hypervisor enabled at Windows startup</s></p><p>2024年，WSL 2既可以使用wsl2作为后端，也可以使用Hyper-V 作为后端。也就是说，我们可以不用开启 Hyper-V。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># - Open cmd (not powershell) window as an administrator.</span>

<span class="token comment"># - watch the value of \`hypervisorlaunchtype\`. We need enable it.</span>
bcdedit /enum <span class="token punctuation">{</span>current<span class="token punctuation">}</span>

<span class="token comment"># - enable hypervisor.</span>
bcdedit /set hypervisorlaunchtype auto
<span class="token comment"># - Close the cmd and restart the system.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h1 id="_2-vmware-15-【过期】" tabindex="-1"><a class="header-anchor" href="#_2-vmware-15-【过期】" aria-hidden="true">#</a> 2. VMware 15 【过期】</h1><blockquote><p>!!!!! VMware16不再需要</p></blockquote><ol><li><p>Windows Feature</p><p>Turn Off <code>Hyper-V</code>.</p></li></ol><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914790.png" alt=""> 2. Virtualization enabled in the BIOS</p><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914791.jpg" alt=""> 3. Hypervisor disabled at Windows startup</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># - Open cmd (not powershell) window as an administrator.

# - watch the value of \`hypervisorlaunchtype\`. We need enable it.
bcdedit /enum {current}

# - 【disable】 hypervisor.
bcdedit /set hypervisorlaunchtype off
# - Close the cmd and restart the system.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启Hyper-V后，QEMU、VirtualBox 或 VMWare Workstation 15 及以下版本将无法使用，所以我们就选 VMWare Workstation 16 。</p>`,14),r=[t];function d(l,o){return n(),s("div",null,r)}const p=e(a,[["render",d],["__file","【过期】wsl-vmware-virtualbox.html.vue"]]);export{p as default};
