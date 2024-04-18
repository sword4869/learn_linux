systemctl 逐渐取代了 service

```bash
service 服务名 [start | stop | restart | reload | status]
```

```bash
systemctl [start | stop | restart | reload | status | is-active] httpd.service

# 系统启动时自动启动服务：开启自启动、取消、查看是否
systemctl [enable | disable | is-enabled] httpd.service
```