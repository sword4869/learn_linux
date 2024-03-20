import{_ as e,W as n,X as i,$ as s}from"./framework-586fce15.js";const l={},a=s(`<ul><li><a href="#1-install">1. install</a></li><li><a href="#2-file">2. file</a></li><li><a href="#3-folder">3. folder</a></li><li><a href="#4-%E9%97%AE%E9%A2%98">4. 问题</a></li></ul><hr><p>用于下载谷歌云盘，wget太复杂，还是gdown好。</p><h2 id="_1-install" tabindex="-1"><a class="header-anchor" href="#_1-install" aria-hidden="true">#</a> 1. install</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> gdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-file" tabindex="-1"><a class="header-anchor" href="#_2-file" aria-hidden="true">#</a> 2. file</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># https://drive.google.com/drive/folders/1TxsSzPhZsJNijIXPINv05IUWhG3vBU-X?usp=drive_link</span>
gdown <span class="token parameter variable">--fuzzy</span> <span class="token string">&#39;https://drive.google.com/file/d/1tbCQADTM8AtZSLtjHQhjlQgsHjDXJ38z/view?usp=sharing&#39;</span>
gdown 1tbCQADTM8AtZSLtjHQhjlQgsHjDXJ38z
gdown https://drive.google.com/uc?id<span class="token operator">=</span>1tbCQADTM8AtZSLtjHQhjlQgsHjDXJ38z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-folder" tabindex="-1"><a class="header-anchor" href="#_3-folder" aria-hidden="true">#</a> 3. folder</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># https://drive.google.com/drive/folders/1TxsSzPhZsJNijIXPINv05IUWhG3vBU-X?usp=drive_link</span>
gdown https://drive.google.com/drive/folders/1TxsSzPhZsJNijIXPINv05IUWhG3vBU-X?usp<span class="token operator">=</span>drive_link <span class="token parameter variable">-O</span> ./datasets <span class="token parameter variable">--folder</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-问题" tabindex="-1"><a class="header-anchor" href="#_4-问题" aria-hidden="true">#</a> 4. 问题</h2><p>这是代理的问题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(ldm) lab@eleven:~/project/DECA$ gdown https://httpbin.org/ip -O ip.json
Traceback (most recent call last):
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/connectionpool.py&quot;, line 700, in urlopen
    self._prepare_proxy(conn)
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/connectionpool.py&quot;, line 996, in _prepare_proxy
    conn.connect()
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/connection.py&quot;, line 364, in connect
    self.sock = conn = self._connect_tls_proxy(hostname, conn)
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/connection.py&quot;, line 499, in _connect_tls_proxy
    socket = ssl_wrap_socket(
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/util/ssl_.py&quot;, line 453, in ssl_wrap_socket
    ssl_sock = _ssl_wrap_socket_impl(sock, context, tls_in_tls)
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/util/ssl_.py&quot;, line 495, in _ssl_wrap_socket_impl
    return ssl_context.wrap_socket(sock)
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/ssl.py&quot;, line 513, in wrap_socket
    return self.sslsocket_class._create(
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/ssl.py&quot;, line 1071, in _create
    self.do_handshake()
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/ssl.py&quot;, line 1342, in do_handshake
    self._sslobj.do_handshake()
ssl.SSLEOFError: [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1007)

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/requests/adapters.py&quot;, line 489, in send
    resp = conn.urlopen(
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/connectionpool.py&quot;, line 787, in urlopen
    retries = retries.increment(
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/urllib3/util/retry.py&quot;, line 592, in increment
    raise MaxRetryError(_pool, url, error or ResponseError(cause))
urllib3.exceptions.MaxRetryError: HTTPSConnectionPool(host=&#39;httpbin.org&#39;, port=443): Max retries exceeded with url: /ip (Caused by SSLError(SSLEOFError(8, &#39;[SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1007)&#39;)))

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File &quot;/home/lab/miniconda3/envs/ldm/bin/gdown&quot;, line 8, in &lt;module&gt;
    sys.exit(main())
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/gdown/cli.py&quot;, line 156, in main
    filename = download(
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/gdown/download.py&quot;, line 161, in download
    res = sess.get(url, stream=True, verify=verify)
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/requests/sessions.py&quot;, line 600, in get
    return self.request(&quot;GET&quot;, url, **kwargs)
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/requests/sessions.py&quot;, line 587, in request
    resp = self.send(prep, **send_kwargs)
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/requests/sessions.py&quot;, line 701, in send
    r = adapter.send(request, **kwargs)
  File &quot;/home/lab/miniconda3/envs/ldm/lib/python3.10/site-packages/requests/adapters.py&quot;, line 563, in send
    raise SSLError(e, request=request)
requests.exceptions.SSLError: HTTPSConnectionPool(host=&#39;httpbin.org&#39;, port=443): Max retries exceeded with url: /ip (Caused by SSLError(SSLEOFError(8, &#39;[SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1007)&#39;)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[a];function r(d,t){return n(),i("div",null,o)}const u=e(l,[["render",r],["__file","gdown.html.vue"]]);export{u as default};
