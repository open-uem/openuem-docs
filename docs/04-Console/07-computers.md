---
title: 💻 Computers
description: OpenUEM Computers
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    computers,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 💻 Computers

The computer’s view shows you the inventory of computers for your organization reported by the agents that have contacted OpenUEM and have been enabled.

OpenUEM agents have been designed to offer you concise information so you can focus on the relevant information about your IT assets.

## 1. Computers' list

The table shows you all the computers with information about its name, the OS version, the manufacturer and model and associated tags.

![Computers list](/img/console/computers_list.png)

:::tip
You can create tags by visiting the Admin -> Tags section

![Tag management](/img/console/tags.png)
:::

By clicking on the three dots button, you can show a menu with possible actions

![Tag management](/img/console/computers_actions.png)

If you click on the hostname or use the view action, you’ll visit the computer’s details.

:::tip
OpenUEM uses DNS and the reported active IP address to identify endpoints that are not located in our LAN, assuming that the associated endpoints are used by remote workers.

OpenUEM uses a plane icon to indicate that the agent is in a remote location. This is important because remote file browsing, remote assistance and WOL (Wake On Lan) are currently not possible as those endpoints are not reachable from the LAN.
:::

## 2. Computer's details

The information reported by an agent is distributed in several tabs so it’s easier for you to browse the information. Let’s see what is shown and what you can do.

### 2.1 Overview (🎯 0.7.0)

A new overview tab is available to summarize important information about your endpoint like the security status and an operating system briefing.

![Hardware](/img/console/computer_overview.png)

You can give also a description for the endpoint and the type of endpoint (desktop, laptop, tablet...)

:::info
From this view we can specify on which organization and site we want to have this endpoint
:::

### 2.2 Hardware

As the name suggests, you’ll have some hardware information about the manufacturer, model, serial number, processor and memory.

![Hardware](/img/console/hardware.png)

### 2.3 Operating System

Here, you’ll find information about the operating system like version, description, architecture, **the username that is logged in**, installation date and the last time the system was booted up.

![Operating system](/img/console/os.png)

### 2.4 Monitors

The monitors tab displays which monitors have been connected to the computer including the manufacturer, model and serial number.

![Monitors](/img/console/monitors.png)

### 2.5 Logical disks

This tab displays the logical disks that are available on the computer. You can check the label applied, the volume name, the file system type, the disk usage, the total size and the remaining space.

![Logical disks](/img/console/logical_disks.png)

Also, you can know the **BitLocker status** hovering the mouse over the icon.

