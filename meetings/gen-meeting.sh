git checkout -b minutes-$(date +'%Y-%m-%d') || git checkout minutes-$(date +'%Y-%m-%d')
git reset --hard upstream/main
git fetch upstream
git rebase upstream/main
curl -L https://docs.google.com/document/d/$1/export?format=txt >$(date +"%Y-%m-%d").md
dos2unix $(date +"%Y-%m-%d").md
npx markdownlint-cli --fix $(date +"%Y-%m-%d").md
sed -i  's/ *$//' $(date +"%Y-%m-%d").md
git branch |grep \*

