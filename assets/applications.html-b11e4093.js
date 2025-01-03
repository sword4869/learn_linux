import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const i={},l=e(`<ul><li>metasploit</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ～
pkg <span class="token function">install</span> <span class="token function">wget</span>
<span class="token function">wget</span> https://Auxilus.github.io/metasploit.sh
<span class="token function">bash</span> metasploit.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>nmap</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> nmap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>hydra</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> hydra
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>sslscan</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> sslscan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>whatportis</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip2 <span class="token function">install</span> whatportis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>sqlmap</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/sqlmapproject/sqlmap.git
<span class="token builtin class-name">cd</span> sqlmap
python2 sqlmap.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>routersploit</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip2 <span class="token function">install</span> requests
<span class="token function">git</span> clone https://github.com/reverse-shell/routersploit
<span class="token builtin class-name">cd</span> routersploit
python2 rsf.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>slowloris</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/gkbrk/slowloris.git
<span class="token builtin class-name">cd</span> slowloris
<span class="token function">chmod</span> +x slowloris.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>red_hawk</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> php
<span class="token function">git</span> clone https://github.com/Tuhinshubhra/RED_HAWK.git
<span class="token builtin class-name">cd</span> RED_HAWK
php rhawk.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>cupp</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/Mebus/cupp.git
<span class="token builtin class-name">cd</span> cupp
python2 cupp.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>hash-buster</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/UltimateHackers/Hash-Buster.git
<span class="token builtin class-name">cd</span> Hash-Buster
python2 hash.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>d-tect</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/shawarkhanethicalhacker/D-TECT.git
<span class="token builtin class-name">cd</span> D-TECT
python2 d-tect.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>wpseku</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/m4ll0k/WPSeku.git
<span class="token builtin class-name">cd</span> WPSeku
pip3 <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
python3 wpseku.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>xsstrike</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/UltimateHackers/XSStrike.git
<span class="token builtin class-name">cd</span> XSStrike
pip2 <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
python2 xsstrike
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),d=[l];function t(c,u){return n(),a("div",null,d)}const p=s(i,[["render",t],["__file","applications.html.vue"]]);export{p as default};
