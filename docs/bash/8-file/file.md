- [for filename with space](#for-filename-with-space)
- [write to file](#write-to-file)
  - [touch](#touch)
  - [echo](#echo)
  - [cat](#cat)
  - [echo](#echo-1)
  - [vim](#vim)


---

# for filename with space

```bash
# quotation
$ ./file.sh "log diary.txt"
hello world

# slash the space
$ ./file.sh log\ diary.txt
hello world
```


# write to file

这些命令都不能直接创建一个文件夹不存在的之下的文件。

都必须 `mkdir -p someDirectory`

## touch

```bash
touch log.txt
```

## echo


```bash
# rewrite
echo "hello" > log.txt

# append
echo "world" >> log.txt
```


## cat

1. editor
```bash
cat > log.txt
```
you get into an editor where you can input from keyboard. Even you can input enter character.

when you wand to get out of it, press `ctrl + d`.

2. [heredoc](<../Bash Heredoc.md>)
```bash
cat << EOF > log.txt
asdf
afsd
EOF
```

## echo

好像只能一行
```bash
echo dsa > log.txt
```

## vim 

```bash
vim log.txt
```