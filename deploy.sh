#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'solmp.vercel.app' > CNAME

# cat CNAME

#repo_name='solmp.github.io'
repo_name='vdoing'

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:solmp/${repo_name}.git
else
  Date=$(date '+%Y%m%d%H%M%S')
  echo $Date
  msg='GitHub Actions Deploy'
  githubUrl=https://solmp:${GITHUB_TOKEN}@github.com/solmp/${repo_name}.git
  git config --global user.name "solmp"
  git config --global user.email "solmp163@163.com"
fi

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl main:gh-pages # 推送到github gh-pages分支
