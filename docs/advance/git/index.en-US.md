---
title: Git
order: 9
nav:
  title: Advance
  order: 2
---

## Switch branch and remote warehouse association

```js
// 1.Pull remote branch origin/branch to local and create a new associated branch
git checkout -b newbranch origin/branch
// 2.Upload the local branch to the remote end, while associating the newbranch and the remote branch branch
git push --set-upstream origin newbranch:origin/branch
// 3.Associate local newbranch branches with remote branch branches
git branch --set-upstream-to=origin/branch newbranch
```

## Configure multiple git accounts using gum

```js
// Install
npm i -g @gauseen/gum

// List local configurations
gum list

// Apply
Usage: gum [options] [command]

Options:
  -V, --version               output the version number
  -h, --help                  display help for command

Commands:
  list                        List all the user config group
  set [options] <group-name>  Set one group for user config
    --name                    User name
    --email                   User email
  use [options] <group-name>  Use one group name for user config
    --global                  Git global config
  delete <group-name>         Delete one group
  help [command]              display help for command

// Usage examples
gum set github --name KinXpeng --email xxxx@163.com
```

## Save local changes when switching branches

```js
// Save the current uncommitted code
git stash

// Save the current uncommitted code and add comments
git stash save "备注的内容"

// List all records of stash
git stash list

// Delete all records of stash
git stash clear

// Apply the latest dash
git stash apply

// Apply the latest stash and then delete the record
git stash pop
```

## Switch branches and merge branches

```js
// Switch branches (commit current code before switching)
git checkout dev1

// Merge dev2 on dev1 and push it to the remote warehouse after merging
git merge dev2
git push
```

## Avoid duplicate password input when using HTTPS cloning

```js
// The first step is to execute the following command in the local repository to save the account and password to the git configuration file:
git config --global credential.helper store

// The second step is to enter the username and password once during the git operation of the HTTPS protocol.
// Afterwards, you can automatically use the saved account password for operations.

/* Or use the following method to save */
git config --global credential.helper manager-core
```

## Overwrite one branch of code over another branch

```js
git push origin dev1:dev2 -f
```
