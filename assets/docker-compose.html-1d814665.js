import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const i={},c=e(`<p>[toc]</p><h2 id="compose-使用步骤" tabindex="-1"><a class="header-anchor" href="#compose-使用步骤" aria-hidden="true">#</a> Compose 使用步骤</h2><p>定义 <code>docker-compose.yml</code>。 编写构成应用程序的服务，这样它们可以在隔离环境中一起运行。</p><p>最后，执行 docker-compose up 命令来启动并运行整个应用程序。</p><h2 id="docker-compose命令" tabindex="-1"><a class="header-anchor" href="#docker-compose命令" aria-hidden="true">#</a> docker-compose命令</h2><h3 id="docker-compose-yml的意义" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml的意义" aria-hidden="true">#</a> docker-compose.yml的意义</h3><p><code>docker-compose</code> 所执行的命令都是在其中指定的容器，不相干的不操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认当前是docker-compose.yml。</span>
<span class="token function">docker-compose</span> up

<span class="token comment"># 若不使用默认的docker-compose.yml 文件名：</span>
$ <span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> server.yml up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前台后台" tabindex="-1"><a class="header-anchor" href="#前台后台" aria-hidden="true">#</a> 前台后台</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up  <span class="token comment"># 前台模式，直接打印logs，ctrl-c 停止容器并退出。</span>

<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>  <span class="token comment"># 后台模式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="所有容器和指定容器" tabindex="-1"><a class="header-anchor" href="#所有容器和指定容器" aria-hidden="true">#</a> 所有容器和指定容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up   <span class="token comment"># 所有容器</span>

<span class="token function">docker-compose</span> up web   <span class="token comment"># 会启动相关依赖的容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重新build镜像" tabindex="-1"><a class="header-anchor" href="#重新build镜像" aria-hidden="true">#</a> 重新build镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up           <span class="token comment"># 只有第一次构建，之后使用缓存</span>

<span class="token function">docker-compose</span> up <span class="token parameter variable">--build</span>   <span class="token comment"># 强制重新构建镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者 只想重新构建某个服务的镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> build --no-cache <span class="token operator">&lt;</span>service-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="列出" tabindex="-1"><a class="header-anchor" href="#列出" aria-hidden="true">#</a> 列出</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List images used by the created containers</span>
<span class="token function">docker-compose</span> images

<span class="token comment"># List containers</span>
<span class="token function">docker-compose</span> <span class="token function">ps</span>
<span class="token function">docker-compose</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create and start containers。不会重复创建</span>
<span class="token function">docker-compose</span> up

<span class="token comment"># 仅创建</span>
<span class="token function">docker-compose</span> create

<span class="token comment"># 启动已经创建过的</span>
<span class="token function">docker-compose</span> start <span class="token operator">|</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="停止删除" tabindex="-1"><a class="header-anchor" href="#停止删除" aria-hidden="true">#</a> 停止删除</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 暂停 </span>
<span class="token function">docker-compose</span> unpause

<span class="token comment"># 停止 | 强行停止</span>
<span class="token function">docker-compose</span> stop <span class="token operator">|</span> <span class="token function">kill</span>

<span class="token comment"># 删除已停止的</span>
<span class="token function">docker-compose</span> <span class="token function">rm</span>       <span class="token comment"># 只删除已经停止的，还会问你删不删 yes or no</span>
<span class="token function">docker-compose</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>    <span class="token comment"># yes</span>
<span class="token function">docker-compose</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-s</span>   <span class="token comment"># 先都停了，即都删了</span>

<span class="token comment"># Stop and remove containers, networks</span>
<span class="token function">docker-compose</span> down     <span class="token comment"># docker-compose rm -f -s 的加强版，还删了network</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml" aria-hidden="true">#</a> docker-compose.yml</h2><h3 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.2&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token comment"># 使用的镜像名</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql    
    
    <span class="token comment"># 容器名，不指定就默认 mydata-mysql-1，但不指定容器名，也不会重复创建，还是这个默认名的容器。</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql   
    <span class="token comment"># 端口</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>     <span class="token comment"># 字符串可以，不加引号、单引号、双引号</span>

    <span class="token comment"># 环境变量</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>      <span class="token comment"># 键值对形式  </span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>      <span class="token comment"># 列表形式。environment这里要求是单个元素，用等于号变成一整个字符串。</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=123
    
    <span class="token comment"># 挂载</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>        
      <span class="token punctuation">-</span> <span class="token string">&quot;./mysql/conf:/etc/mysql/conf.d&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./mysql/data:/var/lib/mysql&quot;</span>
    <span class="token comment"># 重启</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always 
    <span class="token comment"># 网络</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>   
      <span class="token punctuation">-</span> new
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">new</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> tjxt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> network</h3><p>不写这个，也会创建默认网络。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mydata<span class="token punctuation">]</span><span class="token comment"># docker-compose up -d</span>
<span class="token punctuation">[</span>+<span class="token punctuation">]</span> Running <span class="token number">2</span>/2
 ✔ Network mydata_default    Created                                      <span class="token number">0</span>.2s
 ✔ Container mydata-mysql-1  Started                                      <span class="token number">0</span>.0s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose中定义的网络，在外边使用docker network ls命令并不能找到它们。</p><p>使用已存在的网络(docker network create)</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 未测试</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">default</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>pre<span class="token punctuation">-</span>existing<span class="token punctuation">-</span>network
<span class="token comment"># 未测试</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
 <span class="token key atrule">demo</span><span class="token punctuation">:</span>
  <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="links不知道" tabindex="-1"><a class="header-anchor" href="#links不知道" aria-hidden="true">#</a> links不知道</h3><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231906861.png" alt="alt text"></p><h3 id="使用现成镜像和构建镜像" tabindex="-1"><a class="header-anchor" href="#使用现成镜像和构建镜像" aria-hidden="true">#</a> 使用现成镜像和构建镜像</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># dockerfile构建</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .    <span class="token comment"># 当前上下文  </span>
  <span class="token comment"># 现成镜像      </span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gpu" tabindex="-1"><a class="header-anchor" href="#gpu" aria-hidden="true">#</a> GPU</h3><p>指定与服务的部署和运行有关的配置。只在 swarm 模式下才会有用。</p><p>那么什么是 swarm 模式？</p><ol><li>To enable access only to GPU-0 and GPU-3 devices: <code>device_ids: [&#39;0&#39;, &#39;3&#39;]</code></li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">service</span><span class="token punctuation">:</span>
  <span class="token key atrule">hhhhh</span><span class="token punctuation">:</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
          <span class="token key atrule">devices</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">driver</span><span class="token punctuation">:</span> nvidia
              <span class="token key atrule">device_ids</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">]</span>
              <span class="token key atrule">capabilities</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>gpu<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>count</code> can be used to limit the number of GPU devices assigned to a service container</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">driver</span><span class="token punctuation">:</span> nvidia
  <span class="token key atrule">count</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">capabilities</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>gpu<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>If no count or device_ids are set, <strong>all</strong> GPUs available on the host are going to be used by default.</li></ol>`,43),l=[c];function t(o,p){return s(),a("div",null,l)}const r=n(i,[["render",t],["__file","docker-compose.html.vue"]]);export{r as default};
