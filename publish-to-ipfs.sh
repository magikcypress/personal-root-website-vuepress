#!/usr/bin/env bash

release_url=https://github.com/magikcypress/personal-root-website.git

if [ -d "/home/cyp/personal-root-website" ]
then
    cd /home/cyp/personal-root-website/
    git pull
else
    echo -e "\e[32m>> Downloading git repo ...\e[0m"
    git clone ${release_url}
fi

cd /home/cyp/personal-root-website/docs/src/.vuepress/

echo -e "\e[32m>> Publishing directory to IPFS...\e[0m"
hash=$(ipfs add -r -Q dist)
publish=$(ipfs name publish $hash --allow-offline)
publishCID=$publish | awk '{print $3}' | sed 's/.$//'
ipfs name resolve $publishCID

#echo "https://gateway.ipfs.io/ipfs/$hash"
echo "https://ipfs.io/ipfs/$hash"