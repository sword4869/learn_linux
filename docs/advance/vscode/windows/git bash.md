[Windows下的Git Bash配置，提升你的终端操作体验 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/418321777)

Git Bash: 

- Linux 命令行
- 自带 Vim

# Windows Terminal 配置 Git bash 为默认终端

其中 `"commandline": "D:\\Environment\\Git\\bin\\bash.exe",` 

- 是bin下的bash.exe，不是根目录下的 `\\Git\git-bash.exe`。
- `--login -i`：直接解决乱码问题。而[(15条消息) vscode集成git bash 后解决中文乱码问题_weixin_34406796的博客-CSDN博客](https://blog.csdn.net/weixin_34406796/article/details/89088490)，没用。

```
"defaultProfile": "{c891c3d2-b798-4857-83c0-89bf2ea34021}",
    "profiles": 
    {
        "defaults": 
        {
            ...
        },
        "list": 
        [
            {
                "commandline": "D:\\Environment\\Git\\bin\\bash.exe --login -i",
                "guid": "{c891c3d2-b798-4857-83c0-89bf2ea34021}",
                "name": "Git Bash",
                "icon": "D:\\Program_Files\\Git\\mingw64\\share\\git\\git-for-windows.ico"
            },
```
