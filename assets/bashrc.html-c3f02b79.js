import{_ as e,W as a,X as n,Y as s}from"./framework-9a5142fa.js";const i={},t=s(`<h2 id="wsl" tabindex="-1"><a class="header-anchor" href="#wsl" aria-hidden="true">#</a> wsl</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># clash proxy
# export http_proxy=http://172.23.208.1:7890
# export https_proxy=https://172.23.208.1:7890
alias proxyon=&quot;export http_proxy=http://172.23.208.1:7890 &amp;&amp; export https_proxy=https://172.23.208.1:7890&quot; 
alias proxyoff=&quot;unset http_proxy &amp;&amp; unset https_proxy&quot;
alias proxytest=&quot;curl -vv http://google.com &amp;&amp; curl -vv https://google.com&quot;

# pack a conda environment
alias conda_pack_env=&#39;conda env list &amp;&amp; read -p &quot;[+] please input:&quot; env &amp;&amp; ls &amp;&amp; read -p &quot;[+] check if $env.tar.gz already exists: tap any for continue&quot; ans &amp;&amp; conda activate $env &amp;&amp; conda env list &amp;&amp; conda install conda-pack -y &amp;&amp; conda pack -n $env --ignore-missing-files&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# list all running jobs
alias sq=&#39;squeue -u \`whoami\`&#39;

# salloc A40 GPU with specific numbers
alias sa=&#39;echo &quot;how many gpus&quot; &amp;&amp; read num &amp;&amp; salloc -p A40 -N1 -n6 --gres=gpu:$num -t 48:00:00&#39;

# activate conda environment
alias en=&#39;ls ~/envs &amp;&amp; echo &quot;please input:&quot; &amp;&amp; read env &amp;&amp; source ~/envs/$env/bin/activate&#39;

# unpack a conda environment
# 因为会报错 \`tar: Exiting with failure status due to previous errors\`，所以分成前后两条命令
alias conda_unpack_env1=&#39;echo &quot;[+] check if ~/envs/xxx already exists&quot; &amp;&amp; ls ~/envs &amp;&amp; echo &quot;[+] ls&quot; &amp;&amp; ls &amp;&amp; read -p &quot;please input the env name:&quot; env &amp;&amp; mkdir -p ~/envs/$env &amp;&amp; tar -xvf $env.tar.gz -C ~/envs/$env&#39;
alias conda_unpack_env2=&#39;read -p &quot;please input the env name:&quot; env &amp;&amp; mv $env.tar.gz ~/envs/$env &amp;&amp; echo &quot;[+] ls ~/envs&quot; &amp;&amp; ls ~/envs &amp;&amp; source  ~/envs/$env/bin/activate&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function p(r,d){return a(),n("div",null,l)}const o=e(i,[["render",p],["__file","bashrc.html.vue"]]);export{o as default};
