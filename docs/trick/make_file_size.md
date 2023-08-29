```bash
$ dd if=/dev/zero of=test.bin bs=3G count=1

# 但实际上是2G
$ ls -lh
总计 2.0G
-rw-rw-r-- 1 lenovo lenovo 2.0G  5月 29 13:17 model.bin
```

```bash
# fallocate [-o offset] -l length [-n] filename
fallocate -l 3.4G test.bin
```

It can be used to allocate reserve memory in the laboratory server, so you don't face situations where there is no memory available when you need to run codes.