- [1. 查看和设置](#1-查看和设置)


---

注意：是在cmd下起作用，而不是powershell(vscode的集中终端就是powershell)，powershell下经过验证确实不起作用。

## 1. 查看和设置

```cmd
# 赋值
C:\Users\lab>set asddd=1

# 查看
C:\Users\lab>set asddd
asddd=1

# 取消
C:\Users\lab>set asddd=

C:\Users\lab>set asddd
环境变量 asddd 没有定义
```
不要引号
```
D:\git\learn_DL>set CUB_HOME=C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7\include\cub
D:\git\learn_DL>set CUB_HOME
CUB_HOME=C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7\include\cub

# 不要引号
D:\git\learn_DL>set CUB_HOME='C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7\include\cub'
D:\git\learn_DL>set CUB_HOME
CUB_HOME='C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7\include\cub'
```
查看当前所有可用的环境变量
```cmd
C:\Users\lab>set
ALLUSERSPROFILE=C:\ProgramData
APPDATA=C:\Users\lab\AppData\Roaming
CommonProgramFiles=C:\Program Files\Common Files
CommonProgramFiles(x86)=C:\Program Files (x86)\Common Files
CommonProgramW6432=C:\Program Files\Common Files
COMPUTERNAME=DESKTOP-E4KCNL1
ComSpec=C:\Windows\system32\cmd.exe
CONDA_BAT=D:\Applications\miniconda\condabin\conda.bat
CONDA_EXE=D:\Applications\miniconda\Scripts\conda.exe
CONDA_SHLVL=0
CUDA_PATH=C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7
CUDA_PATH_V11_7=C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7
CUDA_PATH_V11_8=C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.8
DriverData=C:\Windows\System32\Drivers\DriverData
HOMEDRIVE=C:
HOMEPATH=\Users\lab
INCLUDE=C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.37.32822\include;C:\Program Files (x86)\Windows Kits\10\Include\10.0.22621.0\ucrt
LIB=C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.37.32822\lib\x64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\ucrt\x86;C:\Program Files (x86)\Windows Kits\10\Include\10.0.22621.0\ucrt;
LOCALAPPDATA=C:\Users\lab\AppData\Local
LOGONSERVER=\\DESKTOP-E4KCNL1
NUMBER_OF_PROCESSORS=16
NVTOOLSEXT_PATH=C:\Program Files\NVIDIA Corporation\NvToolsExt\
OneDrive=C:\Users\lab\OneDrive
OS=Windows_NT
Path=D:\Applications\miniconda\condabin;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7\bin;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7\libnvvp;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.8\bin;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.8\libnvvp;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;D:\Applications\Git\bin;D:\Applications\cmake\bin;D:\Applications\msys2\ucrt64\bin;D:\Applications\scrcpy-win64-v2.0;C:\Program Files\NVIDIA Corporation\NVIDIA NvDLISR;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;D:\Applications\platform-tools_r34.0.5-windows;D:\Applications\miniconda;D:\Applications\miniconda\Scripts;D:\Applications\miniconda\Library\bin;C:\Program Files\PuTTY\;C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.37.32822\bin\Hostx64\x64;C:\Program Files (x86)\Windows Kits\8.1\Windows Performance Toolkit\;C:\Program Files\NVIDIA Corporation\Nsight Compute 2022.2.0\;C:\Users\lab\AppData\Local\Microsoft\WindowsApps;D:\Applications\Microsoft VS Code\bin;
PATHEXT=.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC
PROCESSOR_ARCHITECTURE=AMD64
PROCESSOR_IDENTIFIER=Intel64 Family 6 Model 165 Stepping 5, GenuineIntel
PROCESSOR_LEVEL=6
PROCESSOR_REVISION=a505
ProgramData=C:\ProgramData
ProgramFiles=C:\Program Files
ProgramFiles(x86)=C:\Program Files (x86)
ProgramW6432=C:\Program Files
PROMPT=$P$G
PSModulePath=C:\Program Files\WindowsPowerShell\Modules;C:\Windows\system32\WindowsPowerShell\v1.0\Modules
PUBLIC=C:\Users\Public
SESSIONNAME=Console
SystemDrive=C:
SystemRoot=C:\Windows
TEMP=C:\Users\lab\AppData\Local\Temp
TMP=C:\Users\lab\AppData\Local\Temp
USERDOMAIN=DESKTOP-E4KCNL1
USERDOMAIN_ROAMINGPROFILE=DESKTOP-E4KCNL1
USERNAME=lab
USERPROFILE=C:\Users\lab
windir=C:\Windows
WSLENV=WT_SESSION:WT_PROFILE_ID:
WT_PROFILE_ID={0caa0dad-35be-5f56-a8ff-afceeeaa6101}
WT_SESSION=b843a758-fb70-4284-aceb-f2b70a921aea
```