#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#push_addr=$(git remote get-url --push origin) # git提交地址，需要先连接到远端仓库
commit_info=$(git describe --all --always --long)
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=gh-pages          # 推送的分支
repo_name='solmp-vdoing-blog-template'

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path
# 增加CNAME
# echo 'solmp.vercel.app' > CNAME
# cat CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg="deploy, $commit_info"
  push_addr=git@github.com:solmp/${repo_name}.git
else
  Date=$(date '+%Y%m%d%H%M%S')
  echo "$Date"
  msg="GitHub Actions Deploy, $commit_info"
  push_addr=https://solmp:${GITHUB_TOKEN}@github.com/solmp/${repo_name}.git
  git config --global user.name "solmp"
  git config --global user.email "solmp163@163.com"
fi

git init
git add -A
git commit -m "${msg}"
git push -f "$push_addr" HEAD:$push_branch # 推送到github gh-pages分支

cd -
#rm -rf $dist_path
