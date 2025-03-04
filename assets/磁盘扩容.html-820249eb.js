import{_ as s,W as n,X as a,Y as e}from"./framework-9a5142fa.js";const p={},t=e(`<p>（1）虚拟机外部设置</p><p><img src="https://i-blog.csdnimg.cn/blog_migrate/21c4f2ff934249d6b7910885b8afddb6.png" alt="在这里插入图片描述"></p><p>（2）虚拟机内部设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># centos 虚拟机 一般默认会有两个分区 sda1 sda2</span>
$ lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               <span class="token number">8</span>:0    <span class="token number">0</span>   30G  <span class="token number">0</span> disk
├─sda1            <span class="token number">8</span>:1    <span class="token number">0</span>    1G  <span class="token number">0</span> part /boot
└─sda2            <span class="token number">8</span>:2    <span class="token number">0</span>    9G  <span class="token number">0</span> part
  ├─centos-root <span class="token number">253</span>:0    <span class="token number">0</span>    8G  <span class="token number">0</span> lvm  /
  └─centos-swap <span class="token number">253</span>:1    <span class="token number">0</span>    1G  <span class="token number">0</span> lvm  <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
sr0              <span class="token number">11</span>:0    <span class="token number">1</span> 1024M  <span class="token number">0</span> rom

$ <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>

Disk /dev/sda: <span class="token number">32.2</span> GB, <span class="token number">32212254720</span> bytes, <span class="token number">62914560</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
Disk label type: dos
Disk identifier: 0x000bf545

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        <span class="token number">2048</span>     <span class="token number">2099199</span>     <span class="token number">1048576</span>   <span class="token number">83</span>  Linux
/dev/sda2         <span class="token number">2099200</span>    <span class="token number">20971519</span>     <span class="token number">9436160</span>   8e  Linux LVM

Disk /dev/mapper/centos-root: <span class="token number">8585</span> MB, <span class="token number">8585740288</span> bytes, <span class="token number">16769024</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes


Disk /dev/mapper/centos-swap: <span class="token number">1073</span> MB, <span class="token number">1073741824</span> bytes, <span class="token number">2097152</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对 sda 创建新分区 sda3，分配上新加的20G</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">fdisk</span> /dev/sda
Welcome to <span class="token function">fdisk</span> <span class="token punctuation">(</span>util-linux <span class="token number">2.23</span>.2<span class="token punctuation">)</span>.

Changes will remain <span class="token keyword">in</span> memory only, <span class="token keyword">until</span> you decide to <span class="token function">write</span> them.
Be careful before using the <span class="token function">write</span> command.


Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: n
Partition type:
   p   primary <span class="token punctuation">(</span><span class="token number">2</span> primary, <span class="token number">0</span> extended, <span class="token number">2</span> <span class="token function">free</span><span class="token punctuation">)</span>
   e   extended
Select <span class="token punctuation">(</span>default p<span class="token punctuation">)</span>: p
Partition number <span class="token punctuation">(</span><span class="token number">3,4</span>, default <span class="token number">3</span><span class="token punctuation">)</span>:
First sector <span class="token punctuation">(</span><span class="token number">20971520</span>-62914559, default <span class="token number">20971520</span><span class="token punctuation">)</span>:
Using default value <span class="token number">20971520</span>
Last sector, +sectors or +size<span class="token punctuation">{</span>K,M,G<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">20971520</span>-62914559, default <span class="token number">62914559</span><span class="token punctuation">)</span>:
Using default value <span class="token number">62914559</span>
Partition <span class="token number">3</span> of <span class="token builtin class-name">type</span> Linux and of size <span class="token number">20</span> GiB is <span class="token builtin class-name">set</span>

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: w
The partition table has been altered<span class="token operator">!</span>

Calling ioctl<span class="token punctuation">(</span><span class="token punctuation">)</span> to re-read partition table.

WARNING: Re-reading the partition table failed with error <span class="token number">16</span>: Device or resource busy.
The kernel still uses the old table. The new table will be used at
the next <span class="token function">reboot</span> or after you run partprobe<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> or kpartx<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
Syncing disks.

<span class="token comment"># 通知操作系统去重读分区表，就不用重启了</span>
$ partprobe

<span class="token comment"># 现在出现了 sda3</span>
$ <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>

Disk /dev/sda: <span class="token number">32.2</span> GB, <span class="token number">32212254720</span> bytes, <span class="token number">62914560</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
Disk label type: dos
Disk identifier: 0x000bf545

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        <span class="token number">2048</span>     <span class="token number">2099199</span>     <span class="token number">1048576</span>   <span class="token number">83</span>  Linux
/dev/sda2         <span class="token number">2099200</span>    <span class="token number">20971519</span>     <span class="token number">9436160</span>   8e  Linux LVM
/dev/sda3        <span class="token number">20971520</span>    <span class="token number">62914559</span>    <span class="token number">20971520</span>   <span class="token number">83</span>  Linux

Disk /dev/mapper/centos-root: <span class="token number">8585</span> MB, <span class="token number">8585740288</span> bytes, <span class="token number">16769024</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes


Disk /dev/mapper/centos-swap: <span class="token number">1073</span> MB, <span class="token number">1073741824</span> bytes, <span class="token number">2097152</span> sectors
Units <span class="token operator">=</span> sectors of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 sda3的容量扩展给 <code>/dev/mapper/centos-root</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将物理磁盘或分区初始化为物理卷</span>
$ pvcreate /dev/sda3
WARNING: ext4 signature detected on /dev/sda3 at offset <span class="token number">1080</span>. Wipe it? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>: y
  Wiping ext4 signature on /dev/sda3.
  Physical volume <span class="token string">&quot;/dev/sda3&quot;</span> successfully created.
  
<span class="token comment"># 查看卷组</span>
$ vgscan
  Reading volume <span class="token function">groups</span> from cache.
  Found volume group <span class="token string">&quot;centos&quot;</span> using metadata <span class="token builtin class-name">type</span> lvm2		【知道是 centos】
  
<span class="token comment"># 扩展 centos 卷组，新增物理卷sda3</span>
$ vgextend centos /dev/sda3
  Volume group <span class="token string">&quot;centos&quot;</span> successfully extended
  
<span class="token comment"># 扩展卷组中的逻辑卷</span>
<span class="token comment"># 指定大小 -L +20G</span>
$ lvextend <span class="token parameter variable">-l</span> +100%FREE /dev/mapper/centos-root
  Logical volume centos/root successfully resized.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断文件系统类型</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ blkid
/dev/mapper/centos-root: <span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;f7d4991b-2489-4eaf-af2a-43f28874dad8&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;xfs&quot;</span>			【xfs】
/dev/sda2: <span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;zEehHZ-U8TV-cws6-tHNZ-SR2s-rtR8-uRRJBn&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;LVM2_member&quot;</span>
/dev/sda1: <span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;8a8dd95e-bf63-43c5-a0fa-87a6f18719ef&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;xfs&quot;</span>
/dev/sda3: <span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;jI3vWw-uGnk-LzJv-n8vr-AwXb-JG0W-C3DgIv&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;LVM2_member&quot;</span>
/dev/sr0: <span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;2022-07-26-15-08-22-00&quot;</span> <span class="token assign-left variable">LABEL</span><span class="token operator">=</span><span class="token string">&quot;CentOS 7 x86_64&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;iso9660&quot;</span> <span class="token assign-left variable">PTTYPE</span><span class="token operator">=</span><span class="token string">&quot;dos&quot;</span>
/dev/mapper/centos-swap: <span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;3d1080ef-5b92-49b4-b74d-f6fff58d4171&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;swap&quot;</span>

$ <span class="token function">df</span> <span class="token parameter variable">-T</span>
Filesystem              Type     1K-blocks    Used Available Use% Mounted on
devtmpfs                devtmpfs   <span class="token number">1918664</span>       <span class="token number">0</span>   <span class="token number">1918664</span>   <span class="token number">0</span>% /dev
tmpfs                   tmpfs      <span class="token number">1930528</span>       <span class="token number">0</span>   <span class="token number">1930528</span>   <span class="token number">0</span>% /dev/shm
tmpfs                   tmpfs      <span class="token number">1930528</span>   <span class="token number">11860</span>   <span class="token number">1918668</span>   <span class="token number">1</span>% /run
tmpfs                   tmpfs      <span class="token number">1930528</span>       <span class="token number">0</span>   <span class="token number">1930528</span>   <span class="token number">0</span>% /sys/fs/cgroup
/dev/mapper/centos-root xfs       <span class="token number">17811456</span> <span class="token number">2392668</span>  <span class="token number">15418788</span>  <span class="token number">14</span>% /
/dev/sda1               xfs        <span class="token number">1038336</span>  <span class="token number">200452</span>    <span class="token number">837884</span>  <span class="token number">20</span>% /boot
tmpfs                   tmpfs       <span class="token number">386108</span>       <span class="token number">0</span>    <span class="token number">386108</span>   <span class="token number">0</span>% /run/user/0

$ lsblk <span class="token parameter variable">-f</span>
NAME            FSTYPE      LABEL           UUID                                   MOUNTPOINT
sda
├─sda1          xfs                         8a8dd95e-bf63-43c5-a0fa-87a6f18719ef   /boot
├─sda2          LVM2_member                 zEehHZ-U8TV-cws6-tHNZ-SR2s-rtR8-uRRJBn
│ ├─centos-root xfs                         f7d4991b-2489-4eaf-af2a-43f28874dad8   /
│ └─centos-swap swap                        3d1080ef-5b92-49b4-b74d-f6fff58d4171   <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
└─sda3          LVM2_member                 jI3vWw-uGnk-LzJv-n8vr-AwXb-JG0W-C3DgIv
  └─centos-root xfs                         f7d4991b-2489-4eaf-af2a-43f28874dad8   /
sr0             iso9660     CentOS <span class="token number">7</span> x86_64 <span class="token number">2022</span>-07-26-15-08-22-00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您的根文件系统是 XFS 类型，您可以使用 xfs_growfs 来自动扩展文件系统以匹配底层逻辑卷的新尺寸</p><p>如果是ext4 可用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ xfs_growfs /dev/mapper/centos-root
meta-data<span class="token operator">=</span>/dev/mapper/centos-root <span class="token assign-left variable">isize</span><span class="token operator">=</span><span class="token number">512</span>    <span class="token assign-left variable">agcount</span><span class="token operator">=</span><span class="token number">4</span>, <span class="token assign-left variable">agsize</span><span class="token operator">=</span><span class="token number">524032</span> blks
         <span class="token operator">=</span>                       <span class="token assign-left variable">sectsz</span><span class="token operator">=</span><span class="token number">512</span>   <span class="token assign-left variable">attr</span><span class="token operator">=</span><span class="token number">2</span>, <span class="token assign-left variable">projid32bit</span><span class="token operator">=</span><span class="token number">1</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">crc</span><span class="token operator">=</span><span class="token number">1</span>        <span class="token assign-left variable">finobt</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">spinodes</span><span class="token operator">=</span><span class="token number">0</span>
data     <span class="token operator">=</span>                       <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">2096128</span>, <span class="token assign-left variable">imaxpct</span><span class="token operator">=</span><span class="token number">25</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">sunit</span><span class="token operator">=</span><span class="token number">0</span>      <span class="token assign-left variable">swidth</span><span class="token operator">=</span><span class="token number">0</span> blks
naming   <span class="token operator">=</span>version <span class="token number">2</span>              <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   ascii-ci<span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ftype</span><span class="token operator">=</span><span class="token number">1</span>
log      <span class="token operator">=</span>internal               <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">2560</span>, <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token number">2</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">sectsz</span><span class="token operator">=</span><span class="token number">512</span>   <span class="token assign-left variable">sunit</span><span class="token operator">=</span><span class="token number">0</span> blks, lazy-count<span class="token operator">=</span><span class="token number">1</span>
realtime <span class="token operator">=</span>none                   <span class="token assign-left variable">extsz</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">0</span>, <span class="token assign-left variable">rtextents</span><span class="token operator">=</span><span class="token number">0</span>
data blocks changed from <span class="token number">2096128</span> to <span class="token number">7313408</span>

$ resize2fs /dev/mapper/centos-root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示扩容后情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">df</span> <span class="token parameter variable">-h</span>
Filesystem               Size  Used Avail Use% Mounted on
devtmpfs                 <span class="token number">1</span>.9G     <span class="token number">0</span>  <span class="token number">1</span>.9G   <span class="token number">0</span>% /dev
tmpfs                    <span class="token number">1</span>.9G     <span class="token number">0</span>  <span class="token number">1</span>.9G   <span class="token number">0</span>% /dev/shm
tmpfs                    <span class="token number">1</span>.9G   12M  <span class="token number">1</span>.9G   <span class="token number">1</span>% /run
tmpfs                    <span class="token number">1</span>.9G     <span class="token number">0</span>  <span class="token number">1</span>.9G   <span class="token number">0</span>% /sys/fs/cgroup
/dev/mapper/centos-root   28G  <span class="token number">7</span>.8G   21G  <span class="token number">28</span>% /					【已扩展】
/dev/sda1               1014M  183M  832M  <span class="token number">19</span>% /boot
tmpfs                    378M     <span class="token number">0</span>  378M   <span class="token number">0</span>% /run/user/0

$ lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               <span class="token number">8</span>:0    <span class="token number">0</span>   31G  <span class="token number">0</span> disk
├─sda1            <span class="token number">8</span>:1    <span class="token number">0</span>    1G  <span class="token number">0</span> part /boot
├─sda2            <span class="token number">8</span>:2    <span class="token number">0</span>    9G  <span class="token number">0</span> part
│ ├─centos-root <span class="token number">253</span>:0    <span class="token number">0</span> <span class="token number">27</span>.9G  <span class="token number">0</span> lvm  /
│ └─centos-swap <span class="token number">253</span>:1    <span class="token number">0</span>    1G  <span class="token number">0</span> lvm  <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
└─sda3            <span class="token number">8</span>:3    <span class="token number">0</span>   20G  <span class="token number">0</span> part
  └─centos-root <span class="token number">253</span>:0    <span class="token number">0</span> <span class="token number">27</span>.9G  <span class="token number">0</span> lvm  /
sr0              <span class="token number">11</span>:0    <span class="token number">1</span> 1024M  <span class="token number">0</span> rom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[t];function i(o,c){return n(),a("div",null,l)}const u=s(p,[["render",i],["__file","磁盘扩容.html.vue"]]);export{u as default};
