[toc]

## windows的cmd psh其实自带了tree

但是不能控制目录层级。



## 安装linux的tree

- [GnuWin download | SourceForge.net](https://sourceforge.net/projects/gnuwin32/)
- 添加到系统变量 Path 中`D:\MySoftware\GnuWin32\bin`
  - 且注意添加到最上面。要是在system32下面，那么就无效
  - ![image-20250322191547936](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202503221915991.png)

- ```bash
  (base) PS D:\other\nchu\paper\experiment1\code\metrical-tracker> tree -L 1
  .
  |-- LICENSE
  |-- README.md
  |-- __pycache__
  |-- calibration.py
  |-- configs
  |-- data
  |-- datasets
  |-- documents
  |-- environment.yml
  |-- face_detector.py
  |-- flame
  |-- image.py
  |-- input
  |-- install.sh
  |-- masking.py
  |-- mediapipe.jpg
  |-- output
  |-- renderer.py
  |-- requirements.txt
  |-- tracker.py
  |-- tracker_rasterizer.py
  |-- util.py
  `-- video.py
  ```

## 自己写的脚本

```bash
pip install git+https://github.com/sword4869/mytree.git
```

