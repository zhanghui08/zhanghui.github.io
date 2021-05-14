

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git push -f git@github.com:zhanghui08/zhanghui.github.io.git master
# 例如 git push -f git@github.com:koala-coding/blog.git master:gh-pages 
cd -