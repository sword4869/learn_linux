

`sort`命令是Linux中用来对文本文件的内容进行排序的一个命令。以下是一些常用的选项和示例：

# 常用选项

- `-r`: 反向排序（从大到小）
- `-n`: 按数值排序（默认是按字典顺序）
- `-k`: 指定排序的列
- `-t`: 指定列的分隔符
- `-u`: 去重，只保留唯一的行
- `-o`: 将排序后的结果输出到指定文件
- `-b`: 忽略每行前导的空白字符
- `-f`: 忽略大小写

# 示例

## 基本

```bash
$ sort a.txt
fsdf
sdf
sdf
sdfa

$ cat a.txt | sort
fsdf
sdf
sdf
sdfa
```

## 按字母顺序排序

使用以下命令对文件内容进行排序：
```sh
# banana
# apple
# cherry
$ sort file.txt
apple
banana
cherry
```

```bash
# 10
# 5
# 20
# 1
$ sort -n numbers.txt
1
10
20
5
```



## 按数值排序

使用以下命令按数值排序（对非数字不起作用）
```sh
# 10
# 5
# 20
# 1
$ sort -n numbers.txt
1
5
10
20
```

## 反向排序

```bash
# banana
# apple
# cherry
$ sort -r file.txt
cherry
banana
apple

# 10
# 5
# 20
# 1
$ sort -rn numbers.txt
20
10
5
1
```

## 按特定列排序

```sh
# Alice 25
# Bob 30
# Charlie 20
$ sort -nk 2 data.txt
Charlie 20
Alice 25
Bob 30
```

使用分隔符

```sh
# Alice,25
# Bob,30
# Charlie,20
$ sort -t, -nk 2 data.csv
Charlie,20
Alice,25
Bob,30
```

## 去重排序

```sh
# apple
# banana
# apple
# cherry
# banana
$ sort -u duplicate.txt
apple
banana
cherry
```

## 输出到文件

可以使用 `-o` 选项将排序结果输出到指定文件：
```sh
sort -o sorted.txt file.txt
```

这样会将 `file.txt` 的排序结果写入 `sorted.txt`。

