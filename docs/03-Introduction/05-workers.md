---
title: OpenUEM Workers
description: OpenUEM Workers
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    workers,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# Workers

OpenUEM uses different workers to process asynchronous tasks. Right now there are three workers:

- Agent Worker, receives information from the agents and stores it in the Postgres database.
- Notification Worker, will send email messages to users (confirmation emails, certificates to log in) **after an administrator adds a SMTP configuration**.
- Certification Manager Worker, will generate certificates on demand for users and agents.

These workers use a certificate and its associated key to authenticate against the NATS server (worker.cer and worker.key which are different for each worker).

Workers run as services on the machines where they are installed. You can install as many workers as you need but, for now, no more than one component of each type can be installed on the same machine.
