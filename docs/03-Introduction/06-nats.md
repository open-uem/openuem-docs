---
title: 📫 NATS Server
description: OpenUEM NATS server
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    nats,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 📫 NATS Server

As [NATS official page](https://docs.nats.io/nats-concepts/what-is-nats) states:

> Software applications and services need to exchange data. NATS is an infrastructure that allows such data exchange, segmented in the form of messages.

OpenUEM uses NATS so its components can communicate using messages. For example, NATS messages are exchanged for the following actions:

- Enable/disable an agent
- Ask an agent to run a report
- Start the VNC proxy and set the password for the session
- Deploy a package to an endpoint
- Create a request to send an email
- Update an agent/server with the latest OpenUEM release

OpenUEM is ready to use a NATS cluster which should contain 3 or 5 servers. When you install the OpenUEM component you'll be asked if you want to use a cluster.

:::note

If you're installing OpenUEM for the first time or you'll have less than a hundred agents, you may start without a NATS cluster for a quicker and simpler setup
