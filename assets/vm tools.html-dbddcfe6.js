import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<h2 id="快捷" tabindex="-1"><a class="header-anchor" href="#快捷" aria-hidden="true">#</a> 快捷</h2><p>高级的linux支持快速安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> autoremove open-vm-tools  //卸载
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> open-vm-tools-desktop  //安装
<span class="token function">sudo</span> <span class="token function">reboot</span>  //重启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动vmware-tools" tabindex="-1"><a class="header-anchor" href="#手动vmware-tools" aria-hidden="true">#</a> 手动vmware tools</h2><p>centos7</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 挂载vmware tools光驱</span>
$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mnt/cdrom
$ <span class="token function">mount</span> /dev/cdrom /mnt/cdrom/
mount: /dev/sr0 is write-protected, mounting read-only			【这是正常的，只是告诉cdrom是只读的光驱】

<span class="token comment"># 因为只读，拷贝出来</span>
$ <span class="token builtin class-name">cd</span> /mnt/cdrom
$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/tmp
$ <span class="token function">cp</span> VMwareTools-10.3.23-16594550.tar.gz ~/tmp
$ <span class="token builtin class-name">cd</span> ~/tmp
$ <span class="token function">tar</span> xf VMwareTools-10.3.23-16594550.tar.gz
$ <span class="token builtin class-name">cd</span> vmware-tools-distrib/
<span class="token comment"># -f : 强制安装</span>
<span class="token comment"># -d : 自动回答问题与建议的答案。</span>
$ <span class="token function">sudo</span> ./vmware-install.pl <span class="token parameter variable">-f</span> <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> ./vmware-install.pl <span class="token parameter variable">-f</span> <span class="token parameter variable">-d</span>
-bash: ./vmware-install.pl: /usr/bin/perl: bad interpreter: No such <span class="token function">file</span> or directory
$ yum <span class="token parameter variable">-y</span> <span class="token function">install</span> perl
$ yum <span class="token function">install</span> yum-utils 
$ yum update
$ yum <span class="token function">install</span> policycoreutils-python 
$ <span class="token function">sudo</span> ./vmware-install.pl <span class="token parameter variable">-f</span> <span class="token parameter variable">-d</span>

The configuration of VMware Tools <span class="token number">10.3</span>.23 build-16594550 <span class="token keyword">for</span> Linux <span class="token keyword">for</span> this
running kernel completed successfully.								【安装成功了】

VMware Tools installed on <span class="token function">top</span> of open-vm-tools has not added anything of
significance or potential benefit.  VMware Tools is not needed.			【因为之前已经安装了 open-vm-tools】

The removal of VMware Tools <span class="token number">10.3</span>.23 build-16594550 <span class="token keyword">for</span> Linux completed
successfully.  Thank you <span class="token keyword">for</span> having tried this software.			【又给我卸载了】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function o(c,r){return s(),a("div",null,t)}const p=n(i,[["render",o],["__file","vm tools.html.vue"]]);export{p as default};
