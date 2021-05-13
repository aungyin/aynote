---
title: 'Git Config'
description: 'Git Config'
---
# Git Config
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