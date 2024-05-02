
## 如何执行
mysql: 5.7, latest 8.4 都行

```bash
rm -rf /mydata/mysql

mkdir -p /mydata/mysql/log
mkdir -p /mydata/mysql/data
mkdir -p /mydata/mysql/conf/

cat << EOF > /mydata/mysql/conf/my.cnf
[mysqld]
skip-name-resolve
character_set_server=utf8
server-id=1010
innodb_fast_shutdown=1
EOF
```
```bash
# 把 docker-compose.yml，mysql-5.7-Dockerfile，mysql-schema.sql都放在这里
cd /mydata

docker-compose up
```

PS：[mysql-schema.sql](mysql-schema.sql) 是 [nacos官方给的](https://github.com/nacos-group/nacos-docker/blob/master/example/image/mysql/5.7/Dockerfile) + [插入nacos登录和密码](https://blog.csdn.net/m0_55435847/article/details/125292192)

## Q&A

mysql无须远程登录，本身就可以。
```bash
# 进入数据库，允许远程登录
[root@localhost mysql]# docker exec -it mysql mysql -uroot -p123

// mysql8之前
grant all privileges on *.* to 'root'@'%' identified by '123' with grant option;
flush privileges;

// mysql8
update user set host='%' where user='root';
flush privileges;


// 验证是否成功，去另一台机子，看是否可以登录上
mysql -h 192.168.150.3 -u root -p123
```