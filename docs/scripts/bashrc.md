## wsl
```
# clash proxy
# export http_proxy=http://172.23.208.1:7890
# export https_proxy=https://172.23.208.1:7890
alias proxyon="export http_proxy=http://172.23.208.1:7890 && export https_proxy=https://172.23.208.1:7890" 
alias proxyoff="unset http_proxy && unset https_proxy"
alias proxytest="curl -vv http://google.com && curl -vv https://google.com"

# pack a conda environment
alias conda_pack_env='conda env list && echo "please input:" && read env && conda activate $env && conda env list && conda install conda-pack -y && conda pack -n $env --ignore-missing-files'

```
## server

```

# list all running jobs
alias sq='squeue -u `whoami`'

# salloc A40 GPU with specific numbers
alias sa='echo "how many gpus" && read num && salloc -p A40 -N1 -n6 --gres=gpu:$num -t 48:00:00'

# activate conda environment
alias en='ls ~/envs && echo "please input:" && read env && source ~/envs/$env/bin/activate'

# unpack a conda environment
# 因为会报错 `tar: Exiting with failure status due to previous errors`，所以分成前后两条命令
alias conda_unpack_env1='mkdir -p ~/envs/downloads && echo "[+] ls ~/envs" && ls ~/envs && echo "[+] ls" && ls && echo "please input the env name:" && read env && mkdir -p ~/envs/$env && tar -xvf $env.tar.gz -C ~/envs/$env'
alias conda_unpack_env2='echo "please input the env name:" && read env && mv $env.tar.gz ~/envs/downloads && echo "[+] ls ~/envs" && ls ~/envs && echo "" && echo "[+] ls ~/envs/downloads" && ls ~/envs/downloads && source  ~/envs/$env/bin/activate'
```