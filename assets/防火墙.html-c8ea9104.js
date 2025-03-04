import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const l={},i=e(`<p><code>firewalld</code></p><p><code>systemctl status|enable|disable|start|stop|restart firewalld</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl status firewalld
● firewalld.service - firewalld - dynamic firewall daemon
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/firewalld.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
   Active: inactive <span class="token punctuation">(</span>dead<span class="token punctuation">)</span>
     Docs: man:firewalld<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://www.cnblogs.com/zhoulujun/p/12099874.html</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 永久关闭指定端口: </span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-port<span class="token operator">=</span><span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 永久开放指定端口：</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 必须重启防火墙才生效</span>
<span class="token comment"># 或 systemctl restart firewalld</span>
firewall-cmd <span class="token parameter variable">--reload</span>


<span class="token comment"># 查看所有开放端口：</span>
$ firewall-cmd --list-all
public <span class="token punctuation">(</span>active<span class="token punctuation">)</span>
  target: default
  icmp-block-inversion: no
  interfaces: ens33
  sources:
  services: dhcpv6-client <span class="token function">ssh</span>
  ports: <span class="token number">8080</span>/tcp <span class="token number">1180</span>/tcp				<span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> 这里展示开放的端口
  protocols:
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:

<span class="token comment"># 查看某个端口是否开放: </span>
$ firewall-cmd --query-port<span class="token operator">=</span><span class="token number">8080</span>/tcp
<span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[i];function c(r,p){return s(),a("div",null,t)}const o=n(l,[["render",c],["__file","防火墙.html.vue"]]);export{o as default};
