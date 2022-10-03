- [1. gedit](#1-gedit)
  - [1.1. 界面设置](#11-界面设置)
  - [1.2. 打开文件](#12-打开文件)
- [2. vim](#2-vim)
  - [2.1. Mode:](#21-mode)
  - [2.2. move the cursor](#22-move-the-cursor)
  - [2.3. delete](#23-delete)
    - [2.3.1. delete the charater](#231-delete-the-charater)
  - [2.4. undo](#24-undo)
  - [2.5. select](#25-select)
  - [2.6. copy](#26-copy)
  - [2.7. paste](#27-paste)
  - [2.8. search](#28-search)
  - [2.9. external command](#29-external-command)
  - [2.10. window](#210-window)
  - [2.11. save file](#211-save-file)
  - [2.12. configuration file](#212-configuration-file)
  - [2.13. other](#213-other)

---

# 1. gedit
vim的操作令人着急，而且没有全选的快捷操作，菜单栏的全选也只是选择当前页的内容并非全部文本，也不能用shift+方向键自由复制。

那就用gedit。
还能**显示行号（nice）**，突出显示当前行，自定义制表符宽度。

## 1.1. 界面设置
启动gedit
```
gedit
```

然后点击Edit->Preferences设置界面。

![16647985440292.png](/image/16647985440292.png)

![16647985443326504.png](/image/16647985443326504.png)

## 1.2. 打开文件
```
gedit main.cpp
```
保存：CTRL+S
退出：CTRL+W
等等常见的方式。


# 2. vim
vim是vi的加强版(多了个字体颜色)，现在主要使用vim
这两个的命令功能是一样的。你打vi victor.txt和vim victor.txt是一样，等等都一样。

## 2.1. Mode:
- `Normal Mode`: 
	- `<ESC>`
- `Insert Mode`: 
	- `i`(insert at the cursor), 
	- `a`(append below the cursor), e.g.`e`+`a`(word),`$`+`a`(line).
	- `A`(append the cursor line), 
	- `o`(add a new line below the cursor line and switch into insert mode), 
	- `O`(likewise,  above the cursor line)
	- `R`(replace character by character. you can move the cursor by arrow keys, and use Backspace to return the original character)

## 2.2. move the cursor
- `Any Mode`: 
	- arrow keys.
- `Normal Mode`: 
	- `hl`(left and right), `jk`(down and up).`3j`, `3k`, `3h`, `3l`
	- `gg`(the start of file)
	- `G`(the last line of file)
	- `20G`(the 20th line of file)
	- `ctrl-g`(show the location of lines)
	- `50%`(the half of the file)
	- `ctrl-u`(scroll upward half a window)
	- `ctrl-d`(scroll downward half a window)
	- `zz`(scroll to make the cursor line in the vertical center of window), `zt`(the top of window), `zb`(the bottom of window)

Motion:
- `w`(the start of next the word).`2w`(2 words forward).`2w`
- `b`(if the cursor is not at the start the word, then move to the start of this word. else previous word). - `2b`
- `e`(if the cursor is not at the end the word, then move to the end of this word. else next word).`2e`
- `0`(the start of the cursor line)
- `^`(the first non-blank character of the cursor line)
- `$`(the end of the cursor line). `2$`(the end of next cursor line)

Insert Mode:  mouse.(if in the Normal Mode, two ways just move up and down)


## 2.3. delete
### 2.3.1. delete the charater
- `Any Mode`: 
	- `Delete`(at the cursor).

- `Normal Mode`: 
	- `x`(delete the character at the cursor)`.
	- `J`(delete the cursor line break光标出所在行的换行符, join together this line and next line with a space)
	- `d`(delete)+Motion:
		- `dw`(delete the characters between at the cursor and before the `w`), `d2w`
		- `db`(delete the characters between at the 'e' and before the cursor), `d2b`
		- `de`(delete the characters between at the cursor and at the 'e'), `d2e`
		- `d0`(delete the characters before the cursor)
		- `d$`(delete the characters at and below the cursor, and keep the line if the line is empty), or `D`.
		- `dd`(delete the line), `2dd`
	
	- `c`(delete and switch into insert mode)+Motion:
		- `cw`, `ce`, `c0`, `c$`, `cc`

- `Insert Mode`: `Backspace`(before the cursor)

## 2.4. undo
- `Normal Mode`: 
	- `u`(back to last change), `U`(back to original in the whole line, but this is considered a change). a insert mode whatever you type is considered a change.
	- `ctrl-r`(to the newer change)
	- `:e!`(restore to last saved file, `:w` is considered.)

## 2.5. select
- `v`(select the highlighte text and the character at the cursor), (`o` move to the other end). e.g.1.then `d`(delete the selected text), e.g.2.then `:wFILENAME`(save the selected text as a file).
- `ctrl-v`(select a rectangular block)

## 2.6. copy
- `v`+`y`(copy the select)
- `yw`(copy the word), likewise using Motion
- `yy`(copy the cursor line)

## 2.7. paste
- `p`(paste previously deleted text below the cursor, if `dd` paste that line under this line)(or paste the `y` ), `P`(before the cursor)
- `:r`(retrieve), `:r FILENAME`(paste the content of FILENAME below the cursor line), `:r !ls`(paste the contend of command ls)

## 2.8. search
单个字符：
- `fa`(find forward the character a in the cursor line.). `3fa`
- `Fa`(find backward). `3Fa`
- `*`(grab the cursor word, search next),`#`(likewise, search last)

短语：
- `/PHRASE`(search PHRASE in the file), `n`next phrase, `N`previous phrase, `/<Up><Down>`search history, `/o<Up>`complement certain history,  
	- `:set ic`(ignor case), `set noic`(disable ignoring case), or `/PHRASE\c`(ignore case).
	- `:set hls`(highlight search all phrase), `:set nohls`(disable).
	- `/\<the`(word starts with 'the')
	- `/the\>`(word ends with 'the')
	- `/^the`(beginning of a line)
	- `/the$`(end of a line)
	- `/the*`(the+other)
	- `/t.e`(any single character)


- `:s/OLD/NEW`(replace OLD to NEW, the first OLD in the line).`g`(globally, means that multi), `c`(choice, means that question), `%`(in the whole file), `1,3`(the line numbers of the range).e.g.`:1,3s/OLD/NEW/g`, `:%s/OLD/NEW/gc`


## 2.9. external command
- `:!COMMAND`(execute the bash command, e.g.`ls`)

## 2.10. window
- `:split`(split a window)
- `ctrl-w ctrl-w`(jump from one window to another)
- `:q`(exit window if no changes)
- `:q!`(exit window and discard changes)
- `:qa`(exit all window)

## 2.11. save file
- `:w`(save changes)
- `:w FILENAME`(save as a another file)
- `:wq`(save and exit)
- `ZZ`(save and exit)

## 2.12. configuration file
- `:scriptnames`(show file sequence list)

I edit the file `/etc/vim/vimrc.local` in root privilege.

## 2.13. other
- match bracket
`%`(move the cursor to the other matching bracket)

- show line number
`:set number`, `:set nonumber`


---
参考：
[编辑器-vi、vim的使用](https://www.jianshu.com/p/d2e4e377e6c5)
`man vim`