:::tip
BitLocker status is retrieved using WMI and sometimes the query is flaky and can crash showing you an unknown status icon. If you need to know that information quick, you can visit the agents’ view and select the [**Force restart**](/docs/Console/agents#2-more-actions) action menu.
:::

Now, if you click on the icon in the File Browser icon, you’ll open a new window that allows you to browse the logical disk using an SFTP connection.

:::note
The connection between the console is secured thanks to two digital certificates. An SFTP certificate which its associated key it's stored in the console that is used to authenticate the connection, and a server certificate that it's stored in the agent an it's generated when the agent is admitted. See [Agents' life cycle](/docs/Console/agents#1-agents-life-cycle) to know more.
:::

The new window has two sections, a top action menu and a file list below.

![File browser](/img/console/sftp.png)

The top menu has these icons:

![File browser's top menu](/img/console/sftp_top_menu.png)

1. Go up one folder in the files’ tree
2. Create a new folder in the current folder
3. Refresh the files’ view for the current folder
4. Upload one file to the current folder
5. Download the selected files or folders. If only one file is selected, a file will be downloaded. If a folder is selected or several files are selected, a ZIP file will be downloaded.
6. Delete the file or the folder
7. Show the current folder’s path

If you want to create a new folder, you must give a name and confirm the action

![Create a folder](/img/console/create_folder.png)

If you want to upload a file, you must give use your web browser's file explorer and click the upload button

![Upload a file](/img/console/upload_file.png)

In the file browser’s section, you can scroll the different files and folders that are in the current folder. **If you click on the folder icon you can enter that folder**.

![File list](/img/console/file_list.png)

Also, next to each file or folder you can find the three dots button with a menu that gives you several actions to perform on that element:

- Open the folder
- Download the file or folder
- Rename the file or folder
- Remove the file or folder

![File list actions](/img/console/file_browser_actions.png)

### 2.6 Shares

This tab shows the resources being shared and exported by this computer

![Shares](/img/console/shares.png)

### 2.7 Network adapters

You can inspect the network adapters connected to a computer by visiting this tab. The agent reports the name of the adapter, its MAC address, the IP address, the subnet, the default gateway, if DHCP is enabled and the speed of the adapter.

![Network adapters](/img/console/network_adapters.png)

Also, if you move the mouse over the DNS icon you’ll get information about the DNS servers.

### 2.8 Printers

The list of printers connected to this computer is displayed in this tab. You get the printer’s name, the port’s name, if the printer is the default printer and if the printer is a network printer.

![Printers](/img/console/printers.png)

From version 0.7.0 onwards, and if agents are at least 0.6.0, you can set a printer as default or remove it from the endpoint

### 2.9 Software

OpenUEM agents:

- inspect the Windows registry to look for installed applications either they are installed on a computer level or by user
- use your Linux package manager (apt,zypper,dnf,pacman...) to check which desktop applications have been installed

![Software's tab](/img/console/software_tab.png)

You’ll find all the applications found with their name, version, publisher, installation date (if found) and an icon (if possible) that helps you to identify the vendor.

### 2.10 Deploy software

OpenUEM can deploy software to your computers automatically using Winget’s client in Windows or Flatpak in Linux:

- Winget is the Windows Package Manager that is available on Windows 11, modern versions of Windows 10, and Windows Server 2025 as a part of the App Installer
- Flatpak is a framework for distributing desktop applications across various Linux distributions. Flatpak is installed with OpenUEM if it's not installed directly by your Linux distribution.

:::warning
Winget should be ready for your host if it has been used for some time, but if you have a fresh installation of Windows 10, winget.exe may not be ready to use on that endpoint although it should be installed automatically in the following days. To get the WinGet executable quicker (winget.exe), you should first update Microsoft Store after opening it and then you may have to update the app called "App Installer". Visit [this link](https://www.microsoft.com/p/app-installer/9nblggh4nns1#activetab=pivot:overviewtab) to locate that app and update it
:::

:::danger
Due to a bug (2025/04/11) or [issue](https://github.com/microsoft/winget-cli/issues/5366) with Microsoft's CDN the WinGet client could not get the local copy of metadata queried by WinGet. If you encounter deployment errors, you may have to run `winget source update` to force WinGet to update its source
:::

You can search for an available package in Winget’s public repositories or Flatpak's [Flathub repository](https://flathub.org/). Depending on the agent's operating system the right repository will be searched.

![Deploy software from the computers view](/img/console/computer_deploy_software.png)

Then, click on the add package icon to request the installation.

![Request package installation](/img/console/click_to_install.png)

The request will be send to the agent no matter if the computer is not running as it will receive the request as soon as its agent contact. You'll see that the package installation is in progress.

![Installation in progress](/img/console/installation_in_progress.png)

After a few minutes you’ll see that the package has been installed and that the installation date is shown.

:::warning
If the package could not be installed you'll see an error message next to the package. In that case you can try to reinstall the package clicking on the green pakage icon or remove the package using the red package icon.
:::

You can **update** that package later **or remove** it from the computer using the available icons.

![Package deployed](/img/console/package_deployed.png)

### 2.11 Remote Assistance

OpenUEM allows you to open a remote assistance session using VNC or RDP if these requirements are fulfilled:

- The computer has a supported VNC/RDP server installed
- The agent received the server.cer and server.key files when the [agent was admitted](/docs/Console/agents#1-agents-life-cycle) or when you requested to [regenerate them](/docs/Console/agents#2-more-actions)

:::note
If you connect to a Windows machine, VNC will be used as, right now, OpenUEM cannot use RDP shadow connections to see what the connected user is doing.

If you connect to a Linux machine, there are two possibilities. If the machine uses a Wayland display server, RDP will be used to provide the remote assistance. If the machine uses an X11 display server, VNC will be used.  
:::

If RDP/VNC connectivity is available, you can click on the **Open session in a new tab** button.

![Remote assistance](/img/console/remote_assistance.png)

In the new tab that is opened you must click now on the **Connect** button.

![VNC Connect](/img/console/vnc_connect.png)

In a Windows endpoint, this action will trigger, if the agent is ready and running, that the user’s default browser will open a new window showing a PIN which is the password that is set every time we connect with the VNC server.

![VNC PIN shown to the user in Windows](/img/console/vnc_pin_shown.png)

In a Linux endpoint a notification message will be shown (with a 30 seconds timeout).

![VNC PIN shown to the user in Linux](/img/console/linux_vnc_pin_shown.png)

The user must inform us which is the pin to open the VNC/RDP session.

:::tip
By default, OpenUEM shows the PIN to the user to offer privacy to the user, as we can’t know the pin unless the user tells us. If you prefer to skip this step you can go to Admin -> General Settings -> Request VNC PIN to user and disable this behavior. In any case, the PIN which is the VNC password will be changed every time a connection is made. See the [Security section](/docs/Introduction/security) for more information.

![VNC Settings](/img/console/vnc_settings.png)
:::

# 2.11.1 VNC session

In a VNC connection we must introduce the pin in the field available and click on the **Authenticate** button.

![Introduce the PIN](/img/console/introduce_pin.png)

If the VNC connection can be established, we’ll see the user’s screen.

![VNC session connected](/img/console/vnc_connected.png)

When we are finished we can click on the **Disconnect** button and click the on the **Close window** button.

:::tip
If the VNC screen is too big, try to zoom on your browser or press F11 to get your browser in full screen.
:::

:::warning
The NoVNC proxy may have an issue with the services mmc snap-in (maybe you can find this issue with other snap-ins). If you click on that window you may stop seeing the mouse cursor moving through the page. In that case, it's enough to fix the issue if the services windows is minimized.
:::

# 2.11.2 RDP session (🎯 0.5.0)

When an RDP session is initiated, the session will not appear in your web browser, you must click on the **Generate RDP connection** to download an RDP file that will allow you to connect to the remote desktop using the pin as the password to connect with the openuem user.

![RDP Session warning](/img/console/rdp_session_warning.png)

:::note
RDP uses the TCP 3389 port by default, make sure that your firewall doesn't block this port
:::

The RDP file can be used with your favorite RDP client like Windows Remote Desktop and Remmina by clicking on it, or from the CLI with clients like XFreeRDP...

![RDP Session with XFreeRDP](/img/console/rdp_session_xfreerdp.png)

:::danger
Once you decide to close the RDP session, you’ll close your RDP client’s window but note that to perform an ordered close (the RDP service is stopped, the credentials are cleared, the service is disabled...) you’ll have to click on the **Disconnect** button.
:::

### 2.12 Power Management

You can schedule a computer's power off or reboot action. Also, you can send a Wake On LAN magic packet that will boot the computer up, if the computer is in the same LAN as the console server, and if the computer has been configured to boot with WOL (UEFI setting and/or updated network drivers).

![WOL](/img/console/wol.png)

### 2.13 Notes

You can take notes about your endpoint using a simple markdown editor. Insert the note, use the buttons to add headings, set bolder text… and save it.

![Notes](/img/console/notes.png)

When you visit the note again, you’ll see the preview so if you want to change its contents click on the **Edit** button.

![Edit Note](/img/console/edit_note.png)

### 2.14 Metadata

You can save custom information associated with an endpoint using metadata.

:::note
You must create metadata first in Admin -> Metadata adding a name for metadata and an optional description.

![Admin -> Metadata](/img/console/admin_metadata.png)
:::

Once you create metadata, you’ll see it is available for every endpoint.

![Metadata](/img/console/metadata.png)

## 3. PDF/CSV Report

You can generate a PDF/CSV report that lists your computers and preserves your filters and sorting using the PDF/CSV buttons in the section header.

![Computers report button](/img/console/computers_report_button.png)

Here’s a sample of the generated report.

![Computers report sample](/img/console/computers_report_sample.png)
