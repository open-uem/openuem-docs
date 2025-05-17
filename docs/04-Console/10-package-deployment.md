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

You can deploy software packages to Windows endpoints using [WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/) and to Linux endpoints using [Flatpak](https://flatpak.org/).

OpenUEM downloads daily the database of packages available at WinGet and FlatHub repositories so you can search for those packages.

:::warning
Winget should be ready for your host if it has been used for some time, but if you have a fresh installation of Windows 10, winget.exe may not be ready to use on that endpoint although it should be installed automatically in the following days. To get the WinGet executable quicker (winget.exe), you should first update Microsoft Store after opening it and then you may have to update the app called "App Installer". Visit [this link](https://www.microsoft.com/p/app-installer/9nblggh4nns1#activetab=pivot:overviewtab) to locate that app and update it
:::

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
