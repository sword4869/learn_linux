import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const t={},i=e(`<p>[toc]</p><h2 id="文件系统" tabindex="-1"><a class="header-anchor" href="#文件系统" aria-hidden="true">#</a> 文件系统</h2><blockquote><p>u盘：fat32 vs. ntfs</p></blockquote><p>fat32，通用，不支持超过4G的单个文件。ntfs，通用，可以。</p><p>虽然U盘用ntfs会缩短使用寿命，但为了支持4G以上的文件，还是用 ntfs。</p><blockquote><p>ext vs. ntfs</p></blockquote><p>Windows系统适合用NTFS文件系统类型做系统分区，<strong>Windows 挂载不了 ext4</strong>。</p><p>linux用ext4。<strong>linux挂在ntfs的盘只支持只读</strong>。</p><h2 id="drives" tabindex="-1"><a class="header-anchor" href="#drives" aria-hidden="true">#</a> Drives</h2><blockquote><p>legacy and modern drives</p></blockquote><p>old Linux:</p><ul><li>floppy drives (fdo)</li><li>hard drives (hd) : use IDE or E-IDE interface.</li></ul><p>modern:</p><ul><li>hard drives (sd) : use ATA/SATA or SCSI.</li></ul><blockquote><p>dev</p></blockquote><p>Each device on your system is represented by a file in the <code>/dev</code> directory.</p><p>Include devices you’ve probably never used or even realized existed.</p><p>Of particular interest are the devices <code>sda</code>, <code>sda1</code>, <code>sda2</code>, <code>sda3</code>, <code>sdb</code>, and <code>sdb1</code>, which are the hard drive and its partitions and a USB flash drive and its partitions.</p><blockquote><p>the meaning of <code>sda1</code></p></blockquote><ul><li>drive kind: 硬盘种类 <code>sd</code></li><li>major number: 哪块硬盘，first drive is <code>sda</code>, second drive is <code>sdb</code></li><li>minor number: 区号，first partition of drive is <code>1</code>, sencond is <code>2</code>.</li></ul><p>if you are partitioning a NVMe disk (e.g. <code>/dev/nvme0n1</code> with partitions starting from <code>/dev/nvme0n1p1</code>) or an SD card or eMMC disk (e.g. <code>/dev/mmcblk0</code> with partitions starting from <code>/dev/mmcblk0p1</code>).</p><h3 id="块设备、使用情况" tabindex="-1"><a class="header-anchor" href="#块设备、使用情况" aria-hidden="true">#</a> 块设备、使用情况</h3><p>如果你想要了解系统的<strong>块设备布局</strong>，包括<strong>未挂载</strong>的分区或磁盘，应该使用 lsblk。</p><p>而如果你关心的是<strong>已挂载</strong>文件系统的<strong>磁盘空间使用情况</strong>，则应选择 df</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           <span class="token number">8</span>:0    <span class="token number">0</span> <span class="token number">931</span>.5G  <span class="token number">0</span> disk 
├─sda1        <span class="token number">8</span>:1    <span class="token number">0</span>   499M  <span class="token number">0</span> part 				【sda1,sda2,sda3,sda4 都是另一个系统上的分区情况】
├─sda2        <span class="token number">8</span>:2    <span class="token number">0</span>   100M  <span class="token number">0</span> part 
├─sda3        <span class="token number">8</span>:3    <span class="token number">0</span>    16M  <span class="token number">0</span> part 
├─sda4        <span class="token number">8</span>:4    <span class="token number">0</span> <span class="token number">195</span>.6G  <span class="token number">0</span> part 
└─sda5        <span class="token number">8</span>:5    <span class="token number">0</span> <span class="token number">244</span>.1G  <span class="token number">0</span> part /home
nvme0n1     <span class="token number">259</span>:0    <span class="token number">0</span> <span class="token number">238</span>.5G  <span class="token number">0</span> disk 
├─nvme0n1p1 <span class="token number">259</span>:1    <span class="token number">0</span>  <span class="token number">30</span>.5G  <span class="token number">0</span> part <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
├─nvme0n1p2 <span class="token number">259</span>:2    <span class="token number">0</span>   977M  <span class="token number">0</span> part /boot/efi
└─nvme0n1p3 <span class="token number">259</span>:3    <span class="token number">0</span>   207G  <span class="token number">0</span> part /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -h, --human-readable  print sizes in powers of 1024 (e.g., 1023M)</span>
$ <span class="token function">df</span> <span class="token parameter variable">-h</span>
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           <span class="token number">3</span>.2G  <span class="token number">2</span>.2M  <span class="token number">3</span>.2G   <span class="token number">1</span>% /run
/dev/nvme0n1p3  203G   60G  133G  <span class="token number">32</span>% /					【df 主要关心使用情况, 可用60G，占用 <span class="token number">32</span> %】
tmpfs            16G   25M   16G   <span class="token number">1</span>% /dev/shm
tmpfs           <span class="token number">5</span>.0M  <span class="token number">4</span>.0K  <span class="token number">5</span>.0M   <span class="token number">1</span>% /run/lock
tmpfs            16G     <span class="token number">0</span>   16G   <span class="token number">0</span>% /run/qemu
/dev/nvme0n1p2  976M  <span class="token number">5</span>.3M  970M   <span class="token number">1</span>% /boot/efi				
/dev/sda5       240G  213G   15G  <span class="token number">94</span>% /home				【df 查看已经 mounted 的，另一个系统上的没有挂载，就看不到】
tmpfs           <span class="token number">3</span>.2G  204K  <span class="token number">3</span>.2G   <span class="token number">1</span>% /run/user/1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Character and Block devices</p></blockquote><p>These letters represent the two ways that devices transfer data in and out.</p><ul><li><code>c</code>: character devices. sending and receiving data character by character. such as mice, keyboards.</li><li><code>d</code>: block devices. send and receive data in blocks (many characters or bytes at a time) These devices require higher-­speed data throughput, like hard drives and DVD drives</li></ul><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> Mount</h3><p>Most modern operating systems automount storage devices when they’re attached.</p><p>Even if the device is <strong>physically attached</strong> to the system, it is still necessarily <strong>logically attached</strong> to the operating system.</p><p>Mount point:</p><ul><li>the point in the directory tree where devices are attached.</li><li>The two main mount points in Linux are <code>/mnt</code> and <code>/media</code>.</li><li>internal hard drives are mounted at <code>/mnt</code>, and external USB devicesare mounted at <code>/media</code>. Though technically any directory can be used</li></ul><p>临时挂载：The mount point (<code>/mnt/data</code>) for the device should be an empty directory and be created before <code>mount</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># mount &lt;device&gt; &lt;mount point&gt;</span>
$ <span class="token function">mkdir</span> /mnt/data
$ <span class="token function">sudo</span> <span class="token function">mount</span> /dev/sdb1 /mnt/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取消挂载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># umonut, 而不是 unmount</span>
<span class="token comment"># 既可以通过设备名，也可以通过挂载点</span>
$ <span class="token function">sudo</span> umonut /dev/sdb1     
$ <span class="token function">sudo</span> <span class="token function">umount</span> /mnt/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You cannot unmount a device that is busy, or you will just receive an error.</p><blockquote><p>mount -a: 挂载所有在 /etc/fstab 文件中定义的文件系统</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 挂载 sda3 到 /disk 上</span>
$ <span class="token function">mkdir</span> /disk
<span class="token comment"># 在配置文件 /etc/fstab下最后一行输入下面内容，这里将分区/dev/sda3挂到 /disk目录下, defaults 默认权限，0不检查</span>
$ <span class="token function">vim</span> /etc/fstab
/dev/sda3 /disk ext4 defaults <span class="token number">0</span> <span class="token number">0</span>

<span class="token comment"># 挂载所有在 /etc/fstab 文件中定义的文件系统</span>
$ <span class="token function">mount</span> <span class="token parameter variable">-a</span>

$ lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               <span class="token number">8</span>:0    <span class="token number">0</span>   30G  <span class="token number">0</span> disk
├─sda1            <span class="token number">8</span>:1    <span class="token number">0</span>    1G  <span class="token number">0</span> part /boot
├─sda2            <span class="token number">8</span>:2    <span class="token number">0</span>    9G  <span class="token number">0</span> part
│ ├─centos-root <span class="token number">253</span>:0    <span class="token number">0</span>    8G  <span class="token number">0</span> lvm  /
│ └─centos-swap <span class="token number">253</span>:1    <span class="token number">0</span>    1G  <span class="token number">0</span> lvm  <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
└─sda3            <span class="token number">8</span>:3    <span class="token number">0</span>   20G  <span class="token number">0</span> part /disk			【已挂载到 /disk】
sr0              <span class="token number">11</span>:0    <span class="token number">1</span> 1024M  <span class="token number">0</span> rom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>必须先 mkfs 制作文件系统，才能挂载</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 刚创建好 sda5</span>
$ <span class="token function">fdisk</span> /dev/sda
$ <span class="token function">mount</span> /dev/sda5 /disk
mount: /dev/sda5 is write-protected, mounting read-only
mount: unknown filesystem <span class="token builtin class-name">type</span> <span class="token string">&#39;(null)&#39;</span>

$ mkfs.ext4 /dev/sda4
<span class="token function">mke2fs</span> <span class="token number">1.42</span>.9 <span class="token punctuation">(</span><span class="token number">28</span>-Dec-2013<span class="token punctuation">)</span>
mkfs.ext4: Device size reported to be zero.  Invalid partition specified, or
        partition table wasn&#39;t reread after running fdisk, due to
        a modified partition being busy and <span class="token keyword">in</span> use.  You may need to <span class="token function">reboot</span>
        to re-read your partition table.

$ <span class="token function">mount</span> /dev/sda5 /disk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="check-and-repair" tabindex="-1"><a class="header-anchor" href="#check-and-repair" aria-hidden="true">#</a> Check and repair</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">fsck</span> <span class="token parameter variable">-p</span> /dev/sdb1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>fsck</code> command (short for filesystem check) checks the filesystem for errors and repairs the damage.</p><p>You must <strong>unmount</strong> the drive before running a filesystem check.</p><p><code>-p</code>: automatically repair any problems with the device.</p><h2 id="硬盘" tabindex="-1"><a class="header-anchor" href="#硬盘" aria-hidden="true">#</a> 硬盘</h2><h3 id="查看分区类型" tabindex="-1"><a class="header-anchor" href="#查看分区类型" aria-hidden="true">#</a> 查看分区类型</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>
Disk /dev/nvme0n1: <span class="token number">238.47</span> GiB, <span class="token number">256060514304</span> bytes, <span class="token number">500118192</span> sectors		【/dev/nvme0n1】
Disk model: SAMSUNG MZVL2256HCHQ-01B00              
Units: sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes							【逻辑分区】
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
Disklabel type: gpt																【gpt】
Disk identifier: 32CB3C6F-3895-4791-96D3-F00FFB5F11B0

Device            Start       End   Sectors  Size Type
/dev/nvme0n1p1     <span class="token number">2048</span>  <span class="token number">63999999</span>  <span class="token number">63997952</span> <span class="token number">30</span>.5G Linux swap
/dev/nvme0n1p2 <span class="token number">64000000</span>  <span class="token number">66000895</span>   <span class="token number">2000896</span>  977M EFI System
/dev/nvme0n1p3 <span class="token number">66000896</span> <span class="token number">500117503</span> <span class="token number">434116608</span>  207G Linux filesystem


Disk /dev/sda: <span class="token number">931.51</span> GiB, <span class="token number">1000204886016</span> bytes, <span class="token number">1953525168</span> sectors			【/dev/sda】
Disk model: WDC WD11EZEX-22B
Units: sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">4096</span> bytes							【逻辑分区】
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">4096</span> bytes / <span class="token number">4096</span> bytes
Disklabel type: gpt																【gpt】
Disk identifier: E27CD133-0F32-4BAB-87F7-42ACC7B767F2

Device          Start        End   Sectors   Size Type
/dev/sda1        <span class="token number">2048</span>    <span class="token number">1023999</span>   <span class="token number">1021952</span>   499M Windows recovery environment
/dev/sda2     <span class="token number">1024000</span>    <span class="token number">1228799</span>    <span class="token number">204800</span>   100M EFI System
/dev/sda3     <span class="token number">1228800</span>    <span class="token number">1261567</span>     <span class="token number">32768</span>    16M Microsoft reserved
/dev/sda4     <span class="token number">1261568</span>  <span class="token number">411379711</span> <span class="token number">410118144</span> <span class="token number">195</span>.6G Microsoft basic data
/dev/sda5  <span class="token number">1441523712</span> <span class="token number">1953523711</span> <span class="token number">512000000</span> <span class="token number">244</span>.1G Linux filesystem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="挂载新硬盘" tabindex="-1"><a class="header-anchor" href="#挂载新硬盘" aria-hidden="true">#</a> 挂载新硬盘</h3><ol><li><p>找到新增的硬盘是 <code>sdb</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ df -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>磁盘分区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">fdisk</span> /dev/sdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入n。n是&quot;new&quot;新建分区的意思。</p><p>​ 输入e或p。e表示扩展分区，p表示主分区（MBR 分区限制最多四个主分区或三个主分区加一个扩展分区）。</p><p>​ 输入回车，表示分区号，采用默认的就行。就是 <code>sdb1</code></p><p>​ 输入回车，表示开始扇区，采用默认值</p><p>​ 输入回车，表示结束扇区。采用默认值，使用剩余的全部磁盘。或者 <code>+18G</code></p><p>输入d。删除分区</p></li></ol><p>​ 输入w. 保存并退出。</p><p>​ 输入q，退出，不报存。</p><p>​ 输入p，打印分区表</p><ol start="3"><li><p>格式化磁盘并写入文件系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建文件格式</span>
$ <span class="token function">mkfs</span> <span class="token parameter variable">-t</span> ext4 /dev/sdb1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>先临时挂载(重新开机就没了)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> /mnt/data
$ <span class="token function">sudo</span> <span class="token function">mount</span> /dev/sdb1 /mnt/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改文件夹权限，不然就会发现只能在root时复制、粘贴、删除文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">id</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">(</span>lab<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">(</span>lab<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">(</span>lab<span class="token punctuation">)</span>,4<span class="token punctuation">(</span>adm<span class="token punctuation">)</span>,20<span class="token punctuation">(</span>dialout<span class="token punctuation">)</span>,24<span class="token punctuation">(</span>cdrom<span class="token punctuation">)</span>,25<span class="token punctuation">(</span>floppy<span class="token punctuation">)</span>,27<span class="token punctuation">(</span>sudo<span class="token punctuation">)</span>,29<span class="token punctuation">(</span>audio<span class="token punctuation">)</span>,30<span class="token punctuation">(</span>dip<span class="token punctuation">)</span>,44<span class="token punctuation">(</span>video<span class="token punctuation">)</span>,46<span class="token punctuation">(</span>plugdev<span class="token punctuation">)</span>,116<span class="token punctuation">(</span>netdev<span class="token punctuation">)</span>
  
$ <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> lab:lab /mnt/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>永久挂载</p><p>The filesystems that are mounted on a system are kept in a file at <code>/etc/fstab</code> (short for filesystem table), which is read by the system at every bootup.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> blkid
/dev/sdb1: <span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;7470460a-47a7-41a8-a4f0-7bcdb39b3506&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;ext4&quot;</span>
$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新增一行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 盘符路径  挂载路径  ext4  defaults 0  1</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>7470460a-47a7-41a8-a4f0-7bcdb39b3506 /mnt/data ext4 defaults <span class="token number">0</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="fdisk" tabindex="-1"><a class="header-anchor" href="#fdisk" aria-hidden="true">#</a> fdisk</h2><h3 id="fdisk-l打印分区表" tabindex="-1"><a class="header-anchor" href="#fdisk-l打印分区表" aria-hidden="true">#</a> fdisk -l打印分区表</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">fdisk</span> <span class="token parameter variable">-l</span>

Disk /dev/sda: <span class="token number">33.3</span> GB, <span class="token number">33285996544</span> bytes, <span class="token number">65011712</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
Disk label type: dos
Disk identifier: 0x000bf545

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        <span class="token number">2048</span>     <span class="token number">2099199</span>     <span class="token number">1048576</span>   <span class="token number">83</span>  Linux
/dev/sda2         <span class="token number">2099200</span>    <span class="token number">20971519</span>     <span class="token number">9436160</span>   8e  Linux LVM
/dev/sda3        <span class="token number">20971520</span>    <span class="token number">62914559</span>    <span class="token number">20971520</span>   <span class="token number">83</span>  Linux
/dev/sda4        <span class="token number">62914560</span>    <span class="token number">65011711</span>     <span class="token number">1048576</span>    <span class="token number">5</span>  Extended
/dev/sda5        <span class="token number">62916608</span>    <span class="token number">65011711</span>     <span class="token number">1047552</span>   <span class="token number">83</span>  Linux

Disk /dev/mapper/centos-root: <span class="token number">30.0</span> GB, <span class="token number">29955719168</span> bytes, <span class="token number">58507264</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes


Disk /dev/mapper/centos-swap: <span class="token number">1073</span> MB, <span class="token number">1073741824</span> bytes, <span class="token number">2097152</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fdisk-dev-sda" tabindex="-1"><a class="header-anchor" href="#fdisk-dev-sda" aria-hidden="true">#</a> fdisk /dev/sda</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 参数是 /dev/sda 哪块硬盘，而不是具体的分区 /dev/sda4</span>
$ <span class="token function">fdisk</span> /dev/sda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输入n。n是&quot;new&quot;新建分区的意思。</p><p>​ 输入e或p。e表示扩展分区，p表示主分区（MBR 分区限制最多四个主分区或三个主分区加一个扩展分区）。</p><p>​ 输入回车，表示分区号，采用默认的就行。就是 <code>sdb1</code></p><p>​ 输入回车，表示开始扇区，采用默认值</p><p>​ 输入回车，表示结束扇区。采用默认值，使用剩余的全部磁盘。或者 <code>+18G</code></p><p>输入d。删除分区</p><p>输入w. 保存并退出。</p><p>输入q，退出，不报存。</p><p>输入p，打印分区表。</p><h3 id="fdisk-已经三主时-要创建扩展、再创建逻辑" tabindex="-1"><a class="header-anchor" href="#fdisk-已经三主时-要创建扩展、再创建逻辑" aria-hidden="true">#</a> fdisk 已经三主时，要创建扩展、再创建逻辑</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">fdisk</span> /dev/sda
Welcome to <span class="token function">fdisk</span> <span class="token punctuation">(</span>util-linux <span class="token number">2.23</span>.2<span class="token punctuation">)</span>.

Changes will remain <span class="token keyword">in</span> memory only, <span class="token keyword">until</span> you decide to <span class="token function">write</span> them.
Be careful before using the <span class="token function">write</span> command.


Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: n
Partition type:
   p   primary <span class="token punctuation">(</span><span class="token number">3</span> primary, <span class="token number">0</span> extended, <span class="token number">1</span> <span class="token function">free</span><span class="token punctuation">)</span>		【已经三主】
   e   extended
Select <span class="token punctuation">(</span>default e<span class="token punctuation">)</span>: e								【扩展】
Selected partition <span class="token number">4</span>
First sector <span class="token punctuation">(</span><span class="token number">62914560</span>-65011711, default <span class="token number">62914560</span><span class="token punctuation">)</span>:	 【1G是扩展区】
Using default value <span class="token number">62914560</span>
Last sector, +sectors or +size<span class="token punctuation">{</span>K,M,G<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">62914560</span>-65011711, default <span class="token number">65011711</span><span class="token punctuation">)</span>:
Using default value <span class="token number">65011711</span>
Partition <span class="token number">4</span> of <span class="token builtin class-name">type</span> Extended and of size <span class="token number">1</span> GiB is <span class="token builtin class-name">set</span>

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: n								
All primary partitions are <span class="token keyword">in</span> use
Adding logical partition <span class="token number">5</span>							【直接就是逻辑】
First sector <span class="token punctuation">(</span><span class="token number">62916608</span>-65011711, default <span class="token number">62916608</span><span class="token punctuation">)</span>:	【在扩展内的逻辑】
Using default value <span class="token number">62916608</span>
Last sector, +sectors or +size<span class="token punctuation">{</span>K,M,G<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">62916608</span>-65011711, default <span class="token number">65011711</span><span class="token punctuation">)</span>:
Using default value <span class="token number">65011711</span>
Partition <span class="token number">5</span> of <span class="token builtin class-name">type</span> Linux and of size <span class="token number">1023</span> MiB is <span class="token builtin class-name">set</span>

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: w
The partition table has been altered<span class="token operator">!</span>

Calling ioctl<span class="token punctuation">(</span><span class="token punctuation">)</span> to re-read partition table.

WARNING: Re-reading the partition table failed with error <span class="token number">16</span>: Device or resource busy.
The kernel still uses the old table. The new table will be used at
the next <span class="token function">reboot</span> or after you run partprobe<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> or kpartx<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
Syncing disks.
$ partprobe

$ lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               <span class="token number">8</span>:0    <span class="token number">0</span>   31G  <span class="token number">0</span> disk
├─sda1            <span class="token number">8</span>:1    <span class="token number">0</span>    1G  <span class="token number">0</span> part /boot
├─sda2            <span class="token number">8</span>:2    <span class="token number">0</span>    9G  <span class="token number">0</span> part
│ ├─centos-root <span class="token number">253</span>:0    <span class="token number">0</span> <span class="token number">27</span>.9G  <span class="token number">0</span> lvm  /
│ └─centos-swap <span class="token number">253</span>:1    <span class="token number">0</span>    1G  <span class="token number">0</span> lvm  <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
├─sda3            <span class="token number">8</span>:3    <span class="token number">0</span>   20G  <span class="token number">0</span> part
│ └─centos-root <span class="token number">253</span>:0    <span class="token number">0</span> <span class="token number">27</span>.9G  <span class="token number">0</span> lvm  /
├─sda4            <span class="token number">8</span>:4    <span class="token number">0</span>  512B  <span class="token number">0</span> part		【扩展分区是不能用的，512B】
└─sda5            <span class="token number">8</span>:5    <span class="token number">0</span> 1023M  <span class="token number">0</span> part		【所以fdisk还必须分逻辑分区】
sr0              <span class="token number">11</span>:0    <span class="token number">1</span> 1024M  <span class="token number">0</span> rom

$ <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>

Disk /dev/sda: <span class="token number">33.3</span> GB, <span class="token number">33285996544</span> bytes, <span class="token number">65011712</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
Disk label type: dos
Disk identifier: 0x000bf545

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        <span class="token number">2048</span>     <span class="token number">2099199</span>     <span class="token number">1048576</span>   <span class="token number">83</span>  Linux
/dev/sda2         <span class="token number">2099200</span>    <span class="token number">20971519</span>     <span class="token number">9436160</span>   8e  Linux LVM
/dev/sda3        <span class="token number">20971520</span>    <span class="token number">62914559</span>    <span class="token number">20971520</span>   <span class="token number">83</span>  Linux
/dev/sda4        <span class="token number">62914560</span>    <span class="token number">65011711</span>     <span class="token number">1048576</span>    <span class="token number">5</span>  Extended
/dev/sda5        <span class="token number">62916608</span>    <span class="token number">65011711</span>     <span class="token number">1047552</span>   <span class="token number">83</span>  Linux

Disk /dev/mapper/centos-root: <span class="token number">30.0</span> GB, <span class="token number">29955719168</span> bytes, <span class="token number">58507264</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes


Disk /dev/mapper/centos-swap: <span class="token number">1073</span> MB, <span class="token number">1073741824</span> bytes, <span class="token number">2097152</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,73),p=[i];function l(c,o){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","filesystem.html.vue"]]);export{r as default};
