---
title: Agents
description: OpenUEM Agents Release Notes
keywords:
  [
    IT assets,
    inventory,
    uem,
    rmm,
    agent,
    release notes,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# Agents

## 0.6.0

Released: 15/05/2025

:::warning
BREAKING CHANGE in Debian

Existing Debian/Ubuntu agents must be reinstalled manually either using the .deb package or using OpenUEM's apt repo. The reason is that a new dialog will ask for the Organization ID and Site ID that you want OpenUEM to be associated with (should be Org ID 1 and Site ID 1 for the default org and site created automatically by OpenUEM)

:::

:::danger
Due to a bug found in the agent updater, you won't be able to update 0.5.0 agents from the console (0.4.0 agents and lower are not affected) and you'll have to update the agents by hand or using a script to deploy it. The 0.6.0 windows installer can be run to upgrade the 0.5.0 agent. You can also use the debian repository to use apt on the affected endpoints to update the debian/ubuntu agent.
:::

- Feat: get processor info if more than one windows processor is found
- Feat: agents can set a default printer and remove a printer for Linux and Windows
- Feat: add tenant and site to INI and report
- Feat: use dnf to get system update info

## 0.5.0

- Feat: enable or disable remote assistance service on demand
- Feat: enable or disable SFTP service on demand
- Feat: uninstall agent on demand
- Feat: retrieve RAM memory slots info and manufacture dates for displays
- Fix: uninstall of openuem-agent-worker removed accidentally when openuem-agent is uninstalled on Linux
- Fix: support for Debian 11 and Ubuntu 20.04 agents

## 0.4.0

:::info
OpenUEM Linux agents require at least OpenUEM Server 0.5.0 to show Linux specific information
:::

- Feat: support for Debian/Ubuntu agents
- Feat: enable or disable debug mode for an agent on demand

## 0.3.1

- Feat: Add Microsoft Visual C++ Redistributable required in clean Windows installations required by WinGet

## 0.3.0

- Feat: support for profiles that allows admins to apply several configurations to different endpoints for OpenUEM server versions >= 0.4.0

## 0.2.1

- Fix: Add updated URL for Agent messages CSS

## 0.2.0

- Feat: Agent should reboot or shutdown the computer

## 0.1.0

This is the first release of the OpenUEM agent.
