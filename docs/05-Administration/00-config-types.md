---
title: ⚙️ Config Types
description: Configuration types
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    admin,
    sessions,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# ⚙️ Config Types

From version 0.7.0 onwards, multi-tenancy is supported and that has an impact on OpenUEM configuration as the configuration is split between Global and Organization config. You can select on which configuration you’re working thanks to the selector located at the top of the screen:

![Select config](/img/console/global_config_selector.png)

OpenUEM has a global configuration that has the following sections:

- Users: you can manage the users that can log in to OpenUEM
- Organizations: you can create new organizations
- Sessions: you can view and manage the OpenUEM users’ sessions
- SMTP: the SMTP server settings
- General Settings: here you can manage some settings that will be global and inherited for every organization on OpenUEM
- Update servers: you can update servers’ components if a new release is available
- Certificates: you can manage OpenUEM certificates

![Global config](/img/console/global_config.png)

On the other hand, organizations have the following sections:

- Tags: you can create the tags that can be associated with endpoints
- Sites: you can manage the sites that belong to an organization
- General settings: you can manage the settings that will be used for your organization and that, by default, are inherited from the global settings
- Metadata: you can create your own metadata that can be added to your endpoints to provide more information
- Update agents: you can update the agents associated with the current organization if a new release is available

![Org config](/img/console/org_config.png)

In the following sections we’ll describe the different configuration tabs
