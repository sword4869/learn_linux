## wsl
```
# clash proxy
# export http_proxy=http://172.23.208.1:7890
# export https_proxy=https://172.23.208.1:7890
alias proxyon="export http_proxy=http://172.23.208.1:7890 && export https_proxy=https://172.23.208.1:7890" 
alias proxyoff="unset http_proxy && unset https_proxy"
alias proxytest="curl -vv http://google.com && curl -vv https://google.com"

# pack a conda environment
alias conda_pack_env='conda env list && read -p "[+] please input:" env && ls && read -p "[+] check if $env.tar.gz already exists: tap any for continue" ans && conda activate $env && conda env list && conda install conda-pack -y && conda pack -n $env --ignore-missing-files'
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
alias conda_unpack_env1='echo "[+] check if ~/envs/xxx already exists" && ls ~/envs && echo "[+] ls" && ls && read -p "please input the env name:" env && mkdir -p ~/envs/$env && tar -xvf $env.tar.gz -C ~/envs/$env'
alias conda_unpack_env2='read -p "please input the env name:" env && mv $env.tar.gz ~/envs/$env && echo "[+] ls ~/envs" && ls ~/envs && source  ~/envs/$env/bin/activate'
```