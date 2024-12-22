感觉和 `>` `>>` 没啥区别

tee

- 从标准输入读取数据，并将其写入到标准输出和一个或多个文件中，并将结果输出到标准输出上

```bash
# 覆写
$ echo "example output" | tee file.txt
example output
$ echo "example output" > file.txt

# 追加 -a
$ echo "example output" | tee -a file.txt
example output
$ echo "example output" >> file.txt

# 隐藏tee输出
$ echo "example output" | tee file.txt >/dev/null

# 使用tee命令在多个文件中写入相同的内容
$ echo "example output" | tee file1.txt file2.txt file3.txt
```

