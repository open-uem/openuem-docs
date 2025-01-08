---
title: 🕹️ VNC
description: How to configure supported VNC servers with OpenUEM
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    vnc,
    tightvnc,
    ultravnc,
    tigervnc,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🕹️ VNC

OpenUEM allows you to initiate remote assistance sessions using VNC if your endpoint has a supported VNC server.
Right now, OpenUEM supports the following three freeware or open-source programs:

- [TightVNC](https://www.tightvnc.com/download.php)
- [UltraVNC](https://uvnc.com/downloads/ultravnc/159-ultravnc-1-4-3-6.html)
- [TigerVNC - winvnc](https://sourceforge.net/projects/tigervnc/files/stable/1.14.1/)

This page explains some of the recommendations to install these programs on your endpoints.

## TightVNC

From the official website:

>     TightVNC is a free and Open Source remote desktop software that lets you access and control a computer over the network. With its intuitive interface, you can interact with the remote screen as if you were sitting in front of it. You can open files, launch applications, and perform other actions on the remote desktop almost as if you were physically there.

You can download the TightVNC server from its [webpage](https://www.tightvnc.com/download.php)

OpenUEM recommends the following command to install TightVNC in a way only the server part is installed, and it doesn't work as a service, so it's only run when OpenUEM console requires it to run, and it is stopped once the VNC window is closed.

```(command-line)
msiexec /i tightvnc-2.8.85-gpl-setup-64bit.msi /quiet /norestart ADDLOCAL="Server" SERVER_REGISTER_AS_SERVICE=0
```
