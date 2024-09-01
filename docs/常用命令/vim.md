[toc]

# 1. vim
vim是vi的加强版(多了个字体颜色)，现在主要使用vim
这两个的命令功能是一样的。你打vi victor.txt和vim victor.txt是一样，等等都一样。

## 1.1. Mode:
- `Normal Mode`: 
	- `<ESC>`
- `Insert Mode`: 
	- `i`(insert at the cursor), 
	- `a`(append below the cursor), e.g.`e`+`a`(word),`$`+`a`(line).
	- `A`(append the cursor line), 
	- `o`(add a new line below the cursor line and switch into insert mode), 
	- `O`(likewise,  above the cursor line)
	- `R`(replace character by character. you can move the cursor by arrow keys, and use Backspace to return the original character)

## 1.2. move the cursor
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


## 1.3. delete
### 1.3.1. delete the charater
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

## 1.4. undo
- `Normal Mode`: 
	- `u`(back to last change), `U`(back to original in the whole line, but this is considered a change). a insert mode whatever you type is considered a change.
	- `ctrl-r`(to the newer change)
	- `:e!`(restore to last saved file, `:w` is considered.)

## 1.5. select
- `v`(select the highlighte text and the character at the cursor), (`o` move to the other end). e.g.1.then `d`(delete the selected text), e.g.2.then `:wFILENAME`(save the selected text as a file).
- `ctrl-v`(select a rectangular block)

## 1.6. copy
- `v`+`y`(copy the select)
- `yw`(copy the word), likewise using Motion
- `yy`(copy the cursor line)

## 1.7. paste
- `p`(paste previously deleted text below the cursor, if `dd` paste that line under this line)(or paste the `y` ), `P`(before the cursor)
- `:r`(retrieve), `:r FILENAME`(paste the content of FILENAME below the cursor line), `:r !ls`(paste the contend of command ls)

## 1.8. search
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


## 1.9. external command
- `:!COMMAND`(execute the bash command, e.g.`ls`)

## 1.10. window
- `:split`(split a window)
- `ctrl-w ctrl-w`(jump from one window to another)
- `:q`(exit window if no changes)
- `:q!`(exit window and discard changes)
- `:qa`(exit all window)

## 1.11. save file
- `:w`(save changes)
- `:w FILENAME`(save as a another file)
- `:wq`(save and exit)
- `ZZ`(save and exit)

## 1.12. configuration file
- `:scriptnames`(show file sequence list)

I edit the file `/etc/vim/vimrc.local` in root privilege.

## 1.13. other
- match bracket
`%`(move the cursor to the other matching bracket)

- show line number
`:set number`, `:set nonumber`


---
参考：
[编辑器-vi、vim的使用](https://www.jianshu.com/p/d2e4e377e6c5)
`man vim`
