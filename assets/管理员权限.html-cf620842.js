import{_ as e,W as i,X as n,Y as a}from"./framework-9a5142fa.js";const s={},t=a(`<h1 id="获取" tabindex="-1"><a class="header-anchor" href="#获取" aria-hidden="true">#</a> 获取</h1><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
%1 mshta vbscript:CreateObject(&quot;Shell.Application&quot;).ShellExecute(&quot;cmd.exe&quot;,&quot;/c %~s0 ::&quot;,&quot;&quot;,&quot;runas&quot;,1)(window.close)&amp;&amp;exit
cd /d &quot;%~dp0&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建vbscript来触发uac提示" tabindex="-1"><a class="header-anchor" href="#创建vbscript来触发uac提示" aria-hidden="true">#</a> 创建VBScript来触发UAC提示</h2><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
set &quot;vbs=%temp%\\getadmin.vbs&quot;
echo Set UAC = CreateObject^(&quot;Shell.Application&quot;^) &gt; &quot;%vbs%&quot;
echo UAC.ShellExecute &quot;%~s0&quot;, &quot;&quot;, &quot;&quot;, &quot;runas&quot;, 1 &gt;&gt; &quot;%vbs%&quot;
&quot;%temp%\\getadmin.vbs&quot;
del &quot;%vbs%&quot;
exit /b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="检查并获取" tabindex="-1"><a class="header-anchor" href="#检查并获取" aria-hidden="true">#</a> 检查并获取</h1><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
:: 检查是否已经以管理员权限运行
net session &gt;nul 2&gt;&amp;1
if %errorlevel% == 0 (
    goto :admin
) else (
    echo * Requesting administrator privileges...
)

%1 mshta vbscript:CreateObject(&quot;Shell.Application&quot;).ShellExecute(&quot;cmd.exe&quot;,&quot;/c %~s0 ::&quot;,&quot;&quot;,&quot;runas&quot;,1)(window.close)&amp;&amp;exit
cd /d &quot;%~dp0&quot;

:admin
:: 以管理员权限执行的命令放在这里
echo * Administrator privileges have been obtained
netsh interface show interface
netsh interface set interface &quot;以太网&quot; admin=disabled
netsh interface show interface
pause
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[t];function l(u,c){return i(),n("div",null,d)}const o=e(s,[["render",l],["__file","管理员权限.html.vue"]]);export{o as default};
