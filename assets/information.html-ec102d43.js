import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<h2 id="usename" tabindex="-1"><a class="header-anchor" href="#usename" aria-hidden="true">#</a> usename</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">whoami</span>
user1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内核版本" tabindex="-1"><a class="header-anchor" href="#内核版本" aria-hidden="true">#</a> 内核版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">uname</span> 
Linux

$ <span class="token function">uname</span> <span class="token parameter variable">-r</span>
<span class="token number">5.15</span>.0-48-generic

$ <span class="token function">uname</span> <span class="token parameter variable">-n</span>
LAPTOP-KB4DNMO0

$ <span class="token function">uname</span> <span class="token parameter variable">-a</span>
Linux LAPTOP-KB4DNMO0 <span class="token number">5.15</span>.167.4-microsoft-standard-WSL2 <span class="token comment">#1 SMP Tue Nov 5 00:21:55 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/os-release 
<span class="token assign-left variable">PRETTY_NAME</span><span class="token operator">=</span><span class="token string">&quot;Ubuntu 22.04.3 LTS&quot;</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;Ubuntu&quot;</span>
<span class="token assign-left variable">VERSION_ID</span><span class="token operator">=</span><span class="token string">&quot;22.04&quot;</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token string">&quot;22.04.3 LTS (Jammy Jellyfish)&quot;</span>
<span class="token assign-left variable">VERSION_CODENAME</span><span class="token operator">=</span>jammy
<span class="token assign-left variable">ID</span><span class="token operator">=</span>ubuntu
<span class="token assign-left variable">ID_LIKE</span><span class="token operator">=</span>debian
<span class="token assign-left variable">HOME_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.ubuntu.com/&quot;</span>
<span class="token assign-left variable">SUPPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://help.ubuntu.com/&quot;</span>
<span class="token assign-left variable">BUG_REPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://bugs.launchpad.net/ubuntu/&quot;</span>
<span class="token assign-left variable">PRIVACY_POLICY_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.ubuntu.com/legal/terms-and-policies/privacy-policy&quot;</span>
<span class="token assign-left variable">UBUNTU_CODENAME</span><span class="token operator">=</span>jammy

$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> $ID $VERSION_ID<span class="token variable">)</span></span>
ubuntu <span class="token number">22.04</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cat /etc/hostname</span>
$ <span class="token function">hostname</span>
DESKTOP-KSTB1B7

<span class="token comment"># 永久修改</span>
$ <span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;PermanentHostname&quot;</span> <span class="token operator">&gt;</span> /etc/hostname

<span class="token comment"># 临时修改</span>
$ <span class="token function">sudo</span> <span class="token function">hostname</span> <span class="token string">&quot;TemporaryHostname&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu" aria-hidden="true">#</a> cpu</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示CPU信息</span>
$ <span class="token function">cat</span> /proc/cpuinfo
processor       <span class="token builtin class-name">:</span> <span class="token number">0</span>
vendor_id       <span class="token builtin class-name">:</span> AuthenticAMD
cpu family      <span class="token builtin class-name">:</span> <span class="token number">23</span>
model           <span class="token builtin class-name">:</span> <span class="token number">17</span>
model name      <span class="token builtin class-name">:</span> AMD Ryzen <span class="token number">5</span> 2500U with Radeon Vega Mobile Gfx
stepping        <span class="token builtin class-name">:</span> <span class="token number">0</span>
microcode       <span class="token builtin class-name">:</span> 0xffffffff
cpu MHz         <span class="token builtin class-name">:</span> <span class="token number">1996.177</span>
cache size      <span class="token builtin class-name">:</span> <span class="token number">512</span> KB
physical <span class="token function">id</span>     <span class="token builtin class-name">:</span> <span class="token number">0</span>
siblings        <span class="token builtin class-name">:</span> <span class="token number">8</span>
core <span class="token function">id</span>         <span class="token builtin class-name">:</span> <span class="token number">0</span>
cpu cores       <span class="token builtin class-name">:</span> <span class="token number">4</span>
apicid          <span class="token builtin class-name">:</span> <span class="token number">0</span>
initial apicid  <span class="token builtin class-name">:</span> <span class="token number">0</span>
fpu             <span class="token builtin class-name">:</span> <span class="token function">yes</span>
fpu_exception   <span class="token builtin class-name">:</span> <span class="token function">yes</span>
cpuid level     <span class="token builtin class-name">:</span> <span class="token number">13</span>
wp              <span class="token builtin class-name">:</span> <span class="token function">yes</span>
flags           <span class="token builtin class-name">:</span> fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid 
extd_apicid pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext 
ssbd ibpb vmmcall fsgsbase bmi1 avx2 smep bmi2 rdseed adx smap clflushopt sha_ni xsaveopt xsavec xgetbv1 xsaves xsaveerptr virt_ssbd arat
bugs            <span class="token builtin class-name">:</span> sysret_ss_attrs null_seg spectre_v1 spectre_v2 spec_store_bypass
bogomips        <span class="token builtin class-name">:</span> <span class="token number">3992.35</span>
TLB size        <span class="token builtin class-name">:</span> <span class="token number">2560</span> 4K pages
clflush size    <span class="token builtin class-name">:</span> <span class="token number">64</span>
cache_alignment <span class="token builtin class-name">:</span> <span class="token number">64</span>
address sizes   <span class="token builtin class-name">:</span> <span class="token number">48</span> bits physical, <span class="token number">48</span> bits virtual
power management:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代替上述，显示更全的信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># apt install neofetch</span>
$ neofetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[l];function t(p,o){return n(),a("div",null,c)}const r=s(i,[["render",t],["__file","information.html.vue"]]);export{r as default};
