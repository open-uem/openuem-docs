---
title: OpenUEM Requirements
description: Requirements to install OpenUEM
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# ⚠️ Requirements

OpenUEM can be installed in Windows (Desktop or Server versions) or Linux (.deb packages or binaries) but there are two requirements:

- **A Postgres database** with a user and password and sufficient permissions to create schemas in the database must be ready before proceeding with the installation.

:::note
If you're going to use Docker. this requirement can be skipped, as the Docker installation with docker-compose can launch a Postgres server with the required database
:::

If you need help to install and configure the Postgres database server please visit the [Advanced Topics -> Postgres section](/docs/Advanced%20Topics/postgres).

- **A DNS server and a domain** that will resolve the endpoint names to IP addresses. The server hosting OpenUEM's console must have a server name that must be solved by the DNS server as that server name will be included in the digital certificate associated to the console.
