

---

```bash
$ service SERVICE start|stop|restart
```

# Common Services
## Apache
> Use

use Apache to set up your own web server, from which you could:
- serve up malware via cross­site scripting (XSS) to anyone who visits your site
- you could clone a website and redirect traffic to your site via abuse of the Domain Name System (DNS).

> Install


```bash
$ apt-get install apache2
```

> Service

```bash
$ service apache2 start|stop|restart
```
- configuration change:  
  when you make a **configuration change** to an application or service by altering its plaintext configuration file, you **need to restart** the service to capture the new configuration.

> Introduction

Apache's default web page is at `/var/www/html/index.html`.

Open the url `http://localhost` in web browser.


# OpenSSH

```bash
$ service ssh start
```

# MySQL

```bash
$ service mysql start
```