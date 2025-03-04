import{_ as e,W as i,X as a,Y as n}from"./framework-9a5142fa.js";const t={},r=n(`<p>[toc]</p><h1 id="vmware-15-冲突【过期】" tabindex="-1"><a class="header-anchor" href="#vmware-15-冲突【过期】" aria-hidden="true">#</a> VMware 15 冲突【过期】</h1><blockquote><p>!!!!! VMware16不再需要</p></blockquote><ol><li><p>Windows Feature</p><p>Turn Off <code>Hyper-V</code>.</p></li></ol><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914790.png" alt=""> 2. Virtualization enabled in the BIOS</p><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914791.jpg" alt=""> 3. Hypervisor disabled at Windows startup</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># - Open cmd (not powershell) window as an administrator.

# - watch the value of \`hypervisorlaunchtype\`. We need enable it.
bcdedit /enum {current}

# - 【disable】 hypervisor.
bcdedit /set hypervisorlaunchtype off
# - Close the cmd and restart the system.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启Hyper-V后，QEMU、VirtualBox 或 VMWare Workstation 15 及以下版本将无法使用，所以我们就选 VMWare Workstation 16 。</p>`,8),s=[r];function d(l,o){return i(),a("div",null,s)}const p=e(t,[["render",d],["__file","【过期】wsl-vmware-virtualbox.html.vue"]]);export{p as default};
