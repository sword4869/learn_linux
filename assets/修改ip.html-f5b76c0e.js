import{_ as n,W as s,X as e,Y as a}from"./framework-9a5142fa.js";const i={},t=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/network/interfaces
auto lo
iface lo inet loopback
iface eth0 inet static
address <span class="token number">192.168</span>.150.10
netmask <span class="token number">255.255</span>.255.0
gateway <span class="token number">192.168</span>.150.2
auto eth0

<span class="token comment"># 关闭NetworkManager服务,该服务是网络服务的图形管理工具,该服务会自动接管networking服务,有可能造成重启networking服务时配置不生效的问题</span>
$ <span class="token function">sudo</span> systemctl stop NetworkManager
$ <span class="token function">sudo</span> systemctl disable NetworkManager
$ <span class="token function">sudo</span> systemctl restart networking
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[t];function l(o,d){return s(),e("div",null,c)}const u=n(i,[["render",l],["__file","修改ip.html.vue"]]);export{u as default};
