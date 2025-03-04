import{_ as e,W as a,X as i,Y as r}from"./framework-9a5142fa.js";const n={},d=r(`<p>[toc]</p><h1 id="图形化" tabindex="-1"><a class="header-anchor" href="#图形化" aria-hidden="true">#</a> 图形化</h1><ol><li>按下<code>Win + R</code>组合键打开运行窗口。</li><li>输入<code>regedit</code>并按下<code>Enter</code>打开注册表编辑器。</li><li>在注册表编辑器中，导航至<code>HKEY_CLASSES_ROOT\\Directory\\shell</code>路径，即可查看系统中已定义的Shell Commands。</li></ol><h1 id="reg文件" tabindex="-1"><a class="header-anchor" href="#reg文件" aria-hidden="true">#</a> reg文件</h1><h2 id="点击文件" tabindex="-1"><a class="header-anchor" href="#点击文件" aria-hidden="true">#</a> 点击文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\\*\\shell\\Typora]
@=&quot;Open with Typora&quot;
&quot;Icon&quot;=&quot;C:\\\\Users\\\\lab\\\\AppData\\\\Local\\\\Programs\\\\Typora\\\\Typora.exe&quot;

[HKEY_CLASSES_ROOT\\*\\shell\\Typora\\command]
@=&quot;\\&quot;C:\\\\Users\\\\lab\\\\AppData\\\\Local\\\\Programs\\\\Typora\\\\Typora.exe\\&quot; \\&quot;%1\\&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="点击文件夹空白" tabindex="-1"><a class="header-anchor" href="#点击文件夹空白" aria-hidden="true">#</a> 点击文件夹空白</h2><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406101826817.png" alt="image-20240610182657788"></p><p>失败，typora 打开是空白。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\Typora]
@=&quot;Open with Typora&quot;
&quot;Icon&quot;=&quot;C:\\\\Users\\\\lab\\\\AppData\\\\Local\\\\Programs\\\\Typora\\\\Typora.exe&quot;

[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\Typora\\command]
@=&quot;\\&quot;C:\\\\Users\\\\lab\\\\AppData\\\\Local\\\\Programs\\\\Typora\\\\Typora.exe\\&quot; \\&quot;%V\\&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="点击文件夹" tabindex="-1"><a class="header-anchor" href="#点击文件夹" aria-hidden="true">#</a> 点击文件夹</h2><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406101820071.png" alt="image-20240610182053041"></p><p>这两个经过测试都行，前者比较常用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\\Directory\\shell\\Typora]
@=&quot;Open with Typora&quot;
&quot;Icon&quot;=&quot;C:\\\\Users\\\\lab\\\\AppData\\\\Local\\\\Programs\\\\Typora\\\\Typora.exe&quot;

[HKEY_CLASSES_ROOT\\Directory\\shell\\Typora\\command]
@=&quot;\\&quot;C:\\\\Users\\\\lab\\\\AppData\\\\Local\\\\Programs\\\\Typora\\\\Typora.exe\\&quot; \\&quot;%V\\&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Windows Registry Editor Version 5.00
 
[HKEY_CLASSES_ROOT\\Folder\\shell\\Typora]
&quot;icon&quot;=&quot;C:\\\\Users\\\\lab\\\\AppData\\\\Local\\\\Programs\\\\Typora\\\\Typora.exe&quot;
@=&quot;Open With Typora&quot;
 
[HKEY_CLASSES_ROOT\\Folder\\shell\\Typora\\command]
@=&quot;\\&quot;C:\\\\Users\\\\lab\\\\AppData\\\\Local\\\\Programs\\\\Typora\\\\Typora.exe\\&quot; \\&quot;%1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注册表" tabindex="-1"><a class="header-anchor" href="#注册表" aria-hidden="true">#</a> 注册表</h2><p>执行：</p><p>​ 新建一个名为 1.reg 的文件</p><p>​ 修改其中为自己的Typora.exe的路径</p><p>​ 双击这个文件，之后都选 “是”。</p><p>含义：</p><p>​ 第一行 <code>Windows Registry Editor Version 5.00</code> 表示注册表，必有。</p><p>​ 两个<code>HKEY_CLASSES_ROOT</code>，一个是图标和文字，另一个是程序和参数。</p><p>​ <code>%1</code> , <code>%V</code> 都表示目标文件的路径。</p>`,24),s=[d];function o(l,t){return a(),i("div",null,s)}const u=e(n,[["render",o],["__file","注册表右键.html.vue"]]);export{u as default};
