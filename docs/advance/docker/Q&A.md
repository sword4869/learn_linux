[toc]

## Docker的底层技术

- **namespace**：
  - 每个容器都有自己的进程、网络、挂载、用户ID等**独立的空间**。

  - 保证了容器间、容器与主机间的隔离性。

- **cgroups**：
  - **分割root权限**成多个不同的能力
  - 容器只有必要的权限，从而降低了被攻击的风险。

## 具体操作

端口`-p`、挂载`-v`顺序：都是`本地: 容器`

