---
title: 🏭 Profiles
description: OpenUEM profiles
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    profiles,
    task automation,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# Profiles

OpenUEM profiles allows you to group several configuration tasks that will be applied to your **Windows endpoints by defining a desired state**. Profiles will be available for Linux agents soon.

Right now, you can install or uninstall packages with WinGet, manage registry keys, local users and local groups.

You’ll find the profiles section clicking on the main navigation bar icon.

![Profile's icon](/img/console/profiles_icon.png)

## Create a new profile

The first step is to create a new profile giving it a descriptive name

![Create a new profile](/img/console/profiles_new.png)

Now, **select on which endpoints you want this profile to be applied to**. You can select all the endpoints, those endpoints that have one of the selected tags or no endpoints at all. In this example we’re selecting all the endpoints that have the Human Resources tag.

![Select profile application](/img/console/profiles_application.png)

## Add tasks to a profile

**A profile is a group of tasks that you want to be applied by the agents to the endpoints**. You must add some tasks to define the desired state for your endpoint.

:::info
The tasks that you create will be executed in order, and if one of those tasks fail, the agent will try to apply the rest of the defined tasks as the target is to reach your desired state
:::

Start by adding a task that creates a registry entry. You must give a description and then select a task’s type and then a task’s subtype. Now, enter the registry key path and add the task to the profile.

![New registry task](/img/console/profiles_new_registry_task.png)

Once the task is added you’ll see a table with the profile’s tasks. If you want to remove a task, you only need to click on the three dots button and select Delete.

![Profile's tasks list](/img/console/profiles_task_list.png)

If you want to edit the task you can click on the task’s name, but you can only change the task's description, and the settings associated with the current task.

![Edit a task](/img/console/profiles_edit_task.png)

Add another task. This time we are installing Adobe Acrobat from WinGet’s repositories. Once you add the description and select the right task, you only must introduce the first letters of the software that you want to install and select it. You can click on the X to remove your selection and start again.

![Another task](/img/console/profiles_add_another_task.png)

## Applying the profile

Once your profile is ready, **OpenUEM agents will check, every 30 minutes, if new profiles are available to apply**. If new profiles are ready the agent will apply them using [WinGet’s configuration option.](https://learn.microsoft.com/en-us/windows/package-manager/configuration/)

You can increase the frequency that agents check for profiles in [Admin -> General Settings](/docs/05-Administration/06-general-settings.md).

## Checking if the profile was applied successfully

As the profile may apply to several endpoints you must be aware of problems found to apply them.

In the profiles view you’ll see if some errors were found with a warning sign.

![Profiles, errors found](/img/console/profiles_errors_found.png)

If you click on that warning sign, you’ll open a new table showing the endpoints that found problems applying the profile and the error messages next to the task’s type.

![Profiles, error detail](/img/console/profiles_error_detail.png)

## Notes about tasks

### 1. Install/Uninstall MSI packages

If you want to install or uninstall an MSI file using WinGet, you’ll need at least two things:
1)	The path to the MSI. Specify the path to the MSI package as a string. This can be the path to an MSI file on the local machine, the path to an MSI package on a UNC drive, or a web URI where the MSI package can be downloaded from. If this property's value isn't a web URI, it must end with .msi
2)	The product ID that is associated with the MSI. This value is a GUID and is the identifying number used to find the package. Usually, you install the package first and then you can look for the product ID in the registry, but the following Powershell command will provide you with the GUID (BinaryName) column:

```
PS C:\Users\ouem> Get-AppLockerFileInformation .\Downloads\AutoFirma_64_v1_8_3_installer.msi | select -ExpandProperty Publisher | select ProductName,BinaryVersion,BinaryName

ProductName BinaryVersion BinaryName
----------- ------------- ----------
AUTOFIRMA   1.8.3.0       {B20DDDFE-4854-4D4D-9723-2F9761437532}
```

### 2. Execute PowerShell scripts

When you add a task to execute a PowerShell script **you can choose between running the script only once or running it every time the endpoint applies the profile**. If you choose to **run the script once** an entry will be created in the agent’s config file **if the script was successfully executed**, if not **it will run again the next time the profile is applied**.
