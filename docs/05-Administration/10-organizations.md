---
title: 🌐 Organizations
description: Organizations
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    admin,
    organizations,
    multi-tenancy,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🌐 Organizations

:::tip
This section is only available for the Global config
:::

OpenUEM can have different organizations on the same installation. In this section you can create new organizations, edit them or delete them.

![Organization's list](/img/console/org_list.png)

:::warning
OpenUEM requires that one organization is set as default. Agents that have no settings about the organization and site will be placed in the default organization and site, so note that you can’t remove the default organization.
:::

If you click on the **Add organization** button the new organization page will be displayed. An organization requires a name and a name for the initial default site. Also, you can specify if the organization is the default organization.

![New organization](/img/console/new_org.png)

If you click on the three dots button, a menu will appear that allows you to edit the organization (you can click on the organization’s name too), manage the sites that belong to the organization or delete it.

![Organization's actions](/img/console/org_actions.png)

:::tip
You can import a CSV file with organizations to ease the creation. The CSV file will have a row for each organization, with its name and the name for initial site.
:::
