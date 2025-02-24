---
title: Servers
description: OpenUEM Server Release Notes
keywords:
  [
    IT assets,
    inventory,
    uem,
    rmm,
    server,
    release notes,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# Server

## 0.2.1 (16/02/2025)

- Fix: console could not find the WinGet database (index.db) in Docker when searching for WinGet packages
- Fix: an error was shown about CGO_ENABLED when searching for WinGet packages
- Fix: authentication port was overwritten with console port in server update task

## 0.2.0 (15/02/2025)

- Feat: Agent should reboot or shutdown the computer. A new Power Management section allows you to power off or reboot a computer (added to existing WOL option)
- Feat: Add minimal reports to export OpenUEM information to PDF files. You can export PDF reports for agents, computers, security and software views
- Fix: remove files from download file that are older than X minutes

## 0.1.1 (24/01/2025)

- Fix: if an error occurs when the initial configuration is generated, create a job to try to generate it again. In some situations, Windows services may have problems to get DB credentials from the Windows Credential Manager and with this job we make sure that the config will be generated in a couple of minutes. Affects: console, ocsp responder, agent worker, notification worker, cert manager worker, server updater.
- Fix: if several agents are selected and we choose to enable, disable or admit them, an error will shown if the required initial state is not valid. Affects: console
- Fix: table agents, go to page 1 after we change values that are filtered like status keeping the filters applied. Affects: console
- Fix: enable, disable and admit actions are not pushed to history to avoid back and forth issues

## 0.1.0

This is the first release of the OpenUEM server.
