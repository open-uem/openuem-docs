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

## 0.7.1

Released: 18/05/2025

- Fix: possible race condition in new installations. If database is not ready, the initial settings are not created and then the default organization is created without settings causing a panic
- Fix: apply global settings should not be seen in Global Settings, only for organization general settings

## 0.7.0

Released: 15/05/2025

:::warning
This release introduces multi-tenancy so you should familiarize yourself with the organization and sites

Please read the following sections:

- [Multi-tenancy introduction](/docs/04-Console/02-multi-tenancy.md)
- [OpenUEM Config Types](/docs/05-Administration/00-config-types.md)
- [Organizations Section](/docs/05-Administration/10-organizations.md)
- [Sites Section](/docs/05-Administration/11-sites.md)

If you're migrating OpenUEM from a previous version, all the agents will be associated to a default organization and site that will be created when OpenUEM console starts

:::

- Feat: console must support multi-tenancy
- Feat: printers can be removed or set as default
- Feat: create initial endpoint overview
- Feat: add redhat based icons for reports
- Fix: don't count linux endpoints for dashboard antivirus status
- Fix: missing agents stream retention policy
- Fix: add new brand icons
- Feat: detect and add rocky linux logo
- Fix: add site to profile search and remote all sites for profile select
- Fix: computers report text align
- Feat: tags and metadata should use site, fix overview select
- Fix: notes url in computers navbar
- Fix: windows console issues with linux agent sftp
- Fix: unknown system update setting status is now treated

## 0.6.0 (26/04/2025)

- Feat: When you delete and agent from the console you can choose to: delete the agent from the console and uninstall it from the endpoint, delete the agent from the console but keep it installed in the endpoint, uninstall the agent but keep the information in the console
- Feat: Export views in CSV format
- Fix: package search for WinGet tasks
- Feat: add dark theme
- Feat: filter agents that haven't contacted in the las 24 hours
- Feat: setting to admit automatically agents
- Feat: setting to enable/disable remote agents detection
- Feat: show RAM memory info (used slots)
- Feat: show monitor's week and year of manufacture
- Feat: setting to enable/disable remote assistance globally
- Feat: setting to enable/disable SFTP service globally
- Feat: agent's settings view to enable/disable remote assistance, sftp service and/or debug mode per agent
- Fix: notifications and certifications messages are redelivered when Docker containers are regenerated

## 0.5.1 (11/04/2025)

- Fix: an issue with Microsoft CDN was preventing WinGet database file to be downloaded, a new URL has been added as a workaround

## 0.5.0 (08/04/2025)

- Feat: support for Linux endpoints (Debian/Ubuntu right now) from agent version 0.4.0
- Feat: enable or disable debug mode for an agent on demand
- Feat: show percentage for disk usage for the current bar
- Feat: several UI enhancements

## 0.4.1 (20/03/2025)

- Fix: fix minor issues with database when saving a profile issue and deployment info from winget

## 0.4.0 (19/03/2025)

- Feat: support for profiles that allows admins to apply several configurations to different endpoints for OpenUEM server versions (agent 0.3.X must be installed to apply profiles)

## 0.3.0 (27/02/2025)

- Feat: add version info and icon if new release. [Issue](https://github.com/open-uem/openuem-console/issues/22)
- Feat: identify which agents are reporting from a remote location. [Issue](https://github.com/open-uem/openuem-console/issues/25)
- Feat: add a new general setting to add a tag for recently admitted agents. [Issue](https://github.com/open-uem/openuem-console/issues/19)
- Feat: add filtering capabilities for endpoint software table. [Issue](https://github.com/open-uem/openuem-console/issues/32)
- Fix: some issues while filtering and paginating (method not allowed messages or asking to repeat recent action). [Issue](https://github.com/open-uem/openuem-console/issues/26)
- Security: update esbuild (3rd party lib) due to security bug. [Issue](https://github.com/open-uem/openuem-console/issues/35)

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

## 0.1.0 (16/01/2025)

This is the first release of the OpenUEM server.
