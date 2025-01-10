---
title: 🪟 Windows
description: How to install OpenUEM server components in Windows
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    windows,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🪟 Windows

The OpenUEM server components can be installed on a Windows machine using an installer.

:::note
OpenUEM server has been tested successfully on Microsoft Windows 10, Microsoft Windows 11 and Microsoft Windows Server 2025
:::

# 1. Download the installer

Visit the [Downloads section](/docs/06-Downloads/01-windows.md) and choose the download link for the server version

Download your preferred version and note that you can check if the checksum matches using Powershell's Get-FileHash:

```(powershell)
Get-FileHash openuem-server-setup-0.1.0.exe

Algorithm       Hash                                                                   Path
---------       ----                                                                   ----
SHA256          01B9A91F58E4986AD0674558D73B89038AFB40A71B171C7AEE5EDF8097928D9D       C:\Users\doncicuto\Downloads\openuem....
```

## 2. Install OpenUEM server

## 2.1 Silent installation

TBD

## 2.2 Wizard installation

If you install the server using the wizard you must introduce some information about the OpenUEM server components to be installed.

:::warning
Right now, the server windows installer is not signed, so Windows will warn you about the executable file to be from an unknown source. A certificate is on the go to avoid this warning.

![Setup warning](/img/agent/setup_warning.png)
:::

Once the installer starts you must select the language (English or Spanish).

![Select language](/img/windows/select_language.png)

Then you must accept the Apache 2.0 Open-Source license clicking on "I accept the agreement".

![Accept license](/img/windows/accept_license.png)

You must select which OpenUEM server component do you want to install.

:::note
In this page we’re assuming that you’re installing all the components in the same machine but remember that you can distribute the components in different machines.
:::

![Select components](/img/windows/select_components.png)

Now, specify the OpenUEM database connection parameters (host, port, user, password and database name).

![Database parameters](/img/windows/database_params.png)

OpenUEM needs a DNS domain for your organization to resolve agent/endpoint names to IP address. Set the domain name to be used.

![Specify the DNS domain](/img/windows/select_domain.png)

OpenUEM uses digital certificates to establish secure communication and TLS certificates. Unless you're using your own Certificate Authority, **answer yes** to this question so OpenUEM creates a Certificate Authority and the required certificates.

![Do you want OpenUEM to create a CA?](/img/windows/generate_certificates.png)

If you want to use OpenUEM behind a reverse proxy, set the DNS name that you want to use to access OpenUEM console

![Reverse proxy domain for certificate](/img/windows/reverse_proxy_domain_for_certificate.png)

Now, you'll have to answer a few questions about your organization. These answers are only used to set values that identify your digital certificates and authenticate your NATS server connection.

![Organization info](/img/windows/org_values.png)

It’s time to specify which port and server name will be used by the NATS server:

![NATS Server](/img/windows/nats_server.png)

If you want to use a [NATS cluster](/docs/Advanced%20Topics/cluster), answer Yes to the question. If it's the first time you install OpenUEM or you're not using hundreds of agents, it's better to answer No.

![NATS Cluster No](/img/windows/nats_cluster_no.png)

Introduce the server name and the port used by the [OCSP Responder](/docs/Introduction/ocsp)

![OCSP Responder](/img/windows/ocsp_responder.png)

You'll have to specify the DNS domain name used by the server that hosts the console service, and the ports used by the web server and the authentication server. Also, if you want to use OpenUEM behind a reverse proxy you must specify the domain name associated with the reverse proxy service and the port that will be configured in the reverse proxy to serve authentication requests.

![Console settings](/img/windows/console_settings.png)

The console uses a key to encrypt tokens, please set a complex key and confirm it.

![JWT Key](/img/windows/jwt_key.png)

If OpenUEM has been selected to generate certificates automatically you've the chance to specify the password that protects the admin user certificate.

![Admin cert password](/img/windows/admin_cert_password.png)

Once, all the questions are answered the package will be installed.

![Ready to install](/img/windows/ready_to_install.png)

:::warning
Installation may take some minutes if it must generate certificates so if you see that progress stalls for some minutes, please be patient as cryptographic operations are heavy, database schema is created, and hundreds of megabytes are copied.
:::

:::warning
The installer will try to add the Certificate Authority certificate to the trusted root certificate authority’s store. You’ll receive a warning to confirm that you want to add the certificate.
:::

![CA certificate import warning](/img/windows/ca_import_warning.png)

## 3. Next steps and troubleshooting

After the installation finishes, you'll see the following message:

![Installation finished](/img/windows/installation_finished.png)

It's time to visit the OpenUEM console in your browser.

Now open `https://SERVER_NAME:CONSOLE_PORT` (replace the values that you've set during the package configuration) and you should see OpenUEM's console

![Console LogIn](/img/console/login.png)

Finally, log in user your admin certificate and read how to install and add your first agent.

:::note
If you see any certificates error, OpenUEM should have imported the digital certificates in the right certificate stores of your browser automatically, but if it hadn't been the case, you can import the certificates by yourself
:::

### 3.1 Services

OpenUEM will install and enable the following services on your server:

- openuem-agent-worker, see [Workers](/docs/Introduction/workers) for more information
- openuem-cert-manager-worker, see [Workers](/docs/Introduction/workers) for more information
- openuem-console, see [Console](/docs/Introduction/console) for more information
- openuem-nats-service, see [NATS](/docs/Introduction/nats) for more information
- openuem-notification-worker, see [Workers](/docs/Introduction/workers) for more information
- openuem-ocsp-responder, see [OCSP Responder](/docs/Introduction/ocsp) for more information
- openuem-server-updater, that is responsible for updating the server components from the console

![services](/img/windows/services.png)

:::warning
All OpenUEM services will be run under the NetworkService account to mitigate risks.

The only exception is the openuem-updater-service that requires higher privileges under the LocalSystem account to reinstall OpenUEM components when the update action is performed from the console.
:::

### 3.2 Configuration

OpenUEM config file is located at `C:\Program Files\OpenUEM Server\config\openuem.ini`. If you failed to provide the right answers while installing openuem-server you can edit this file to fix some settings.

:::note
This configuration file contains all the required information but the database password and JWT secret. Those credentials are stored using the Windows Credential Manager.
:::

### 3.3 Certificates

Unless you refused during the package configuration OpenUEM should have generated digital certificates. Those certificates should be located at `C:\Program Files\OpenUEM Server\certificates`.

There’s a folder for every required certificate type or, more specifically, for every component type.

![Logs](/img/windows/certificates.png)

Just in case, you’ll find the administrator certificate in the users folder.

### 3.4 Logs

OpenUEM logs are stored in `C:\Program Files\OpenUEM Server\logs` and you’ll find a log for every OpenUEM component that has been installed on that server.

![Logs](/img/windows/logs.png)

### 3.5 Reinstalling OpenUEM

If you need to reinstall OpenUEM please proceed like this:

- [Drop OpenUEM database tables](/docs/Advanced%20Topics/postgres#3-remove-the-database-tables) so the new installation can perform a clean installation of the schema. If you prefer to keep the database, at least remove the user’s table as OpenUEM creates an entry for the admin user’s certificate and that entry must be unique.
