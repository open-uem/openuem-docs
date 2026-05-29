---
title: ✅ Features
description: OpenUEM Features
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    features,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# ✅ Features

OpenUEM is a self-hosted solution.

Right now, you can do the following with OpenUEM:

- Agents and Server components can be installed on **Windows**, **Debian based distributions** (Debian, Ubuntu and Linux Mint), **RedHat based distributions** (Fedora, Alma Linux, Rocky Linux and RedHat) hosts and endpoints. **MacOS agents** are available for both Intel and Apple Silicon machines.
- **Multi-tenancy is supported**. You can create multiple organizations and sites under the same OpenUEM installation. A default organization and site are created when OpenUEM is installed or migrated
- View **what is installed on your endpoints** (hardware model, memory, physical disks, logical disks, shared resources, printers, network adapters, software…)
- Know if your Windows systems have all the **windows updates** applied and browse the updates history
- Know if your Linux systems have **pending security updates**
- Check if your **windows antivirus systems** are enabled and up to date
- Show if **BitLocker** is enabled on your logical disks, display the **recovery key** automatically for encrypted drives, and identify whether a drive is **fixed or removable**
- **Install Windows applications** using Microsoft’s **Winget** and its repositories
- **Install Linux applications** using **Flatpak** and the **FlatHub** repository
- **Install MacOS applications** using **Brew**
- **Browse, download and upload files** contained in your endpoints logical disks using SFTP
- Offer **remote assistance** to your users thanks to **VNC**, **RDP** (for Gnome using a Wayland display server) or **RustDesk**
- Install, register and manage NetBird clients (🎯 Version 0.11.0)
- **Create configuration profiles with automated tasks that can be applied to your Windows endpoints**. You can select packages to install or uninstall using WinGet and manage registry keys, local users and local groups. Also you can run basic PowerShell scripts and manage MSI packages. Use these profiles to perform post-install tasks
- **Create configuration profiles with automated tasks that can be applied to your Linux endpoints**. You can select packages to install or uninstall using Flatpak, manage local users and local groups and execute basic shell scripts. Use these profiles to perform post-install tasks
- **Create configuration profiles with automated tasks that can be applied to your MacOS endpoints**. You can select packages to install or uninstall using Brew, manage local users and local groups and execute basic shell scripts. Use these profiles to perform post-install tasks
- Authenticate users that log in the console using a [supported Identity Provider](/docs/Console/intro#openid-connect) (Authelia, Authentik, Keycloak or Zitadel)
- Wake computers in your LAN using **WOL**
- Schedule a computer’s power off or reboot action
- **Tag your assets** and use the tags for filtering your inventory
- Add **your own metadata** to your assets so you can align OpenUEM to your organization’s needs
- **Take notes** about your assets
- Generate a PDF/CSV report for agents, computers, security or software views
- Remove printers or set default printers
- Identify which of your endpoints are in a remote location
- OpenUEM is translated into English, Spanish and German, but you can contribute to [translate it](/docs/09-Development/02-i18n.md) to your favorite language.
