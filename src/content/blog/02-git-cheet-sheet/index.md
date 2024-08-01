---
title: "Git, cheet sheet"
summary: "How to do something in git, helpers"
date: "May 18 2024"
draft: false
tags:
- Cheat Sheet
- Git
---

## Repository

### How to know current repository

```bash
git remote -v
```

### How to set remote repository (github)

```bash
git remote add origin git@github.com:[username]/[repository-name].git
```

### How to update remote repository

```bash
git remote set-url <remote_name> <remote_url>

// example
git remote set-url origin git@github.com:user/repository.git
```


## Branches

### Delete a git branch both locally and remotely

```bash
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```

## Commits 
### Reset last commit --soft HEAD~1

[https://www.git-tower.com/learn/git/faq/undo-last-commit/](https://www.git-tower.com/learn/git/faq/undo-last-commit/)

```bash
git reset --soft HEAD~1
```

Note the --soft flag: this makes sure that the changes in undone revisions are preserved. After running the command, you'll find the changes as uncommitted local modifications in your working copy.

### Update name & email in a last commit

```bash
git commit --amend --author="username <username@gmail.com>"
```

### If you lost your changes

Try to find your HEAD with:
```bash
git reflog
```
git only garbage collects after about a month or so unless you explicitly tell it to remove newer blobs.

[https://stackoverflow.com/questions/5473/how-can-i-undo-git-reset-hard-head1](https://stackoverflow.com/questions/5473/how-can-i-undo-git-reset-hard-head1#:~:text=%2D%2Dhard%20discards%20uncommitted%20changes,to%20restore%20them%20through%20git.)

### Rebase & Squash

1. See git log, for example:
	```bash
	git log --graph --oneline
	``` 
	or
	```bash
	git log -5
	``` 
2. Choose a needed commit
	```bash
	git rebase -i [commit id]
	```

3. Edit: 
- first commit ```pick ...```
- second commit ```s``` or ```squash```
- next commit ```s``` or ```squash```
- etc.
4. Rename final commit message and save
5. ```git push --force``` if you already pushed commits

## GIT configuration

### Global Configuration
This command lists the global configuration settings. These settings are specific to the user and are stored in the user's home directory (typically in a file located at ~/.gitconfig).
```bash
git config --list --global
``` 
or
```bash
cat ~/.gitconfig
```
Global settings apply to all repositories for the current user.

### Local Configuration
This command lists the local configuration settings for the current repository. These settings are stored in the .git/config file within the repository's directory.

```bash
git config --list --local
```
or
```bash
git cat .git/config
```
Local settings override global settings for that particular repository.

### Default Configuration

This command lists the effective configuration settings by combining settings from all available levels: local, global, and system.

```bash
git config --list
```

If a setting is specified in multiple levels, the local level takes precedence over the global level, which in turn takes precedence over the system level.


### Check / Update user name / email

#### Global

```bash
// Check
git config --global user.name
git config --global user.email 

// Update
git config --global user.name "yourusername"
git config --global user.email "youremail@example.com"

```

#### Local

```bash
// Check 
git config user.name
git config user.email

// Update
git config user.name "yourusername"
git config user.email "youremail@example.com"
```


## Aliases

For example, global, add aliases to ```~/.gitconfig``` file:

```bash
[alias]
        st = status
        co = checkout
        br = branch
        logg = log --graph --oneline
        rup = remote update --prune
        setanotheruserconfig = "!git config user.name \"Your Local Name\" && git config user.email \"your.local.email@example.com\""
```

## Fix the warning: LF will be replaced by CRLF in <filename> | Windows | VSCode terminal
```bash
git config --global core.autocrlf false
```

## How to add a new SSH keys

- [Use SSH keys to communicate with GitLab](https://docs.gitlab.com/ee/user/ssh.html)
- [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Don't forget regiser your new key ;)
```bash
ssh-add c:/Users/YOU/.ssh/id_ed25519
```
or

```bash
eval $(ssh-agent -s)
ssh-add <directory to private SSH key>
```


## How to rename a branch

```git branch -m old-name new-name```

## How to rollback to a commit

> **! Make sure you have a backup branch with commits you want to remove**

1. Check the history of the dev branch: You can see the commit history to identify the commit you want to rollback to.
```bash
git log
```
2. Use the git reset command to rollback to the desired commit. This command can work in different modes, but for removing the commits entirely, use the --hard option.
```bash
git reset --hard <commit-hash>
```

3. Force push to update the remote branch:
```bash
git push origin <branch-name> --force
```