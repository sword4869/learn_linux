import{_ as o,W as l,X as r,Z as n,a0 as e,a1 as c,$ as s,Y as a,E as i}from"./framework-9a5142fa.js";const p={},u=a(`<p>[toc]</p><h2 id="secure-boot" tabindex="-1"><a class="header-anchor" href="#secure-boot" aria-hidden="true">#</a> secure boot</h2><p>没关长这样。 <img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231919290.png" alt="picture 1"></p><h2 id="分区" tabindex="-1"><a class="header-anchor" href="#分区" aria-hidden="true">#</a> 分区</h2><h3 id="主板的引导启动方式-bios-uefi" tabindex="-1"><a class="header-anchor" href="#主板的引导启动方式-bios-uefi" aria-hidden="true">#</a> 主板的引导启动方式 BIOS,UEFI</h3><p>古老的是Legacy BIOS，现代的是UEFI</p><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202408271843937.png" alt="image-20240827184318870"></p><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202408271843401.png" alt="image-20240827184328341"></p><h3 id="硬盘分区表的布局-mbr-gpt-efi" tabindex="-1"><a class="header-anchor" href="#硬盘分区表的布局-mbr-gpt-efi" aria-hidden="true">#</a> 硬盘分区表的布局 MBR,GPT(EFI)</h3><ul><li><p>古老的是MBR（Master Boot Record），现代是GPT（Globally Unique Identifier (GUID) Partition Table）。EFI是GPT中的系统启动分区。</p></li><li><p>如果用Legacy BIOS启动，就使用MBR格式的分区表。</p><p>如果用UEFI模式启动，就使用GPT格式的分区表。</p></li><li><p>MBR分区表，会限制主分区逻辑分区啥的；GPT分区表的好处就是分区可以随便你建。</p></li><li><p>使用MBR的分区表，则不需要创建<code>/boot</code>或<code>/efi</code>分区。而GPT需要。</p></li></ul><p>你可以通过<code>fdisk</code>来知道硬盘分区是gpt还是mbr.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>
Disklabel type: gpt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者 Under the Boot menu, look for PCI ROM Priority. You should see two options – EFI Compatible ROM and Legacy ROM. The latter indicates MBR.</p><blockquote><p>MBR分区的限制</p></blockquote><p>MBR 有三种分区类型 <strong>Primary, Extended, and Logical</strong>.</p><ul><li><p>硬盘可以没有扩展分区和逻辑分区，但是一定要有主分区，<strong>在主分区中要有一个启动分区用来启动系统</strong>。</p></li><li><p>主分区 Primary 以外的分区称为扩展分区 Extended，在扩展分区中可以建立若干个逻辑分区 Logical。</p></li><li><p>MBR 分区表限制<strong>最多四个主分区</strong>或<strong>三个主分区加一个扩展分区</strong></p></li></ul><p>e.g. 四个主分区时，虽然可用空间仍有5724MB，但再创建另一个分区，安装程序将抛出错误 “可用空间不足”。这并不是真的不足，而是因为<strong>主分区的数量限制</strong>。</p><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231919291.png" alt="picture 2"></p><p>e.g. 三个主分区（sda1, sda2 and sda3）加一个扩展分区（sda4），sd4又创建了多个逻辑分区 sda5, sda6 and sda7.</p><p><img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231919292.png" alt="picture 3"></p><h3 id="制作启动盘" tabindex="-1"><a class="header-anchor" href="#制作启动盘" aria-hidden="true">#</a> 制作启动盘</h3>`,21),m=a(`<p>一定要选择 GPT UEFI</p><h3 id="分区例子" tabindex="-1"><a class="header-anchor" href="#分区例子" aria-hidden="true">#</a> 分区例子</h3><blockquote><p>ubuntu默认分区规则：</p></blockquote><ul><li>最少的分区：<code>/</code>分区和efi分区。</li><li>efi分区占500M，<code>/</code>分区占剩下的分区。</li></ul><blockquote><p>BIOS/MBR</p></blockquote><table><thead><tr><th>挂载点</th><th>boot flag</th><th>用于格式</th><th>大小</th><th>意思</th></tr></thead><tbody><tr><td><code>/</code></td><td>yes</td><td>Ext4</td><td>剩下的200G</td><td></td></tr><tr><td><code>/swap</code></td><td>no</td><td>交换空间(swap)</td><td>1倍到2倍的物理内存RAM大小</td><td>虚拟内存</td></tr></tbody></table><p>交换分区：相当于Windows中的“虚拟内存”。如果物理内存小于或等于512MB，建议分配交换分区的大小为物理内存容量的2倍；如果物理内存大于512MB，建议分配交换分区的大小等于物理内存容量；如果您的内存够大也可以不建立交换分区。</p><blockquote><p>UEFI/GPT: 需要创建<code>/boot</code>或<code>/efi</code>分区</p></blockquote><table><thead><tr><th>挂载点</th><th>分区类型</th><th>用于格式</th><th>大小</th><th>意思</th></tr></thead><tbody><tr><td><code>/</code></td><td>主分区</td><td>Ext4</td><td>200G</td><td></td></tr><tr><td><code>/swap</code></td><td>逻辑分区</td><td>交换空间(swap)</td><td>1倍到2倍的物理内存RAM大小</td><td>虚拟内存</td></tr><tr><td><code>/boot</code> or <code>/efi</code></td><td>逻辑分区</td><td>Ext4 / efi</td><td>1G</td><td>启动</td></tr><tr><td><code>/tmp</code></td><td>逻辑分区</td><td>Ext4</td><td>5G</td><td>临时文件缓存</td></tr><tr><td><code>/home</code></td><td>逻辑分区</td><td>Ext4</td><td>剩下的500G</td><td>用户空间</td></tr></tbody></table><p>By giving <code>/home</code> its own dedicated partition, you separate the user data from the rest of the operating system. The advantage is that you can wipe the operating system and replace it without affecting the user data.</p><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><blockquote><p>已有EFI分区就选中EFI分区，没有就新建</p></blockquote><p>已安装过一个EFI的win10，有一个EFI分区，可以看到标识为 Windows Boot Manager，</p><p>没有的点击地下的＋ 新建一个EFI分区。</p><blockquote><p><strong>安装启动引导器的设备</strong></p></blockquote><p>重要的步骤，这个一定不能选择默认的，要选择为你想要安装到的<strong>EFI分区</strong></p><h2 id="double-boot" tabindex="-1"><a class="header-anchor" href="#double-boot" aria-hidden="true">#</a> double boot</h2><h3 id="make-boot-usb" tabindex="-1"><a class="header-anchor" href="#make-boot-usb" aria-hidden="true">#</a> Make boot USB</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 看看U盘挂载在哪里，如下 设备 /dev/sdb1 挂载在 /media/sword/ESD-USB</span>
$ lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sdb           <span class="token number">8</span>:16   <span class="token number">0</span>   <span class="token number">3</span>.7T  <span class="token number">0</span> disk 
└─sdb1        <span class="token number">8</span>:17   <span class="token number">0</span>    32G  <span class="token number">0</span> part /media/sword/ESD-USB
$ <span class="token function">umount</span> /media/sword/ESD-USB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 格式化为 ntfs 系统</span>
$ mkfs.ntfs /dev/sdb1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># burn-in</span>
<span class="token comment"># status=progress 显示进度</span>
$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>ubuntu-16.0.3-desktop-amd64.iso <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb1 <span class="token assign-left variable">status</span><span class="token operator">=</span>progress 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="always-install-windows-first-vanishing-linux-boot" tabindex="-1"><a class="header-anchor" href="#always-install-windows-first-vanishing-linux-boot" aria-hidden="true">#</a> Always install Windows first / vanishing linux boot</h3><p>Windows does not detect other operating systems and does not feature a boot menu. When you install it, it overwrites your boot sequence and your computer then boots straight into Windows.</p><p>Linux Mint (and most Linux distributions) detects other operating systems and builds a menu from which you can choose which system to boot.</p><p>For this reason, if you want to dual-boot or multi-boot with Windows, it is easier and recommended to install Windows first, before you install Linux Mint.</p><p>Otherwise, the linux boot is vanishing when u install linux before u install windows.</p><p>The resolution:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 产看EFI所在分区</span>
$ <span class="token function">sudo</span> <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>

nvme1n1     <span class="token number">259</span>:5    <span class="token number">0</span> <span class="token number">931</span>.5G  <span class="token number">0</span> disk 
├─nvme1n1p1 <span class="token number">259</span>:6    <span class="token number">0</span>  <span class="token number">30</span>.5G  <span class="token number">0</span> part swap
├─nvme1n1p2 <span class="token number">259</span>:7    <span class="token number">0</span> <span class="token number">186</span>.3G  <span class="token number">0</span> part 根目录 /
├─nvme1n1p3 <span class="token number">259</span>:8    <span class="token number">0</span>   977M  <span class="token number">0</span> part efi分区 /boot/efi
├─nvme1n1p4 <span class="token number">259</span>:9    <span class="token number">0</span>  <span class="token number">18</span>.6G  <span class="token number">0</span> part /tmp
└─nvme1n1p5 <span class="token number">259</span>:10   <span class="token number">0</span> <span class="token number">695</span>.2G  <span class="token number">0</span> part /home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用 Linux 启动盘进入 Live 系统环境，在 Live 的终端</span>
$ <span class="token function">sudo</span> <span class="token function">su</span>

<span class="token comment"># 创建修复 GRUB2 所需的文件夹：</span>
$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mnt/system

<span class="token comment"># 把 Linux 的 / 分区挂载到创建的文件夹</span>
$ <span class="token function">mount</span> /dev/nvme1n1p2 /mnt/system

<span class="token comment"># 把 EFI 分区（即 ESP 分区）也挂载：</span>
$ <span class="token function">mkdir</span> /mnt/system/boot/efi
$ <span class="token function">mount</span> /dev/nvme1n1p3 /mnt/system/boot/efi

<span class="token comment"># 用 efibootmgr 创建 ubuntu 的启动项</span>
<span class="token comment"># -c | --create: Create new variable bootnum and add to bootorder</span>
<span class="token comment"># -w | --write-signature: write unique signature to the MBR if needed</span>
<span class="token comment"># -L | --label LABEL: Boot manager display label (defaults to &quot;Linux&quot;)</span>
<span class="token comment"># -d | --disk DISK：The disk containing the loader (defaults to /dev/sda)</span>
<span class="token comment"># -p | --part PART：Partition number containing the bootloader (defaults to 1)</span>
$ efibootmgr <span class="token parameter variable">-c</span> <span class="token parameter variable">-w</span> <span class="token parameter variable">-L</span> ubuntu <span class="token parameter variable">-d</span> /dev/nvme1n1 <span class="token parameter variable">-p</span> <span class="token number">3</span>

<span class="token comment"># 重启，并在 BIOS 中选择刚才创建的 ubuntu 启动项，进入 Ubuntu。</span>
<span class="token comment"># OK，已经进入本机硬盘上的 Ubuntu 系统了，但 GRUB2 修复并未完毕。</span>
<span class="token comment"># 打开终端，重新安装 GRUB2 到 EFI 分区：</span>
$ <span class="token function">sudo</span> grub-install /dev/nvme1n1

<span class="token comment"># 刷新一下 GRUB2 配置：</span>
$ <span class="token function">sudo</span> update-grub2

<span class="token comment"># 现在重启，即可看到亲切的 GRUB2 终于“夺回”双系统引导权了！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),b={href:"https://linuxmint-installation-guide.readthedocs.io/en/latest/multiboot.html",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"efi-boot-order",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#efi-boot-order","aria-hidden":"true"},"#"),s(" EFI boot order")],-1),h={href:"https://linuxmint-installation-guide.readthedocs.io/en/latest/efi.html",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="扩容" tabindex="-1"><a class="header-anchor" href="#扩容" aria-hidden="true">#</a> 扩容</h2><p>未经测试!!!</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nn创建两个分区, p显示当前分区情况, w写入到分区表中</span>
$ <span class="token function">fdisk</span> /dev/sdb
nnpw

<span class="token comment"># fdisk后, 通知系统重新加载分区表</span>
$ partprobe /dev/sdb

<span class="token comment"># 创建文件系统</span>
$ mkfs.ext4 /dev/sdb1
$ mkfs.ext4 /dev/sdb2

<span class="token comment"># 挂载</span>
$ <span class="token function">mkdir</span> /mnt/data1
$ <span class="token function">mkdir</span> /mnt/data2
$ <span class="token function">mount</span> /dev/sdb1 /mnt/data1
$ <span class="token function">mount</span> /dev/sdb2 /mnt/data2

<span class="token comment"># 记录分区的扇区起始信息</span>
$ <span class="token function">fdisk</span> <span class="token parameter variable">-l</span> /dev/sdb
   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1            <span class="token number">2048</span>      <span class="token number">411647</span>      <span class="token number">204800</span>   <span class="token number">83</span>  Linux	<span class="token comment">#记录开始扇区号2048。</span>
/dev/sdb2          <span class="token number">411648</span>      <span class="token number">821247</span>      <span class="token number">204800</span>   <span class="token number">83</span>  Linux	<span class="token comment">#记录结束扇区号821247。</span>

<span class="token comment"># 卸载</span>
$ <span class="token function">umount</span> /mnt/data1
$ <span class="token function">umount</span> /mnt/data2

<span class="token comment"># 重新分区, dd删除原本两个, n分的时候用上2048和821237</span>
$ <span class="token function">fdisk</span> /dev/sdb
ddnpw
$ partprobe /dev/sdb
$ <span class="token function">mount</span> /dev/sdb1 /mnt/data1

<span class="token comment"># 调整ext2/ext3/ext4文件系统大小</span>
$ resize2fs /dev/sdb1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是数据还是只有sdb1里的了，sdb2的数据丢失了。</p><h2 id="windows时间不一致" tabindex="-1"><a class="header-anchor" href="#windows时间不一致" aria-hidden="true">#</a> windows时间不一致</h2>`,5),g={href:"https://zhuanlan.zhihu.com/p/492885761",target:"_blank",rel:"noopener noreferrer"},f=a(`<p>因为ubuntu修改了bios时间，所以在ubuntu中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ timedatectl set-local-rtc <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function x(w,B){const d=i("RouterLink"),t=i("ExternalLinkIcon");return l(),r("div",null,[u,n("p",null,[e(d,{to:"/system/%E5%8F%8C%E7%B3%BB%E7%BB%9F/%E5%88%B6%E4%BD%9C%E5%90%AF%E5%8A%A8%E7%9B%98.html"},{default:c(()=>[s("制作启动盘.md")]),_:1})]),m,n("p",null,[s("PS："),n("a",b,[s("https://linuxmint-installation-guide.readthedocs.io/en/latest/multiboot.html"),e(t)]),s(" 这个没有试过。")]),v,n("p",null,[n("a",h,[s("https://linuxmint-installation-guide.readthedocs.io/en/latest/efi.html"),e(t)])]),k,n("p",null,[n("a",g,[s("https://zhuanlan.zhihu.com/p/492885761"),e(t)])]),f])}const y=o(p,[["render",x],["__file","boot.html.vue"]]);export{y as default};