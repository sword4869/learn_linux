import{_ as e,W as n,X as s,Y as a}from"./framework-9a5142fa.js";const i={},d=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vim /etc/netplan/01-network-manager-all.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:  # 替换为您的网络接口名称
      dhcp4: no
      addresses:
        - 192.168.3.50/24		# ip和mask
      routes:
        - to: default
          via: 192.168.3.1		# gateway
      nameservers:
        addresses: [223.6.6.6, 8.8.8.8]	# dns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> netplan apply
<span class="token function">sudo</span> <span class="token function">service</span> NetworkManager restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function t(r,c){return n(),s("div",null,l)}const o=e(i,[["render",t],["__file","修改网络ip.html.vue"]]);export{o as default};
