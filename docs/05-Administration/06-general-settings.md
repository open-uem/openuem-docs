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

:::note
The **Apply Global Settings** will overwrite the organization’s settings with the global settings
:::

![General settings](/img/console/general_settings.png)

Right now, here’s the table of settings and the default value

| Setting                       | Description                                                                                                                                                                                                                                                | Default value |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Country                       | Default country for user registration                                                                                                                                                                                                                      | ES            |
| NATS Timeout                  | Default NATS request timeout in seconds                                                                                                                                                                                                                    | 20            |
| Max Upload Size               | Max upload size for files expressed in GB (G), MB (M) or KB (K)                                                                                                                                                                                            | 512M          |
| User cert duration            | The duration in years of the user certificate                                                                                                                                                                                                              | 1             |
| Automatic Refresh             | Some pages refresh automatically. Set the refresh period in minutes                                                                                                                                                                                        | 5             |
| Session Lifetime              | Session lifetime in minutes. Once that time expires the session will be closed                                                                                                                                                                             | 1440          |
| Updates channel               | Channel used to check and download OpenUEM's updates                                                                                                                                                                                                       | Stable        |
| Agents report frequency       | Agents will send new reports periodically according to the frequence set in minutes                                                                                                                                                                        | 60            |
| Request VNC PIN to user       | When a VNC session starts, it's required to ask the user the PIN that is shown in the screen                                                                                                                                                               | true          |
| Add a tag to admitted agents  | When an agent is admitted add the following tag to it automatically                                                                                                                                                                                        | no tag        |
| Profile application frequency | Agents will apply endpoints profiles according to the frequence set in minutes                                                                                                                                                                             | 30            |
| Use WinGet                    | WinGet will be used to install packages in Windows endpoints. If you don't have Windows agents set this value to false (🎯 Version 0.5.0)                                                                                                                  | true          |
| Use Flatpak                   | Flatpak will be used to install packages in Linux endpoints. If you don't have Linux agents set this value to false (🎯 Version 0.5.0)                                                                                                                     | true          |
| Use Flatpak                   | HomeBrew will be used to install packages in MacOS endpoints. If you don't have MacOS agents set this value to false (🎯 Version 0.8.0)                                                                                                                    | true          |
| Disable SFTP                  | SFTP will be disabled globally for every agent (🎯 Version 0.6.0)                                                                                                                                                                                          | No            |
| Disable Remote Assistance     | Remote Assistance is disabled globally for every agent (🎯 Version 0.6.0)                                                                                                                                                                                  | No            |
| Detect remote agents          | OpenUEM will mark as remote agents to those agents with a reported IP address that doesn't match the IP address resolved by DNS (🎯 Version 0.6.0)                                                                                                         | No            |
| Admit agents automatically    | OpenUEM will admit automatically agents without waiting for the admin to admit them. Note that you'll have to request to generate certificates for the agent from the agent's actions menu if you want to connect using SFTP or VNC/RDP (🎯 Version 0.6.0) | No            |
