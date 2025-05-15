---
title: 🔑 Certificates
description: OpenUEM Certificates
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    admin,
    certificates,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🔑 Certificates

:::tip
This section is only available for the Global config
:::

OpenUEM uses digital certificates to establish mutual authentication and secure connections.

Every time the cert-manager tool is used to create a new certificate, for example when the server is installed and automatic generation has been selected, or if the cert-manager worker is required to generate a certificate for an agent or for a new user, information about the certificate is stored in the database.

The serial number of the certificate, the certificate type, a description, the expiration date of the certificate and the user associated with the certificate (if applicable) is stored in the database.

![Certificates list](/img/console/certificates_list.png)

:::info
Thanks to the database, the [OCSP Responder](/docs/03-Introduction/07-ocsp.md) service could tell the different OpenUEM components if a certificate used to authenticate it’s still valid.
:::

If you are in need of revoking a certificate, that is specify that a certificate is no longer valid, you can click on the three dots button to use the Revoke action.

![Revoke certificate](/img/console/revoke_certificate.png)
