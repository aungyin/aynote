---
title: 'Basic Git Commands'
description: 'Basic Git Commands'
---

# Basic Git Commands
Practical and Basic Git Command.

### Git log
Reference log
```bash
git reflog
```
### Git branch
Rename branch
```bash
git branch -m old_name new_name
```

Delete branch
```bash
git branch -d branch_name
```

Reset/Change upstream branch
```bash
git branch -u branch_name
```

Previous branch
```bash
git checkout -
```


### Git reset
Unstage file
```bash
git reset HEAD file_name
```

Undo commits
```bash
git reset --hard HEAD (or) git reset --hard

git reset --hard HEAD^

git reset --hard HEAD~2
```

Undo a hard reset
```bash
git reset --hard HEAD@{1}
```

Undo a merge or pull
```bash
# keep local changes
git reset --merge ORIG_HEAD
# discard local changes
git reset --hard ORIG_HEAD
```



### Git clean
Step 1. Dry run
```bash
# show number of file to delete
git clean -n
```

Step 2. Delete
```bash
# delete file
git clean -f
```

Bonus: Delete untracked directory
```bash
# delete hidden file and directory
git clean -fd
```