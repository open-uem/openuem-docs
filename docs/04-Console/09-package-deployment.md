---
title: 📦 Package deployment
description: OpenUEM Package deployment view
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    package deployment,
    winget,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 📦 Package deployment

You can deploy software packages to Windows endpoints using WinGet.
OpenUEM downloads daily the database of packages available at WinGet’s repository so you can search for those packages.

## Install packages

Introduce a text to search for packages. Click on the package icon to select the package to install.

![Deploy search package](/img/console/deploy_install_search_package.png)

Then, select the endpoints where you want to install the package.

![Deploy select hosts to install package](/img/console/deploy_select_host_to_install_package.png)

A request to install the package will be sent to OpenUEM agents.

![Deploy request sent](/img/console/deploy_successful.png)

:::info
If an agent hasn’t contacted recently, the request will be sent to the agent as soon as it contacts thanks to the NATS server that stores pending messages.
:::

## Uninstall packages

The process to uninstall a package from several hosts is like installing a package.

Introduce a text to search for packages. Click on the package icon to select the package to uninstall.

![Deploy search package to uninstall](/img/console/deploy_select_to_uninstall.png)

Then, select the endpoints that will receive the request to uninstall the package. The request will be sent to OpenUEM agents.

![Uninstall request sent](/img/console/deploy_package_uninstall_requested.png)
