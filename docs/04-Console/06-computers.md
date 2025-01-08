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

## 2. Computer's details

The information reported by an agent is distributed in several tabs so it’s easier for you to browse the information. Let’s see what is shown and what you can do.

### 2.1 Hardware

As the name suggests, you’ll have some hardware information about the manufacturer, model, serial number, processor and memory.

![Hardware](/img/console/hardware.png)

### 2.2 Operating System

Here, you’ll find information about the operating system like version, description, architecture, **the username that is logged in**, installation date and the last time the system was booted up.

![Operating system](/img/console/os.png)

### 2.3 Monitors

The monitors tab displays which monitors have been connected to the computer including the manufacturer, model and serial number.

![Monitors](/img/console/monitors.png)

### 2.4 Logical disks

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

### 2.5 Shares

This tab shows the resources being shared and exported by this computer

![Shares](/img/console/shares.png)

### 2.6 Network adapters

You can inspect the network adapters connected to a computer by visiting this tab. The agent reports the name of the adapter, its MAC address, the IP address, the subnet, the default gateway, if DHCP is enabled and the speed of the adapter.

![Network adapters](/img/console/network_adapters.png)

Also, if you move the mouse over the DNS icon you’ll get information about the DNS servers.

### 2.7 Printers

The list of printers connected to this computer is displayed in this tab. You get the printer’s name, the port’s name, if the printer is the default printer and if the printer is a network printer.

![Printers](/img/console/printers.png)

### 2.8 Software

OpenUEM agents inspect the Windows registry to look for installed applications either they are installed on a computer level or by user.

![Software's tab](/img/console/software_tab.png)

You’ll find all the applications found with their name, version, publisher, installation date (if found) and an icon (if possible) that helps you to identify the vendor.

### 2.9 Deploy software

OpenUEM can deploy software to your computers automatically using Winget’s client.

Winget is the Windows Package Manager is available on Windows 11, modern versions of Windows 10, and Windows Server 2025 as a part of the App Installer

You can search for an available package in Winget’s public repositories.

![Deploy software from the computers view](/img/console/computer_deploy_software.png)

Then, click on the add package icon to request the installation.

![Request package installation](/img/console/click_to_install.png)

The request will be send to the agent no matter if the computer is not running as it will receive the request as soon as its agent contact. You'll see that the package installation is in progress.

![Installation in progress](/img/console/installation_in_progress.png)

After a few minutes you’ll see that the package has been installed and that the installation date is shown.
You can **update** that package later **or remove** it from the computer using the available icons.

![Package deployed](/img/console/package_deployed.png)

### 2.10 Remote Assistance

OpenUEM allows you to open a remote assistance session using VNC if two requirements are fulfilled:

- The computer has a supported VNC server installed
- The agent received the server.cer and server.key files when the agent was admitted

If VNC connectivity is available, you can click on the **Open session in a new tab** button.

![Remote assistance](/img/console/remote_assistance.png)

In the new tab that is opened you must click now on the **Connect** button.

![VNC Connect](/img/console/vnc_connect.png)

This action will trigger, if the agent is ready and running, that the user’s default browser will open a new window showing a PIN which is the password that is set every time we connect with the VNC server.

![VNC PIN shown to the user](/img/console/vnc_pin_shown.png)

The user must inform us which is the pin to open the VNC session. We must introduce the pin in the field available and click on the **Authenticate** button.

![Introduce the PIN](/img/console/introduce_pin.png)

:::tip
By default, OpenUEM shows the PIN to the user to offer privacy to the user, as we can’t know the pin unless the user tells us. If you prefer to skip this step you can go to Admin -> General Settings -> Request VNC PIN to user and disable this behavior. In any case, the PIN which is the VNC password will be changed every time a connection is made. See the [Security section](/docs/Introduction/security) for more information.

![VNC Settings](/img/console/vnc_settings.png)
:::

If the VNC connection can be established, we’ll see the user’s screen.

![VNC session connected](/img/console/vnc_connected.png)

When we are finished we can click on the **Disconnect** button and click the on the **Close window** button.

### 2.11 Wake on LAN

You can send a Wake On LAN magic packet that will boot the computer up, if the computer is in the same LAN as the console server, and if the computer has been configured to boot with WOL (UEFI setting and/or updated network drivers).

![WOL](/img/console/wol.png)

### 2.12 Notes

You can take notes about your endpoint using a simple markdown editor. Insert the note, use the buttons to add headings, set bolder text… and save it.

![Notes](/img/console/notes.png)

When you visit the note again, you’ll see the preview so if you want to change its contents click on the **Edit** button.

![Edit Note](/img/console/edit_note.png)

### 2.13 Metadata

You can save custom information associated with an endpoint using metadata.

:::note
You must create metadata first in Admin -> Metadata adding a name for metadata and an optional description.

![Admin -> Metadata](/img/console/admin_metadata.png)
:::

Once you create metadata, you’ll see it is available for every endpoint.

![Metadata](/img/console/metadata.png)
