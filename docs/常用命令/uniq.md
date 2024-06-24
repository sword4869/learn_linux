```bash
# 唯一
$ cat a.txt
fsdf
sdfa
sdf
sdf
$ cat a.txt | uniq
fsdf
sdfa
sdf

# 显示出现几次
$ cat a.txt | uniq -c
      1 fsdf
      1 sdfa
      2 sdf
```

