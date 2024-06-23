- [1. Find file](#1-find-file)
  - [1.1. find](#11-find)
    - [1.1.1. 查找](#111-查找)
    - [1.1.2. 执行删除](#112-执行删除)
  - [1.2. which](#12-which)
  - [1.3. locate](#13-locate)
  - [1.4. whereis](#14-whereis)

# 1. Find file


## 1.2. which

Cons: 
- find binary file.
- in the `PATH` varibale.

```bash
$ which aircrack-ng
/usr/bin/aircrack-ng
```
## 1.3. locate

Cons: 
- loacte uese a datebase that is usually only updated once a day. So you cannot find files created a minute ago.
```bash
$ locate aircrack-ng
/usr/bin/aircrack-ng
/usr/share/applications/kali-aircrack-ng.desktop
```
## 1.4. whereis

Cons: 
- find binary file.
```bash
$ whereis aircrack-ng
aircrack-ng: /usr/bin/aircrack-ng /usr/share/man/man1/aircrack-ng.1.gz
```
