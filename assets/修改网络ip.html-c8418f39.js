import{_ as n,W as s,X as e,Y as a}from"./framework-9a5142fa.js";const i={},l=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> /etc/netplan
01-network-manager-all.yaml

$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/netplan/01-network-manager-all.yaml
network:
  version: <span class="token number">2</span>
  renderer: networkd
  ethernets:
    enp0s3:  <span class="token comment"># 替换为您的网络接口名称</span>
      dhcp4: no               <span class="token comment"># 关闭 DHCP</span>
      addresses:
        - <span class="token number">192.168</span>.3.50/24		  <span class="token comment"># ip和mask</span>
      routes:
        - to: default
          via: <span class="token number">192.168</span>.3.1		<span class="token comment"># gateway</span>
      nameservers:
        addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.3.1, <span class="token number">8.8</span>.8.8<span class="token punctuation">]</span>	<span class="token comment"># dns</span>

$ <span class="token function">sudo</span> netplan apply
$ <span class="token function">sudo</span> systemctl restart NetworkManager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(d,r){return s(),e("div",null,t)}const p=n(i,[["render",c],["__file","修改网络ip.html.vue"]]);export{p as default};
