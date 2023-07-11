:: 注释方法1(::), 注释方法2(@rem / @REM / rem)
@REM This is a "Hello World" program.



@REM 关闭之后所有命令的回显，不然bat文件中每条非注释指令会在cmd命令窗口显示
@echo off



@REM print，不需要引号也能输出空格
echo Hello World!

@REM 输出空白行
echo=



@REM 初始化变量, set var1=2+2*2会报错
set var1=2+2*2

@REM 获取变量的值
echo var1: %var1%

@REM /a 是表达式运算，仅适合32位整型运算，可以是负数
set /a var2=%var1%
echo var2: %var2%

@REM /p 是提示输入，将输入值赋值给变量
set /p var3=Please input a number
echo var3: %var3%



if not defined var2 ( 
    echo var2 is not defined, the value is:[%var2%]
) else ( 
    echo var2 is defined, the value is:[%var2%]
)


@REM ""并不是空字符，是一对引号
set var4=""
if "%var4%"=="" (
    echo var4 is not defined, the value is:[%var4%]
) else (
    echo var4 is defined, the value is:[%var4%]
)
@REM 只有未定义的变量的值才是空字符
if "%var5%"=="" (
    echo var5 is not defined, the value is:[%var5%]
) else (
    echo var5 is defined, the value is:[%var5%]
)





@REM Hello World!

@REM var1: 2+2*2
@REM var2: 6
@REM Please input a number1
@REM var3: 1
@REM var2 is defined, the value is:[6]
@REM var4 is defined, the value is:[""]
@REM var5 is not defined, the value is:[]