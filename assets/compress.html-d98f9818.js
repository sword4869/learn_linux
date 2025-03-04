import{_ as e,W as a,X as s,Y as n}from"./framework-9a5142fa.js";const i={},t=n(`<p>[toc]</p><h2 id="archive" tabindex="-1"><a class="header-anchor" href="#archive" aria-hidden="true">#</a> Archive</h2><h3 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># tar -cvf T.tar a.txt b.jpg: -可以省去</span>
$ <span class="token function">tar</span> cvf T.tar a.txt b.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-c</code>: create an archive from many files.</li><li><code>-v</code>: verbose, this is optional.</li><li><code>-f</code>: write to the following file. <code>T.tar</code>.</li><li><code>-h</code>: 打包软链接指向的东西</li><li><code>--exclude</code>: 排除某些文件或文件夹。多个，则用多个<code>--exclude</code>。</li><li>最后写文件，注意必须写在选项参数后面: read from files you want to compress. <code>a.txt b.jpg</code></li></ul><p>This archive <code>.tar</code> file is bigger than the sum of the original files.</p><p>压缩格式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-czvf</span> file.tar.gz xxx  <span class="token comment"># z压缩 tar.gz</span>

<span class="token function">tar</span> <span class="token parameter variable">-cjvf</span> file.tar.bz2 xxx <span class="token comment"># j压缩 tar.bz2</span>

<span class="token function">tar</span> <span class="token parameter variable">-cZvf</span> file.tar.Z xxx   <span class="token comment"># Z压缩 tar.Z</span>

<span class="token comment">### 都可以直接压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> file.tar.gz xxx  <span class="token comment"># z压缩 tar.gz</span>

<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> file.tar.bz2 xxx <span class="token comment"># j压缩 tar.bz2</span>

<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> file.tar.Z xxx   <span class="token comment"># Z压缩 tar.Z</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>压缩路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 结果就是连带路径</span>
<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> file.tar.gz home/lab/miniconda3/envs/point-avatar

home/lab/miniconda3/envs/point-avatar/conda-meta/tzdata-2024a-h04d1e81_0.json
home/lab/miniconda3/envs/point-avatar/conda-meta/lcms2-2.12-hddcbb42_0.json
home/lab/miniconda3/envs/point-avatar/conda-meta/nvidiacub-1.10.0-0.json

<span class="token comment"># 应该是进入再压缩</span>
<span class="token builtin class-name">cd</span> home/lab/miniconda3/envs
<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> file.tar.gz point-avatar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extract" tabindex="-1"><a class="header-anchor" href="#extract" aria-hidden="true">#</a> extract</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># \`-x\`: denotes that **extract** files from the archive</span>
$ <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> T.tar

<span class="token comment"># \`-C\`: 指定解压的输出目录。**要求目录存在**</span>
$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/Desktop/newFolder
$ <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> T.tar <span class="token parameter variable">-C</span> ~/Desktop/newFolder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实直接x就行，不用管</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> file.tar.gz   <span class="token comment"># z解压 tar.gz</span>

<span class="token function">tar</span> <span class="token parameter variable">-xjvf</span> file.tar.bz2  <span class="token comment"># j解压 tar.bz2</span>

<span class="token function">tar</span> <span class="token parameter variable">-xZvf</span> file.tar.Z    <span class="token comment"># Z解压 tar.Z</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-content" tabindex="-1"><a class="header-anchor" href="#show-content" aria-hidden="true">#</a> show content</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -t</span>
$ <span class="token function">tar</span> <span class="token parameter variable">-tvf</span> T.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>display files from the archive.</p><h3 id="compress-decompress" tabindex="-1"><a class="header-anchor" href="#compress-decompress" aria-hidden="true">#</a> Compress &amp; Decompress</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 确实压缩了</span>
-rw-------  <span class="token number">1</span> lab lab <span class="token number">6726338560</span> Aug <span class="token number">27</span> <span class="token number">18</span>:36 nerf.tar
-rw-------  <span class="token number">1</span> lab lab <span class="token number">3369845884</span> Aug <span class="token number">27</span> <span class="token number">19</span>:16 nerf.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">tools</th><th style="text-align:center;">extension</th><th style="text-align:center;">speed</th><th style="text-align:center;">result</th></tr></thead><tbody><tr><td style="text-align:center;">bzip2</td><td style="text-align:center;"><code>.tar.bz2</code></td><td style="text-align:center;">slowest</td><td style="text-align:center;">smallest</td></tr><tr><td style="text-align:center;">gzip</td><td style="text-align:center;"><code>.tar.gz</code> or <code>.tgz</code></td><td style="text-align:center;">middle</td><td style="text-align:center;">middle</td></tr><tr><td style="text-align:center;">compress</td><td style="text-align:center;"><code>.tar.Z</code></td><td style="text-align:center;">fastest</td><td style="text-align:center;">larger</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bzip2</span> T.tar

$ bunzip2 T.tar.bz2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">gzip</span> T.tar

$ gunzip T.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It&#39;s worth noting that <code>gzip</code> can also be used to extract <code>.zip</code> files.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ compress T.tar

$ uncompress T.tar.Z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xz" tabindex="-1"><a class="header-anchor" href="#xz" aria-hidden="true">#</a> xz</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -v, 显示进度</span>

<span class="token comment"># -z, --compress</span>
$ xz <span class="token parameter variable">-z</span> T.tar

<span class="token comment"># -d, --decompress</span>
$ xz <span class="token parameter variable">-d</span> T.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> zip</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全是文件</span>
$ <span class="token function">zip</span> result.zip file1 file2
<span class="token comment"># 含有文件夹</span>
$ <span class="token function">zip</span> <span class="token parameter variable">-r</span> result.zip file1 folder2


$ <span class="token function">unzip</span> result.zip
<span class="token comment"># -d 解压位置</span>
$ <span class="token function">unzip</span> result.zip <span class="token parameter variable">-d</span> ~/Desktop
<span class="token comment"># 列举压缩文件的内容</span>
$ <span class="token function">unzip</span> <span class="token parameter variable">-l</span> result.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压多个文件</p><p>​ 直接<code>unzip *.zip</code> 等价于<code>unzip data.zip invoices.zip pictures.zip</code>会报错</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> <span class="token string">&#39;*.zip&#39;</span>
<span class="token function">unzip</span> <span class="token string">&quot;*.zip&quot;</span>
<span class="token function">unzip</span> <span class="token punctuation">\\</span>*.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7z" tabindex="-1"><a class="header-anchor" href="#_7z" aria-hidden="true">#</a> 7z</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ yum <span class="token function">install</span> <span class="token parameter variable">-y</span> p7zip

<span class="token comment"># 解压 x</span>
$ 7za x phpMyAdmin-3.3.8.1-all-languages.7z

<span class="token comment"># 压缩 a</span>
$ 7za a dist.7z ~/dist 
$ 7za a files.7z file1 file2 file3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dd-copy" tabindex="-1"><a class="header-anchor" href="#dd-copy" aria-hidden="true">#</a> dd copy</h2><ul><li>A file, a filesystem, or even an entire hard drive.</li><li>A <strong>bit-­by-­bit / physical</strong> copy without the filesystem or other logical structures.</li><li>Even deleted files are copied. Deleted files will not be copied with most <strong>logical copying</strong> utilities, such as <code>cp</code>.</li><li>Forensic investigators Get deleted files and other artifacts that might be useful for finding evidence against the hacker.</li><li>Should not be used for typical day­-to-­day copy because it is very slow.</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdb <span class="token assign-left variable">of</span><span class="token operator">=</span>/root/flashcopy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>if</code> designates your input file, <code>of</code> designates your output file. Here is copying <code>/dev/sdb</code> to <code>/root/flashcopy</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdb <span class="token assign-left variable">of</span><span class="token operator">=</span>/root/flashcopy <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">4096</span> conv:noerror 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p><code>bs</code>: allows you to determine the block size (the number of bytes read/written per block) of the data being copied. By default, it is set to 512 bytes, but it can be changed to speed up the process. Typically, this would be set to the sector size of the device, most often 4096 bytes (4KB).</p></li><li><p><code>noerror</code>: continues to copy even if errors are encountered.</p></li></ul>`,40),l=[t];function d(r,c){return a(),s("div",null,l)}const p=e(i,[["render",d],["__file","compress.html.vue"]]);export{p as default};
