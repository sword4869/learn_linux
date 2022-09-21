
- [1. Introduction](#1-introduction)
- [2. Configurate logs](#2-configurate-logs)
  - [2.1. Rule](#21-rule)
- [3. Clean logs](#3-clean-logs)
  - [3.1. Automatical](#31-automatical)
  - [3.2. Handy](#32-handy)
- [4. Disable logging](#4-disable-logging)
---

# 1. Introduction

Linux uses a daemon called `syslogd` to automatically log events on your computer. Several variations of `syslog`, including `rsyslog` and `syslog-ng`.

Debian comes with `rsyslog` by default.

# 2. Configurate logs

The `rsyslog` configuration file is located at `/etc/rsyslog.conf`.

```bash
$ vim /etc/rsyslog.conf
```
## 2.1. Rule

Navigate down to below line 50, you’ll find the **Rule** ssection. This is about system automatical log.



```bash
auth,authpriv.*     /var/log/auth.log
```

The Syntax is `facility.priority action`.
- facility
  the program, such as `mail`, `kernel`, or `lpr`.
- priority
  what kind of messages to log for that program.
- action
  the location where the log will be sent.
  Generally, log files are sent to the `/var/log` directory


|facility|function|
|-|-|
|auth/authpriv | Security/authorization messages |
|cron |Clock daemons |
|daemon|Other daemons|
|kern|Kernel messages |
|lpr|Printing system|
| mail|Mail system |
|user|Generic user­level messages|
|`*`| refers to all facilities|
|`facility1,facility2` |You can select more than one facility by listing them separated by a comma|

|priority|level| should deprecate(√)|
|-|-|-|
|debug|lowest prioriy|still use|
|info||still use|
|notice||still use|
|warning||√|
|warn||√|
|error||√|
|err||√|
|crit||still use|
|alert||still use|
|emerg||√|
|panic|highest priority|√|
|`*`|all priorities are logged||

When you specify a priority, messages of that priority and higher are logged.


# 3. Clean logs

## 3.1. Automatical

`logrotate`(Log rotation) is the process of regularly archiving log files by moving them to some other location, leaving you with a fresh log file. That archived location will then get cleaned up after a specified period of time.

You can configure the `logrotate` utility to choose the regularity of your log rotation with the `/etc/logrotate.conf`.

```bash
$ vim /etc/logrotate.conf
```
At the end of each rotation period, the log files are **renamed** and **pushed toward** the end of the chain of logs as a new log file is created, replacing the current log file.
- rename:
  `/var/log.auth` will become `/var/log.auth.1`, then `/var/log.auth.2`, and so on.
- push forward
  If you rotate logs every four weeks and keep four set of backups, `/var/log.auth.3` become `/var/log.auth.4`, but `/var/log.auth.4` will be **deleted** rather than being pushed to `/var/log/auth.5`.

```bash
$ locate /var/log/auth.log.*
/var/log/auth.log.1 
/var/log/auth.log.2 
/var/log/auth.log.3 
/var/log/auth.log.4
```
## 3.2. Handy

Easily deleted files can generally be recovered by a skilled forensic investigator.

Advanced way is firstly overwrite the file several times before deletion.
```bash
$ shred FILE
$ shred -f -n 10 /var/log/auth.log.*
```
`shred` options:
- overwrite times
  By default, shred overwrites 4 times.
  `-n NUM`, lets you choose how many times to overwrite the files.
- permission
  changes the permissions on the files to allow overwriting if a permission change is necessary

Now, when you see the content of the file, it is full of shit.

# 4. Disable logging

When a hacker takes control of a system, they could immediately disable logging to prevent the system from keeping track of their activities.

```bash
$ >service rsyslog stop
```