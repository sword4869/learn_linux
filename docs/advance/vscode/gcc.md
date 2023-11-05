- [1. gcc \& g++](#1-gcc--g)
- [2. library](#2-library)
- [3. gcc](#3-gcc)
- [4. gdb](#4-gdb)
  - [4.1. 退出pdb](#41-退出pdb)
  - [4.2. breakpoint](#42-breakpoint)
  - [4.3. 打印变量值](#43-打印变量值)
- [5. mingw \& mingw-w64](#5-mingw--mingw-w64)
- [6. cmake](#6-cmake)


---

- gcc/gcc: compiler(translate source code into executable files)
  
    gcc is the C and C++ compiler developed by GNU project. It 


    
- gdb/lldb: debugger

    gcc is a debugger by GNU project

## 1. gcc & g++

> relationship

GCC stands for GNU Compiler Collection and G++ stands for GNU C++ Compiler. They are developed by GNU project. They are widely adopted as the default compiler of UNIX-like systems.

gcc is a set of compilers. gcc supports various programming languages, such as C, C++, Objective-C, Fortran, Ada, and Go. 

g++ is a part of gcc that can compile C++ code.

> differences: gcc和g++可以大致认为分别是C和C++编译器 

1. complie c files

    You can use g++ to compile both `.c`, `.h` and `.cpp` files, but they will all be treated as **C++** files.

2. compile c++ files

    gcc supports C and C++. However, gcc does not automatically link the C++ library to your program. You need to specify it explicitly with the `-lstdc++` option1.
    ```bash
    gcc garbage.cpp -o garbage -lstdc++
    ```

    g++ also automatically links the standard C++ library (`libstdc++`) and the shared gcc library (`libgcc`) to your program.

    ```bash
    gcc garbage.cpp -o garbage
    ```
## 2. library
- standard C++ library (`libstdc++`)
- shared gcc library (`libgcc`)
- GNU C Library (`glibc`)

    To check the glibc version on your system.

    ```bash
    $ ldd --version
    ldd (Ubuntu GLIBC 2.35-0ubuntu3.4) 2.35
    ```

## 3. gcc


```bash
# gcc -o <executable file> <source_file.c>
# ./<executable file>

gcc garbage.c -o garbage 
./garbage
```

- Compile your code with debugging information:
    ```bash
    gcc garbage.c -g -o garbage
    ```
- Compile your code with optimizations:
    ```bash
    gcc garbage.c -On -o garbage 
    ```
    Notice: n is usually a number through 1 to 3. The larger the number, the more optimizations are performed while compiling the code. The optimization options may differ in each platform


## 4. gdb

All program to be debugged in gdb must be compiled by gcc with the option "-g" turning on.

```cpp
#include<iostream>
using namespace std;

int main(){
    printf("hello world");
    int a = 0;
    return 0;
}
```
```bash
gcc -g -o garbage garbage.c
gdb ./garbage
```
To start running and debugging the program, we can simply type the `run` command after the (gdb) prompt as below:

If the program takes arguments such as "garbage arg_1 arg_2", we may start running the program with these arguments as:`run arg_1 arg_2`
```
$ gdb ./1
GNU gdb (Ubuntu 12.1-0ubuntu1~22.04) 12.1
Copyright (C) 2022 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
Type "show copying" and "show warranty" for details.
This GDB was configured as "x86_64-linux-gnu".
Type "show configuration" for configuration details.
For bug reporting instructions, please see:
<https://www.gnu.org/software/gdb/bugs/>.
Find the GDB manual and other documentation resources online at:
    <http://www.gnu.org/software/gdb/documentation/>.

For help, type "help".
Type "apropos word" to search for commands related to "word"...
Reading symbols from ./1...
(gdb) run
Starting program: /home/lab/dataset/1 
[Thread debugging using libthread_db enabled]
Using host libthread_db library "/lib/x86_64-linux-gnu/libthread_db.so.1".
hello world[Inferior 1 (process 7544) exited normally]
```
### 4.1. 退出pdb

`q(uit)`

### 4.2. breakpoint

Gdb allows the breakpoint to be set to any source code line, function, or even any instruction.

- Break by line: to break the program at the beginning of a certain line, we can use the command "`break source_filename:line_number`". 
- Break by function: to break the program at the beginning of a certain function, we can use the command "`break source_filename:function_name()`". 
- Break by instruction: to break the program at the beginning of a certain machine instruction, we can use the command "`break *PC`"

```bash
(gdb) break 1.cpp:5
Breakpoint 1 at 0x555555555191: file 1.cpp, line 5.
(gdb) break 1.cpp:main
Note: breakpoint 1 also set at pc 0x555555555191.
Breakpoint 2 at 0x555555555191: file 1.cpp, line 5.
(gdb) break *0x555555555191
Note: breakpoints 1 and 2 also set at pc 0x555555555191.
Breakpoint 3 at 0x555555555191: file 1.cpp, line 5.
```

To show the current breakpoints we have, we may use the `info breakpoint` command as:
```bash
(gdb) info breakpoint
Num     Type           Disp Enb Address            What
1       breakpoint     keep y   0x0000555555555191 in main() at 1.cpp:5
2       breakpoint     keep y   0x0000555555555191 in main() at 1.cpp:5
3       breakpoint     keep y   0x0000555555555191 in main() at 1.cpp:5
```

disable/re-enable/delete a breakpoint, clear breakpoint(s)
```bash
(gdb) disable 1
(gdb) info breakpoint
Num     Type           Disp Enb Address            What
1       breakpoint     keep n   0x0000555555555191 in main() at 1.cpp:5
2       breakpoint     keep y   0x0000555555555191 in main() at 1.cpp:5
3       breakpoint     keep y   0x0000555555555191 in main() at 1.cpp:5

(gdb) enable 1
(gdb) info breakpoint
Num     Type           Disp Enb Address            What
1       breakpoint     keep y   0x0000555555555191 in main() at 1.cpp:5
2       breakpoint     keep y   0x0000555555555191 in main() at 1.cpp:5
3       breakpoint     keep y   0x0000555555555191 in main() at 1.cpp:5

(gdb) delete 1
(gdb) clear 1.cpp:5
Deleted breakpoints 2 3 
```
To resume the exeution of the interrupted program, we can use the "continue" or "c" command.
```bash
(gdb) c
Continuing.
hello world[Inferior 1 (process 9614) exited normally]
```
Stepping through program. 
- `s`: the debugger will step to the next line in the source code.
- `si`: the debugger will step to the next instruction in the compiled code. 
- `n`: the debugger will step to the next source line. Each function call will be treat as a single source code line.

### 4.3. 打印变量值
Inspect variables/register value. Once a running program is interrupted in gdb, we can also inspect the value of a variable using the "`print`" command. 
- If we are interested about the current value of variable a, we can simply "`print variable_name`". 
- Similiarly, if we are interested about the current value of a register, we can simply "`print $register_name`". If we are interested about all the register values, we can use "`info registers`" command to display the value in all registers.

```bash
(gdb) print a
$1 = 32767
(gdb) n
7           return 0;
(gdb) print a
$2 = 0
(gdb) print $eax
$3 = 11
(gdb) info registers
rax            0xb                 11
rbx            0x0                 0
rcx            0x55555555600f      93824992239631
rdx            0x0                 0
rsi            0x55555556aeb0      93824992325296
rdi            0x7fffffffd600      140737488344576
rbp            0x7fffffffdb70      0x7fffffffdb70
rsp            0x7fffffffdb60      0x7fffffffdb60
r8             0x0                 0
r9             0x55555556aeb0      93824992325296
r10            0x77                119
r11            0x7ffff7d6cce0      140737351437536
r12            0x7fffffffdc88      140737488346248
r13            0x555555555189      93824992235913
r14            0x555555557d98      93824992247192
r15            0x7ffff7ffd040      140737354125376
rip            0x5555555551b0      0x5555555551b0 <main()+39>
eflags         0x202               [ IF ]
cs             0x33                51
ss             0x2b                43
ds             0x0                 0
es             0x0                 0
fs             0x0                 0
gs             0x0                 0
```

## 5. mingw & mingw-w64

MinGW和MinGW-W64都是用于Windows平台的轻量级GNU工具链，用于开发和编译C和C++程序。

MinGW（Minimalist GNU for Windows）是一个32位的GNU工具链，它提供了一套基于GNU的开发环境，包括GCC编译器和一些GNU库，可以用来编译Windows下的C和C++程序。但MinGW只支持32位程序的编译。

MinGW-W64是一个64位的GNU工具链，是MinGW的升级版，原本它是MinGW的分支，后来成为独立发展的项目，它支持同时编译32位和64位程序。它包括了一系列的GNU库和工具，例如GCC、Binutils、**GDB**等，还支持一些实用工具和库，如OpenMP、MPI等。

总的来说，MinGW-W64可以看作是MinGW的升级版，它支持更多的编译选项和更多的库，可以编译出更加高效和安全的程序。

另外，MinGW-W64原本是从MinGW项目fork出来的独立的项目。MinGW 早已停止更新，内置的GCC最高版本为4.8.1，而MinGW-W64目前仍在维护，它也是GCC官网所推荐的。

[msys2](https://www.msys2.org/)

```
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
```
Add the path to your MinGW-w64 `msys64/ucrt64/bin` folder to the Windows PATH environment variable.
```
gcc --version
g++ --version
gdb --version
```

https://files.1f0.de/mingw/

https://github.com/niXman/mingw-builds-binaries/releases

[sourceforge, 太老了8.1.0](https://sourceforge.net/projects/mingw-w64/files/)

## 6. cmake

https://cmake.org/download/