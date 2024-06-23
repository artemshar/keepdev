---
title: "Windows notes & cheat sheet"
summary: "OS Windows notes"
date: "June 23 2024"
draft: false
tags:
- Cheat Sheet
- OS 
---

## Find your public IP address

```bash
curl icanhazip.com
```

## Get local IP addresses by using PowerShell
```PowerShell
Get-NetIPAddress -AddressFamily IPV4
```

## Сheck which program is using a port

PowerShell

1. **Displays all connections and listening ports to find a necessary.**
```
netstat -ano
```

or use the command:
```
netstat -ano | findstr :port_number
```
replace port_number with the number of the port you want to check.

2.  **Finding Process with PID in Task Manager**
* Once you have the PID from the netstat command, open Task Manager (Ctrl + Shift + Esc).
* Go to the "Details" tab.
* Click on "View" in the menu bar and select "Columns."
* Check "PID (Process Identifier)" to display the PID column.
* Look for the PID identified in the netstat command. This will show you the program associated with that PID.

## Folder where the hosts file is located (default)

WSL

```bash
cat /mnt/c/Windows/system32/drivers/etc/hosts
```
PowerShell
```PowerShell
Get-Content C:\Windows\System32\drivers\etc\hosts
```