---
title: ⚙️ General Settings
description: OpenUEM General Settings
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    admin,
    settings,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# ⚙️ General Settings

OpenUEM has many settings that you, as an administrator, can tweak. Just enter the new value and click the disk icon to save it.

![General settings](/img/console/general_settings.png)

Right now, here’s the table of settings and the default value

| Setting                      | Description                                                                                  | Default value |
| ---------------------------- | -------------------------------------------------------------------------------------------- | ------------- |
| Country                      | Default country for user registration                                                        | ES            |
| NATS Timeout                 | Default NATS request timeout in seconds                                                      | 20            |
| Max Upload Size              | Max upload size for files expressed in GB (G), MB (M) or KB (K)                              | 512M          |
| User cert duration           | The duration in years of the user certificate                                                | 1             |
| Automatic Refresh            | Some pages refresh automatically. Set the refresh period in minutes                          | 5             |
| Session Lifetime             | Session lifetime in minutes. Once that time expires the session will be closed               | 1440          |
| Updates channel              | Channel used to check and download OpenUEM's updates                                         | Stable        |
| Agents report frequency      | Agents will send new reports periodically according to the frequence set in minutes          | 60            |
| Request VNC PIN to user      | When a VNC session starts, it's required to ask the user the PIN that is shown in the screen | true          |
| Add a tag to admitted agents | When an agent is admitted add the following tag to it automatically (🎯 Version 0.3.0)       | no tag        |
