---
title: 🧱 Ports used by OpenUEM
description: Ports used by OpenUEM
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    nats,
    cluster,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🧱 Ports used by OpenUEM

OpenUEM installers for Windows tries to add firewall rules for Microsoft Defender’s firewall. In Linux, no rule is created by the installers.

In case you’re using corporate firewalls, here’s the list of default ports that you should take care of.

| Port | Component           | Traffic  | Description              |
| ---- | ------------------- | -------- | ------------------------ |
| 1443 | Agent               | Inbound  | NoVNC Proxy server       |
| 2022 | Agent               | Inbound  | SFTP Server              |
| 4433 | Agent Updater       | Outbound | NATS traffic with server |
| 8000 | Agent               | Outbound | OCSP traffic with server |
| 1323 | Console             | Inbound  | Web server               |
| 1324 | Console             | Inbound  | Auth server              |
| 4433 | Agent Worker        | Outbound | NATS traffic with server |
| 4433 | Cert Manager Worker | Outbound | NATS traffic with server |
| 4433 | Notification Worker | Outbound | NATS traffic with server |
| 4433 | NATS Server         | Inbound  | NATS Server              |
| 4433 | Server Updater      | Outbound | NATS traffic with server |
| 4444 | NATS Server         | Inbound  | NATS Server cluster port |
| 5432 | Agent Worker        | Outbound | Postgres connection      |
| 5432 | Cert Manager Worker | Outbound | Postgres connection      |
| 5432 | Console             | Outbound | Postgres connection      |
| 5432 | Notification Worker | Outbound | Postgres connection      |
| 5432 | OCSP Responder      | Outbound | Postgres connection      |
| 5432 | Server Updater      | Outbound | Postgres connection      |
| 8000 | OCSP Responder      | Inbound  | OCSP Responder port      |
| 8000 | Cert Manager Worker | Outbound | OCSP traffic with server |
| 8000 | NATS Server         | Outbound | OCSP traffic with server |
