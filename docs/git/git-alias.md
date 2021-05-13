---
title: 'Git Alias'
description: 'Git Alias'
---
# Git Alias
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