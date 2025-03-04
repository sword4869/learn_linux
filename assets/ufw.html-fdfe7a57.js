import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const t={},l=e(`<p>ubuntu提供了ufw这个设定工具，以简化iptables的某些设定，其后台仍然是 iptables。ufw 即uncomplicated firewall的简称，一些复杂的设定还是要去iptables。</p><p><code>sudo apt-get install ufw</code></p><p><code>ufw enable|disable|status|version|</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ufw version
ufw <span class="token number">0.36</span>.1
Copyright <span class="token number">2008</span>-2021 Canonical Ltd.

<span class="token comment"># 列出是否开启服务、已开放的端口</span>
$ <span class="token function">sudo</span> ufw status		
Status: inactive

<span class="token comment"># (1) 开启了防火墙，并在系统启动时自动开启</span>
$ <span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
Firewall is active and enabled on system startup

<span class="token comment"># (2) 关闭所有外部对本机的访问，但本机访问外部正常。</span>
$ <span class="token function">sudo</span> ufw default deny
Default incoming policy changed to <span class="token string">&#39;deny&#39;</span>
<span class="token punctuation">(</span>be sure to update your rules accordingly<span class="token punctuation">)</span>

<span class="token comment"># (3) 开放某些服务</span>
ufw allow <span class="token number">53</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>sudo ufw allow | deny [service]</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token number">53</span> 						允许外部访问53端口<span class="token punctuation">(</span>tcp/udp<span class="token punctuation">)</span>
<span class="token function">sudo</span> ufw allow <span class="token number">22</span>/tcp 	 				允许所有的外部IP访问本机的22/tcp <span class="token punctuation">(</span>ssh<span class="token punctuation">)</span>端口
<span class="token function">sudo</span> ufw allow <span class="token number">8000</span>:8100/tcp		    允许tcp和udp上的端口从8000到8100
<span class="token function">sudo</span> ufw allow smtp						允许所有的外部IP访问本机的25/tcp <span class="token punctuation">(</span>smtp<span class="token punctuation">)</span>端口
<span class="token function">sudo</span> ufw allow from <span class="token number">192.168</span>.1.100 		允许此IP访问所有的本机端口
<span class="token function">sudo</span> ufw allow proto tcp from <span class="token number">10.0</span>.1.0/10 to <span class="token number">127.0</span>.0.1 port <span class="token number">25</span> 				允许自10.0.1.0/10的tcp封包访问本机的25端口。
<span class="token function">sudo</span> ufw allow proto udp from <span class="token number">192.168</span>.0.1 port <span class="token number">53</span> to <span class="token number">192.168</span>.0.2 port <span class="token number">53</span>	允许自192.168.0.1的53端口的udp封包访问192.168.0.2的53端口。
	
<span class="token function">sudo</span> ufw deny smtp 禁止外部访问smtp服务

<span class="token function">sudo</span> ufw delete allow smtp 删除上面建立的某条规则
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加了一些规则后</span>
$ <span class="token function">sudo</span> ufw status		
Status: active

To                         Action      From
--                         ------      ----
<span class="token number">127.0</span>.0.1 <span class="token number">25</span>/tcp           ALLOW       <span class="token number">10.0</span>.0.0/10
<span class="token number">192.168</span>.0.2 <span class="token number">53</span>/udp         ALLOW       <span class="token number">192.168</span>.0.1 <span class="token number">53</span>/udp
<span class="token number">22</span>/tcp                     ALLOW       Anywhere
<span class="token number">22</span>/tcp <span class="token punctuation">(</span>v6<span class="token punctuation">)</span>                ALLOW       Anywhere <span class="token punctuation">(</span>v6<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[l];function c(u,p){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","ufw.html.vue"]]);export{d as default};
