
`+`, `-`, `*`, `/`, `%`.

wrong use

```bash
echo n1+n2              # n1+n2
echo 3+4                # 3+4
```


```bash
echo $(( n1 + n2 ))     # 7
echo $(( n1+n2 ))       # 7
echo $(( n1+ n2 ))      # 7
echo $(( n1 +n2 ))      # 7
```

```bash
echo $(expr $n1 + $n2)  # 7
echo $(expr $n1+$n2)    # 3+4
echo $(expr $n1+ $n2)   # expr: syntax error: unexpected argument ‘4’
echo $(expr $n1 +$n2)   # expr: syntax error: unexpected argument ‘+4’
```
