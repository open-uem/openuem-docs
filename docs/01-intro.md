---
title: Home
description: An Open-Source Unified Endpoint Manager that is self-hosted and lets you manage your IT assets thanks to its agents
keywords:
  [
    IT assets,
    inventory,
    uem,
    rmm,
    unified endpoint manager,
    remote monitoring and management,
  ]
sidebar_position: 1
---

# Welcome to OpenUEM

OpenUEM is an **open-source [unified endpoint manager](https://en.wikipedia.org/wiki/Unified_endpoint_management)** which keeps an inventory of your IT assets reported by agents installed on your endpoints. OpenUEM is a **self-hosted** solution.

This project could also be named OpenRMM as it shares many features with a [Remote Monitoring and Management](https://en.wikipedia.org/wiki/Remote_monitoring_and_management) tool, but the name was already picked.

# Why OpenUEM?

OpenUEM has [features](/docs/Introduction/features) that could categorize it as:

- An IT assets inventory
- A unified endpoint management tool (UEM)
- A remote monitoring and management tool (RMM)
- A mobile device management tool (MDM)

There are many tools out there that do those things, private or open source, so why another tool?

Well, why another car model, why another IA, why another programming language? Because there are different points of view and ways to approach a similar need.

OpenUEM tries to offer a new way to answer the question that we, as sysadmins, face every day: how can I do my job easier?

I have been a sysadmin for several years and the networks I’ve managed can be considered small to medium-sized. The organizations that I worked with either had no budget, so you were on your own, or were forced to buy expensive tools that were underused and too big for real needs.

OpenUEM is an open-source project that you can use for free. OpenUEM is based on open-source or free tools and protocols that are battle-tested or backed up by companies. You can use VNC or RDP for remote assistance, SFTP to transfer files, Windows information is gathered thanks to WMI, Linux information is gathered using hwinfo, Windows apps and settings are managed using Winget…, Linux apps can be installed with Flatpak, MacOS apps can be installed with HomeBrew... All managed by OpenUEM web console.

If you are the IT administrator of a small company, you may not have spare equipment to install a management tool. If in the future your network grows, you may be concerned about how to migrate the functionality. OpenUEM can be installed in a humble desktop machine with Windows 10 Home, Debian/Ubuntu Linux, RedHat/Fedora/AlmaLinux/RockyLinux or any Docker powered environment. If you run a medium-sized or large company, you can use beefier machines and share the load as OpenUEM has been designed to have [distributed components](/docs/Introduction/architecture).
