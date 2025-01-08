---
title: OpenUEM Server - Debian/Ubuntu Install
description: How to install OpenUEM server components in Debian/Ubuntu Linux
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    unified endpoint manager,
    remote monitoring and management,
    debian,
    ubuntu,
    linux,
  ]
---

# 🐧 Debian/Ubuntu Linux

The OpenUEM server components can be installed on a Debian/Ubuntu machine using .deb packages available in OpenUEM repository.

## 1. Adding the repository

The Debian/Ubuntu repository and its contents are signed with a GPG public key

To download the public GPG key and add it to the keyring use the following command:

```(bash)
curl -fsSL https://apt.openuem.eu/pgp-key.public | sudo gpg --dearmor -o /usr/share/keyrings/openuem.gpg
```

Now, to add the repository, run the following command:

```(bash)
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/openuem.gpg] https://apt.openuem.eu stable main" | sudo tee /etc/apt/sources.list.d/openuem.list
```

Update the repositories:

```(bash)
sudo apt update -y
```

## 2. Install OpenUEM server

Start the installation running:

```(bash)
sudo apt install openuem-server
```

You'll have to answer some questions about configuration

:::info
This page shows information about the simplest path to installing all OpenUEM components in the same machine. If you prefer to install components on different machines different questions will be asked associated with the component being installed
:::

Select the components that you want to install (press the space bar to toggle selection)

![Select components](/img/linux/select_components.png)

Now, specify the OpenUEM database connection parameters (host, port, user, password and database name)

![Postgres host](/img/linux/postgres_host.png)

![Postgres port](/img/linux/postgres_port.png)

![Postgres username](/img/linux/postgres_user.png)

![Postgres password](/img/linux/postgres_password.png)

![Postgres database name](/img/linux/postgres_dbname.png)

OpenUEM needs a DNS domain for your organization to resolve agent/endpoint names to IP address. Set the domain name to be used

![DNS domain](/img/linux/dns_domain.png)

OpenUEM uses digital certificates to establish secure communication and TLS certificates. Unless you're using your own Certificate Authority, **answer yes** to this question so OpenUEM creates a Certificate Authority and the required certificates.

![Let OpenUEM generate certificates](/img/linux/required_certificates.png)

If you want to use OpenUEM behind a reverse proxy, set the DNS name that you want to use to access OpenUEM console

![Reverse proxy DNS name](/img/linux/reverse_proxy.png)

Now, you'll have to answer a few questions about your organization. These answers are only used to set values that identify your digital certificates and authenticate your NATS server connection.

![Organization name](/img/linux/org_name.png)

![Organization country](/img/linux/org_country.png)

![Organization province](/img/linux/org_province.png)

![Organization locality](/img/linux/org_locality.png)

![Organization address](/img/linux/org_address.png)

It’s time to specify in which port the NATS server will listen to:

![NATS server port](/img/linux/nats_port.png)

If you want to use a [NATS cluster](/docs/Advanced%20Topics/cluster), answer Yes to the question. If it's the first time you install OpenUEM or you're not using hundreds of agents, it's better to answer No.

![NATS cluster selection](/img/linux/nats_cluster_selection.png)

Introduce the port used by the [OCSP Responder](/docs/Introduction/ocsp)

![OCSP Responder port](/img/linux/ocsp_responder.png)

You'll have to specify the DNS domain name used by the server that hosts the console service, and the ports used by the web server and the authentication server

![Console DNS name](/img/linux/console_dns_name.png)

![Console web service port](/img/linux/console_port.png)

![Console auth port](/img/linux/console_auth_port.png)

If you want to use OpenUEM behind a reverse proxy you must specify the domain name associated with the console service (unless you're letting OpenUEM generate the certificates and have already specified the DNS domain name), and the port used by the reverse proxy to run the authentication service.

![Reverse proxy auth port](/img/linux/reverse_proxy_auth_port.png)

The console uses a key to encrypt tokens, please set a complex key (and confirm it in the following question)

![JWT Key](/img/linux/jwt.png)

If OpenUEM has been selected to generate certificates automatically you've the chance to specify the password that protects the admin user certificate, and the system's username associated with the certificate, so the certificate can be added to this user's browsers certificate store.

![Admin certificate password](/img/linux/admin_password.png)

![Admin user associated Linux username](/img/linux/jwt.png)

Once, all the questions are answered the package will be installed.

:::warning
Installation may take some minutes if it must generate certificates so if you see that progress stalls for some minutes (generally at 60% or 80%), please be patient as cryptographic operations are heavy, database schema is created, and hundreds of megabytes are copied.
:::

:::info
A user **openuem** will be created during the installation. Only this unprivileged user (or root user, of course) will have access to the config file, digital certificates and logs.
:::

## 3. Next steps and troubleshooting

After the installation finishes, you'll see the following message:

![Installation finished](/img/linux/installation_finishes.png)

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

:::warning
All OpenUEM services will be run under an unprivileged user account called **openuem** to mitigate risks. Also, these services have been prepared using `sudo system-analyze security`to reduce exposure.

![Service audit](/img/linux/service_audit.png)

The only exception is the openuem-updater-service that requires higher privileges to reinstall OpenUEM components. There’s an open issue to reduce privileges and exposure.
:::

### 3.2 Configuration

OpenUEM config file is located at `/etc/openuem-server/openuem.ini`. If you failed to provide the right answer while configuring openuem-server package you can edit this file to fix some settings.

:::note
This configuration file contains the database password and JWT secret in clear, as it’s needed for OpenUEM components, but please do note that the configuration file can only be read by the openuem user.
:::

### 3.3 Certificates

Unless you refused during the package configuration OpenUEM should have generated digital certificates. Those certificates should be located at `/etc/openuem-server/certificates`.

There’s a folder for every required certificate type or, more specifically, for every component type.

![Logs](/img/linux/certificates.png)

Just in case, you’ll find the administrator certificate in the users folder.

### 3.4 Logs

OpenUEM logs are stored in /var/log/openuem-server and you’ll find a log for every OpenUEM component that has been installed on that server. You’ll need root privileges to see the logs content.

![Logs](/img/linux/logs.png)

### 3.5 Reinstalling OpenUEM

If you need to reinstall OpenUEM please proceed like this:

- If you want Debian/Ubuntu to ask you the configuration questions again, please use `apt purge openuem-server` to uninstall and forget the answers. Otherwise, use `apt remove openuem-server`
- [Drop OpenUEM database tables](/docs/Advanced%20Topics/postgres#3-remove-the-database-tables) so the new installation can perform a clean installation of the schema. If you prefer to keep the database, at least remove the user’s table as OpenUEM creates an entry for the admin user’s certificate and that entry must be unique.
