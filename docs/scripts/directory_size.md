
## 目录层级
```bash
sudo apt install tree

tree -L 2
```

## 目录总大小

`tree`,`ls`都是4096B的指针大小。

真正的目录总大小： `du`
```bash
#### one parent directory
# $ du -h --max-depth=0 /home/daygeek/Documents/
$ du -hs /home/daygeek/Documents
20G    /home/daygeek/Documents


#### each child directories
# 等同于 $ du -h --max-depth=1 .
$ du -hs ./*
4.0K    ./公共的
68G     ./miniconda3
```
- `-h, --human-readable`: 以人类可读的格式输出大小（例如，1K 234M 2G）
- `-s, --summarize`: 仅对每个命令行参数输出一个总使用量, i.e. show respective total size of the directories `./*`.

```bash
$ du -hsc ./*
4.0K    ./公共的
68G     ./miniconda3
68G     total
```
- `-c, --total`: 显示总计信息