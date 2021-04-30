---
title: 'Git Commands & Config'
description: 'A Collection of Git Commands and Configs'
---

# Git Commands & Config
Practical and Basic Git Command.

## Git log
### Reference log
```bash
git reflog
```
## Git branch
### Rename branch
```bash
git branch -m old_name new_name
```

### Delete branch
```bash
git branch -d branch_name
```

### Reset/Change upstream branch
```bash
git branch -u branch_name
```

### Previous branch
```bash
git checkout -
```


## Git reset
### Unstage file
```bash
git reset HEAD file_name
```

### Undo commits
```bash
git reset --hard HEAD (or) git reset --hard

git reset --hard HEAD^

git reset --hard HEAD~2
```

### Undo a hard reset
```bash
git reset --hard HEAD@{1}
```

### Undo a merge or pull
```bash
# keep local changes
git reset --merge ORIG_HEAD
# discard local changes
git reset --hard ORIG_HEAD
```



## Git clean
### Step 1. Dry run
```bash
# show number of file to delete
git clean -n
```

### Step 2. Delete
```bash
# delete file
git clean -f
```

### Bonus: Delete untracked directory
```bash
# delete hidden file and directory
git clean -fd
```

---

## Git Config
```bash
# email
git config --global user.name 'Namikase Minato'
git config --global user.email 'minatonamikase@gmail.com'
# proxy
git config --global http.proxy http://proxy.example.com:8080
git config --global https.proxy http://proxy.example.com:8080
# linefeed
git config --global core.autocrlf false
# syntax highlight
git config --global color.ui true
# editor
git config --global core.editor "code --wait"
# encoding japanese
git config --global core.quotepath false
```
---

## Git Alias
```bash
# .bashrc
alias gp='git pull'
alias gf='git fetch'
alias gfp='git fetch -p'
alias gs='git status'
alias gss='git status --short'
alias gsu='git status -u'
alias gba='git branch -a'
alias gco='git checkout'
alias gcob='git checkout -b'
alias gaa='git add .'
alias gcm='git commit -m'
alias gamend='git commit -a --amend'
alias grf='git reset HEAD'
alias grc='git reset HEAD --hard'
alias gcoa='git checkout -- .'
alias gpcb='git push origin HEAD'
alias gprevb='git checkout -'
alias glo='git log --graph --oneline --decorate'
alias gclbr='git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d'
alias gcfd='git clean -fd'
```