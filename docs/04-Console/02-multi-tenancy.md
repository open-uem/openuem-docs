---
title: 🏙 Multi-Tenancy
description: Multi-Tenancy OpenUEM
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    unified endpoint manager,
    remote monitoring and management,
    multi-tenancy,
  ]
---

# 🏙 Multi-Tenancy

From 0.7.0 version onwards, OpenUEM supports multi-tenancy. This means that you can have different organizations and sites on the same OpenUEM installation.

A default organization is created when OpenUEM is installed with a default site. An organization must have at least one site.

:::note
If you're migrating from a 0.6.0 release or lower, a default organization and site will be created and you'll find all your agents migrated
:::

The console has a way to select which organization and site you want to work on. You can find a menu to select both at the top of the page.

![Org and site selector](/img/console/tenant_selector.png)

An agent is associated with a site which is associated with an organization. When you install an OpenUEM agent you can specify the organization ID and site ID, so the agent is associated when the agent connects with OpenUEM servers for the first time. If no organization and site is selected, the default organization and site will be used. Later you can change an association from the console’s agent’s overview.

An organization can have its own settings that are inherited from OpenUEM global settings. You can use the menu at the top to choose the settings that you want to modify.

![Select config](/img/console/global_config_selector.png)

Also, an organization can have its own tags and metadata and profiles belong to a specific site

:::note

If you change an endpoint from one organization to another note that tags and metadata applied will be deleted

:::
