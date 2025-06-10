---
title: 🏢 Sites
description: OpenUEM Certificates
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    admin,
    sites,
    multi-tenancy,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🏢 Sites

:::tip
This section is only available for an organization’s config
:::

An organization must have at least one site. In this section you can create new sites, edit them or delete them.

![Sites' list](/img/console/sites_list.png)

:::warning
OpenUEM requires that one site of the organization is set as default. Agents that have no settings about the organization and site will be placed in the default organization and site, so note that you can’t remove the default site.
:::

If you click on the **Add site** button the new site page will be displayed. A site requires a name and a domain name that will be used as the DNS suffix when contacting endpoints for VNC/RDP and SFTP file browsing. Also, you can specify if the site is the default site.

![New organization](/img/console/new_site.png)

If you click on the three dots button, a menu will appear that allows you to edit the site (you can click on the site's name too).

![Site's actions](/img/console/site_actions.png)

:::tip
You can import a CSV file with sites to ease the creation. These sites will be associated with the current organization. The CSV file will have a row for each site, with its name and the domain's name.
:::
