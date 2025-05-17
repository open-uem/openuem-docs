---
title: 🕵️ Agents
description: OpenUEM Agents
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    agents,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# Agents

Agents are responsible for **gathering and reporting information** about the endpoints to OpenUEM. Agents are also responsible for providing an SFTP server and a VNC proxy.

:::tip
The VNC proxy service and/or the SFTP service can be enabled/disabled globally or per agent through its settings
:::

Agents **send its reports to Agents workers** using NATS messages. Agents workers will store the information in the database

When an agent is installed on an endpoint, it will remain in a "Waiting for admission" state until an administrator validates that this agent can be managed from OpenUEM. When the agent is admitted, a digital certificate is provided to the agent so it can secure its services.

An agent can be disabled if we don't want to receive new reports.

Agents use several digital certificates, and associated private keys, to perform their tasks:

- To authenticate against the NATS servers so the agents can send their reports (agent.cer and agent.key that lives in the certificates folder)
- To secure SFTP and VNC/RDP communications (server.cer and server.key that lives in the certificates folder)
- To authenticate SFTP connections from the console (sftp.cer that lives in the certificates folder)
- To validate certificates signed by our own Certificate Authority (ca.cer)
