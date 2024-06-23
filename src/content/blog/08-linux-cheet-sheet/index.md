---
title: "Linux notes & cheat sheet"
summary: "OS Linux notes & cheat sheet"
date: "June 23 2024"
draft: false
tags:
- Cheat Sheet
- OS 
---



## Folder & Files

### How to know a folder size

```bash
du -hs /mnt/d/foldername
```

### Check last update of a file

```bash
date -r README.md
```



## Services 

## Restart a service

```bash
sudo systemctl restart [service_name]
```

```bash
sudo systemctl restart nginx
```


## Access Control

### Create a new user (Linux)

```bash
sudo adduser [username]
```

## Times

### Configure server Timezone (Linux)

```bash
sudo dpkg-reconfigure tzdata
```

### See all commands of 'date'

```bash
man date
```

