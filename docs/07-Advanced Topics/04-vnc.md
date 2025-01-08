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

- [TightVNC](https://www.tightvnc.com/)
- [UltraVNC](https://uvnc.com/)
- [TigerVNC - winvnc](https://tigervnc.org/)

This page explains some of the recommendations to install these programs on your endpoints.

If you find a better way to install these programs, please do [open a discussion on GitHub](https://github.com/open-uem/openuem-console/discussions) and help us to improve the documentation.

## TightVNC

From the [official website](https://www.tightvnc.com/):

> TightVNC is a free and Open Source remote desktop software that lets you access and control a computer over the network. With its intuitive interface, you can interact with the remote screen as if you were sitting in front of it. You can open files, launch applications, and perform other actions on the remote desktop almost as if you were physically there.

You can download the TightVNC server from its [webpage](https://www.tightvnc.com/download.php)

OpenUEM recommends the following command to install TightVNC in a way only the server part is installed, and it doesn't work as a service, so it's only run when OpenUEM console requires it to run, and it is stopped once the VNC window is closed.

```(command-line)
msiexec /i tightvnc-2.8.85-gpl-setup-64bit.msi /quiet /norestart ADDLOCAL="Server" SERVER_REGISTER_AS_SERVICE=0
```

:::note
The deployment of TightVNC using WinGet from OpenUEM doesn't work as the package available at WinGet's repositories installs TightVNC as a service and that's not compatible with the way that OpenUEM tries to run the VNC server.
:::

## UltraVNC

From the [official website](https://uvnc.com/):

> UltraVNC is a powerful, easy to use and free - remote pc access softwares - that can display the screen of another computer (via internet or network) on your own screen. The program allows you to use your mouse and keyboard to control the other PC remotely. It means that you can work on a remote computer, as if you were sitting in front of it, right from your current location.

You can download UltraVNC server from its [webpage](https://uvnc.com/downloads/ultravnc.html) or better you can deploy it to your endpoints using OpenUEM's package deployment powered by WinGet.

![Deploy UltraVNC](/img/console/deploy_install_search_package.png)

## TigerVNC

From the [official website](https://tigervnc.org/):

> TigerVNC is a high-performance, platform-neutral implementation of VNC (Virtual Network Computing), a client/server application that allows users to launch and interact with graphical applications on remote machines. TigerVNC provides the levels of performance necessary to run 3D and video applications, and it attempts to maintain a common look and feel and re-use components, where possible, across the various platforms that it supports. TigerVNC also provides extensions for advanced authentication methods and TLS encryption

TigerVNC’s server support for Windows is unmantained although our tests have been successful. However, we haven’t found an easy way to install TigerVNC silently or use WinGet (the package exists but doesn’t install).

To use TigerVNC with OpenUEM, download the installer from [Sourceforge](https://sourceforge.net/projects/tigervnc/files/stable/1.14.1/) and search for the **tigervnc-winvnc-X.Y.Z.exe** or the **tigervnc64-winvnc-X.Y.Z.exe** installer that contains the VNC server.

Run the installer. You'll get the following warning:

![TigerVNC warning](/img/console/tigervnc_warning.png)

Click on **Next** to continue with the installation

![TigerVNC next to install](/img/console/tigervnc_next.png)

Accept the license agreement

![TigerVNC accept license agreement](/img/console/tigervnc_accept_agreement.png)

Keep the suggested installation folder

![TigerVNC accept suggested folder](/img/console/tigervnc_folder_installation.png)

Click **Next** to accept the creation of program menu’s shortcuts

![TigerVNC accept shortcuts](/img/console/tigervnc_shortcuts.png)

Finally, and the most important thing to do, uncheck the register TigerVNC as a system service option, and click **Next** to install TigerVNC.

![TigerVNC uncheck register service](/img/console/tigervnc_uncheck_tasks.png)
