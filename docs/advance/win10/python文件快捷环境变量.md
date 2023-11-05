1. 新建系统环境变量 `MYTREE`， 值是`D:\git\localToolkit\linux_scripts\mytree.py`
2. 使用cmd验证环境变量有效有否（第一，不要用powershell，显示不出来环境变量，第二，必须重新打开cmd窗口，windows terminal 打开新标签页不行）
    ```bash
    echo %MYTREE%
    D:\git\localToolkit\linux_scripts\mytree.py
    ```
3. 测试脚本
    ```bash
    (nerf) D:\git>python %MYTREE%
    ├── check_git.py
    ├── random_notes
    └── test
    ```