- [1. install](#1-install)
- [2. file](#2-file)
- [3. folder](#3-folder)
- [4. 问题](#4-问题)



---

用于下载谷歌云盘，wget太复杂，还是gdown好。

## 1. install
```bash
pip install gdown
```
## 2. file
```bash
# https://drive.google.com/drive/folders/1TxsSzPhZsJNijIXPINv05IUWhG3vBU-X?usp=drive_link
gdown --fuzzy 'https://drive.google.com/file/d/1tbCQADTM8AtZSLtjHQhjlQgsHjDXJ38z/view?usp=sharing'
gdown 1tbCQADTM8AtZSLtjHQhjlQgsHjDXJ38z
gdown https://drive.google.com/uc?id=1tbCQADTM8AtZSLtjHQhjlQgsHjDXJ38z
```
## 3. folder
```bash
# https://drive.google.com/drive/folders/1TxsSzPhZsJNijIXPINv05IUWhG3vBU-X?usp=drive_link
gdown https://drive.google.com/drive/folders/1TxsSzPhZsJNijIXPINv05IUWhG3vBU-X?usp=drive_link -O ./datasets --folder
```

## 4. 问题

这是代理的问题。
```
(ldm) lab@eleven:~/project/DECA$ gdown https://httpbin.org/ip -O ip.json
Traceback (most recent call last):
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/connectionpool.py", line 700, in urlopen
    self._prepare_proxy(conn)
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/connectionpool.py", line 996, in _prepare_proxy
    conn.connect()
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/connection.py", line 364, in connect
    self.sock = conn = self._connect_tls_proxy(hostname, conn)
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/connection.py", line 499, in _connect_tls_proxy
    socket = ssl_wrap_socket(
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/util/ssl_.py", line 453, in ssl_wrap_socket
    ssl_sock = _ssl_wrap_socket_impl(sock, context, tls_in_tls)
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/util/ssl_.py", line 495, in _ssl_wrap_socket_impl
    return ssl_context.wrap_socket(sock)
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/ssl.py", line 513, in wrap_socket
    return self.sslsocket_class._create(
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/ssl.py", line 1071, in _create
    self.do_handshake()
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/ssl.py", line 1342, in do_handshake
    self._sslobj.do_handshake()
ssl.SSLEOFError: [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1007)

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/requests/adapters.py", line 489, in send
    resp = conn.urlopen(
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/connectionpool.py", line 787, in urlopen
    retries = retries.increment(
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/util/retry.py", line 592, in increment
    raise MaxRetryError(_pool, url, error or ResponseError(cause))
urllib3.exceptions.MaxRetryError: HTTPSConnectionPool(host='httpbin.org', port=443): Max retries exceeded with url: /ip (Caused by SSLError(SSLEOFError(8, '[SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1007)')))

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/home/lab/miniconda3/envs/ldm/bin/gdown", line 8, in <module>
    sys.exit(main())
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/gdown/cli.py", line 156, in main
    filename = download(
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/gdown/download.py", line 161, in download
    res = sess.get(url, stream=True, verify=verify)
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/requests/sessions.py", line 600, in get
    return self.request("GET", url, **kwargs)
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/requests/sessions.py", line 587, in request
    resp = self.send(prep, **send_kwargs)
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/requests/sessions.py", line 701, in send
    r = adapter.send(request, **kwargs)
  File "/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/requests/adapters.py", line 563, in send
    raise SSLError(e, request=request)
requests.exceptions.SSLError: HTTPSConnectionPool(host='httpbin.org', port=443): Max retries exceeded with url: /ip (Caused by SSLError(SSLEOFError(8, '[SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1007)')))
```