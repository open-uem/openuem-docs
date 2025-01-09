---
title: 📲 Update Agents
description: OpenUEM Update Agents
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    admin,
    update agents,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 📲 Update Agents

You can update OpenUEM agents as soon as a new version is released.

OpenUEM console checks if there’s a new release for your agents and displays a message for you to know.

![Up-to-date agent version](/img/console/up-to-date.png)

:::info
The console checks for a new release every 6 hours and every time the service is started
:::

If there’s a new release, a message like this will be displayed.

![New agent release available](/img/console/new_release_available.png)

To update your agents, you must select the agents that you want to update using the check boxes or the Select All button, and then select a release from the “Select a release” dropdown menu.

![Preparing to update agent](/img/console/preparing_to_update_agent.png)

By clicking the **Update** button, you’ll have the chance to select if you want to install the update as soon as possible or delay the update to the time you specify.

![Confirm update agents](/img/console/confirm_update_agents.png)

Once you confirm the update action, a request to update the agent will be sent and the state of the update action will be set to **Pending**

![Agent pending update](/img/console/agent_pending_update.png)

If the update can’t be performed, we’ll see an error and a description of the error.

![Agent update error](/img/console/update_errors.png)

Otherwise, we’ll see that the task was successful.

![Agent update successful](/img/console/update_agent_successful.png)

:::tip
If for any reason, you need to roll back to a previous version, you should only select the previous release from the dropdown menu and perform the update action.
:::

You’ll see a warning next to every agent that is running a version that can be updated.

![Agent can be updated warning](/img/console/agent_can_be_updated_warning.png)

Finally, in the dashboard you’ll see a message about how many agents are outdated and how many can be upgraded:

- Outdated agents are agents that are not running the highest release version that at least one of your agents is running
- Agents that can be upgraded are those agents that are not running the latest release according to the information gathered from the Internet for a specific channel.

![Agents that can be updated](/img/console/agents_that_can_be_updated.png)
