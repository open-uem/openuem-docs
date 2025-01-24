---
title: 🚀 Update Servers
description: OpenUEM Update Servers
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    admin,
    update servers,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🚀 Update Servers

OpenUEM servers can be updated from the console. The console will send requests for updates to the server updater’s services.

The console checks if a new release is available, and will display a message:

![Server update available](/img/console/server_update_available.png)

The table shows the different servers that are part of your OpenUEM environment. You can check which components are installed on each server by moving the mouse over the icons.

![Server components](/img/console/server_components.png)

If you want to update a server, just select the servers that you want to update, either by clicking on the checkbox next to the server’s name or by clicking on the “Select All” button, select the release from the dropdown menu and click on the “Update” button.

Then, you must confirm when you want to install the update, as soon as possible or on a specific date and time.

![Confirm server update](/img/console/confirm_server_update.png)

A request to update the server will be sent and the state will be set to “Pending”

![Server update pending](/img/console/server_update_pending.png)

When the update process starts on the server, the state will change to “In Progress”

![Server update pending](/img/console/server_update_in_progress.png)

If the update has been successful, services will be restarted and you’ll see the “Success” state.

![Server update success](/img/console/server_update_success.png)

:::note
If you’re connected to the console, you may lost connection for a while, please be patient till the services are restarted
:::

If you’re in the need of rolling back to a previous version, you may select the release from the dropdown menu and update the server again.

:::warning
If you're using Docker, this feature won't work. In order to update the components, use docker compose:

```(bash)
docker compose pull
docker compose --profile openuem up --force-recreate -d --build
```

:::
