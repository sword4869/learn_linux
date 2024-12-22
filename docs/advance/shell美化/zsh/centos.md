自动补全太好用了。



安装zsh

```bash
# ①安装软件包
yum -y install zsh git
# ②更改默认终端
chsh -s /bin/zsh
```
这时候重新打开终端软件，应该就会默认进入 zsh 了。

配置oh-my-zsh
```bash
# ①从igt仓库中拉取oh-my-zsh
git clone https://gitee.com/mirrors/oh-my-zsh.git ~/.oh-my-zsh
# ②默认配置
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```
安装高亮、自动补全插件
```bash
# ①安装高亮插件：zsh-syntax-highlighting
git clone https://gitee.com/dawnwords/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# ②安装自动补全：zsh-autosuggestions
git clone https://gitee.com/lhaisu/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

打开.zshrc文件，找到plugins=(git)，在这里增加自己想要的插件即可，多个插件名称之间使用空格或者换行分开（不能使用逗号）
```bash
$ vim ~/.zshrc
plugins=(
        git
        sudo
        zsh-autosuggestions
        zsh-syntax-highlighting
)
$ source ~/.zshrc
```

