- [Basic](#basic)
  - [Interpreter](#interpreter)
  - [Permission to execute](#permission-to-execute)
  - [Run](#run)
- [Usecase](#usecase)
- [quotes](#quotes)
- [执行命令](#执行命令)
- [alias](#alias)

---

# Basic
## Interpreter

The shebang `#!`: a combination of a bash mark and an exclamation mark.

`#! /bin/bash`, `#! python3`

## Permission to execute

[chmod](./file%20permission.md/#%20change%20permission)

## Run

`./` : it’s good practice to use the `./` when executing files as this localizes the file execution to the current directory. There may be another file with the same name on your system.


# Usecase

`echo`: submit a message to standard output.

`read`: place whatever they input into a variable.

```bash
#! /bin/bash
read name
echo "Hello" $name "to Bash Script"
```

# quotes


```bash
$ echo os
os
$ echo "os"
os
$ echo "'os'"
'os'
$ echo '"os"'
"os"
$ id=123
$ echo '"'$id'"'
"123"
$ echo "'"$id"'"
'123'
$ echo '"!!' $id---'"'
"!! 123---"
```

# 执行命令


```bash
$ id1=`id -u -n`
$ echo $id1

$ id2=$(id -u -n)
$ echo $id2
```

# alias

```bash
$ hhh='ls'
$ hhh
hhh: command not found
$ echo $hhh
ls
$ $hhh
cache.db  clash  config.yaml  Country.mmdb

$ alias jjj='ls'
$ jjj
docs  images  node_modules  package.json  yarn.lock
$ echo $jjj

$ $jjj
```