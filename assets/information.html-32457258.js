import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<p>see which user you&#39;re logged in, and what the hostname of device.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">whoami</span>
user1

$ <span class="token function">hostname</span>
DESKTOP-KSTB1B7

<span class="token comment"># 内核版本</span>
$ <span class="token function">uname</span> <span class="token parameter variable">-r</span>
<span class="token number">5.15</span>.0-48-generic

$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> $ID $VERSION_ID<span class="token variable">)</span></span>
ubuntu <span class="token number">22.04</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 永久修改</span>
$ <span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;PermanentHostname&quot;</span> <span class="token operator">&gt;</span> /etc/hostname

<span class="token comment"># 临时修改</span>
$ <span class="token function">sudo</span> <span class="token function">hostname</span> <span class="token string">&quot;TemporaryHostname&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示CPU信息</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/os-release 
<span class="token assign-left variable">PRETTY_NAME</span><span class="token operator">=</span><span class="token string">&quot;Kali GNU/Linux Rolling&quot;</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;Kali GNU/Linux&quot;</span>
<span class="token assign-left variable">ID</span><span class="token operator">=</span>kali
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token string">&quot;2022.2&quot;</span>
<span class="token assign-left variable">VERSION_ID</span><span class="token operator">=</span><span class="token string">&quot;2022.2&quot;</span>
<span class="token assign-left variable">VERSION_CODENAME</span><span class="token operator">=</span><span class="token string">&quot;kali-rolling&quot;</span>
<span class="token assign-left variable">ID_LIKE</span><span class="token operator">=</span>debian
<span class="token assign-left variable">ANSI_COLOR</span><span class="token operator">=</span><span class="token string">&quot;1;31&quot;</span>
<span class="token assign-left variable">HOME_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.kali.org/&quot;</span>
<span class="token assign-left variable">SUPPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://forums.kali.org/&quot;</span>
<span class="token assign-left variable">BUG_REPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://bugs.kali.org/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代替上述，显示更全的信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># apt install neofetch</span>
$ neofetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[l];function t(p,o){return n(),a("div",null,c)}const d=s(i,[["render",t],["__file","information.html.vue"]]);export{d as default};
