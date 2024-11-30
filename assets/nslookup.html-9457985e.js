import{_ as n,W as s,X as e,Y as a}from"./framework-9a5142fa.js";const i={},l=a(`<p>用来查询 <strong>DNS 服务器</strong>解析结果的工具，能够返回 <strong>IP 地址和域名的对应关系</strong></p><p>（1）查询域名对应的 IP 地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nslookup</span> www.example.com
服务器:  public1.114dns.com
Address:  <span class="token number">114.114</span>.114.114

非权威应答:
名称:    www.example.com
Addresses:  <span class="token number">2606</span>:2800:21f:cb07:6820:80da:af6b:8b2c
          <span class="token number">93.184</span>.215.14
          

<span class="token comment"># 查询特定 DNS 服务器的解析</span>
$ <span class="token function">nslookup</span> www.example.com <span class="token number">8.8</span>.8.8
服务器:  dns.google
Address:  <span class="token number">8.8</span>.8.8

非权威应答:
名称:    www.example.com
Addresses:  <span class="token number">2606</span>:2800:21f:cb07:6820:80da:af6b:8b2c
          <span class="token number">93.184</span>.215.14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）反向查询 IP 对应的域名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nslookup</span> <span class="token number">114.114</span>.114.114
服务器:  public1.114dns.com
Address:  <span class="token number">114.114</span>.114.114

名称:    public1.114dns.com
Address:  <span class="token number">114.114</span>.114.114
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[l];function c(r,o){return s(),e("div",null,d)}const m=n(i,[["render",c],["__file","nslookup.html.vue"]]);export{m as default};
