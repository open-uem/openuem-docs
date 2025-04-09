---
title: Support & FAQ
description: Support & FAQ
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    support,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

## Support

Do you need support? Something doesn’t work as expected, or do you need a feature that the project lacks?

Please, do open a discussion at [GitHub](https://github.com/orgs/open-uem/discussions) or visit the [OpenUEM Community server](https://discord.com/invite/UQNBuNej5u) at Discord.

If you’ve found a bug, you can open an issue right away on the affected repository

- [Console](https://github.com/openuem-console)
- [Agent](https://github.com/openuem-agent)
- [Docker](https://github.com/openuem-docker)

Any question, bug report or feature request is welcome so thanks for helping the project grow

## FAQs

These are some of the FAQs for OpenUEM

**Question: Why do I get "Could not send request to OCSP Responder" when trying to use the certificate to log in the console?**

Answer: OpenUEM's console needs to validate the certificates. If you get this error this means that OpenUEM's OCSP responder service is not available. Check if the service is running or if you've set the right server's name in the installation (you'll find it in the openuem.ini file). Visit [Windows installation troubleshooting](/docs/Installation/Server/windows#3-next-steps-and-troubleshooting) or [Linux installation troubleshooting](/docs/Installation/Server/linux#3-next-steps-and-troubleshooting) to check the service status and know the location of the openuem configuration file.
