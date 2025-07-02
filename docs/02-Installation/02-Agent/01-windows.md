---
title: 🪟 Windows Agent
description: How to install OpenUEM agent in Windows
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    windows agent,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🕵️ Windows Agent

OpenUEM agents are responsible for inspecting your endpoints information and offer additional services like file browsing, package deployment, and VNC connections.

This page explains how you can install an agent in a windows system.

:::info
While the agent can be installed on a Windows Server endpoint, note that the support is limited and some data may be missing from the reports.
:::

## 1. Download the Windows installer

You can visit the [Downloads section](/docs/Downloads/windows) located either on the sidebar or on the navbar and select the Windows option to get the download link.

Download your preferred version and note that you can check if the checksum matches using Powershell's Get-FileHash:

```(powershell)
Get-FileHash openuem-agent-setup.exe

Algorithm       Hash                                                                   Path
---------       ----                                                                   ----
SHA256          13D43AC00D9EF26BDC1BAA21AB12BE4155A9CCB5B5A4A114D5D5CC36E1258760       C:\Users\doncicuto\Downloads\openuem....
```

## 2. Install the agent

The agent can be installed silently from the command-line or using the wizard

## 2.1 Silent installation from the command-line

The agent requires some certificates that you can either place them next to the installer or use the installer flags to specify the location and other settings.

If you want to place the certificates next to the installer, you must place the following certificate and private key files in the same location where the openuem-agent-setup.exe is located:

- ca.cer, this is the Certification Authority certificate file. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\ca\ca.cer`
- sftp.cer, this is the public part of SFTP certificate that the console will use to authenticate SFTP connections. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\console\sftp.cer`
- agent.cer, this is the certificate that allows the agent to connect with the NATS server. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\agents\agent.cer`
- agent.key, this is the private key that allows the agent to connect with the NATS server. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\agents\agent.key`

![Place certs next to the installer](/img/agent/certs.png)

If you want to use the installer's flags:

- /cacert=path, this is the flag for the Certification Authority certificate file. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\ca\ca.cer`
- /cert=path, this is the flag for the certificate that allows the agent to connect with the NATS server. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\agents\agent.cer`
- /key=path, this is the flag for the private key that allows the agent to connect with the NATS server. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\agents\agent.key`
- /sftpcert=path, this is the flag for the public part of SFTP certificate that the console will use to authenticate SFTP connections. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\console\sftp.cer`
- /tenantid=id, the numeric ID of the organization that you want this endpoint to belong to. You'll have to add /siteid=id too. You can get the ID of the organization from the [organization's list](/docs/05-Administration/10-organizations.md)
- /siteid=id, the numeric ID of the site that you want this endpoint to belong to. You'll have to add /tenantid=id too. You can get the ID of the site from the [site's list](/docs/05-Administration/11-sites.md)
- /server=domain:port, specify the server's name and port where the NATS server is located
- /sftp=port, you can set the port that will be used by the SFTP server
- /vnc=port, you can set the port that will be used by the VNC proxy server

:::note
Don't forget to use the /VERYSILENT flag
:::

Once you've copied the required certificates or set the right flags, you'll have to run the setup command **with administrator privileges** using the available flags. Here's an example:

```(bash)

openuem-agent-setup.exe /server=lothlorien.local.openuem.eu:4433 /sftp=2022 /vnc=1443 /VERYSILENT

```

As the installation is silent wait a couple of minutes and check if you see the application as installed

![Application installed](/img/agent/installed.png)

Now go to the [2.3 section](/docs/Installation/Agent/windows#23-next-steps-and-troubleshooting) to know about the following steps

## 2.2 Wizard installation

If you install the agent using the wizard you must introduce some information about the OpenUEM server and specify the location for the certificates required by the agent.

:::note

The agent windows installer is digitally signed. Microsoft Windows will show you the following information about the installer.

![Setup warning](/img/agent/setup_warning.png)

:::

Once the installer starts you must select the language (English or Spanish)

![Select language](/img/agent/select_language.png)

Then you must accept the Apache 2.0 Open-Source license clicking on "I accept the agreement"

![Accept license](/img/agent/accept_license.png)

Now introduce, OpenUEM NATS server URL in the format server.your.domain:port (if you use a cluster you must introduce a comma between the servers)

![NATS Server](/img/agent/nats_server.png)

The Agent has an SFTP server used to browse, update or delete files from the console. You must specify the port number (default: 2022)

![SFTP Server](/img/agent/sftp_server.png)

The Agent can use a VNC Proxy if you install a [supported VNC server](/docs/Advanced%20Topics/vnc). If no VNC app is installed this port won't be used. Specify the port number for the proxy (default: 1443)

![VNC Proxy](/img/agent/vnc_proxy.png)

It's time to specify the location of the certificates required by the OpenUEM agent.

:::tip
If you place the certificate and private key files next to the installer, you'll only have to click on Next thanks to the default values
:::

Introduce the location of the OpenUEM CA certificate file (ca.cer)

![CA cert path](/img/agent/ca_path.png)

And, set the location of the agent certificate (`certificates/agents/agent.cer), the agent private key (certificates/agents/agent.key) and the sftp certificate for the console (certificates/console/sftp.cer)

![Other certs path](/img/agent/other_certs.png)

If you want that your endpoint is associated to an organization and site that you've created in OpenUEM console (🎯 Version 0.7.0) you can specify the IDs (numbers) or leave the fields empty to use the default organization and site. You can get the ID of the organization from the [organization's list](/docs/05-Administration/10-organizations.md) and the ID of the site from the [site's list](/docs/05-Administration/11-sites.md).

![Other certs path](/img/agent/windows_org_site.png)

Finally, click the Install button and wait for the installation to finish

![Install](/img/agent/install.png)

![Installation finished](/img/agent/installation_finished.png)

## 2.3 Next steps and troubleshooting

After the agent installation, if everything goes fine you should see the agent in the console's agents' view ready to be admitted

![Admit agent](/img/agent/admit_agent.png)

If you don't see the agent in the console something may have gone wrong. You can visit the agent folder located at C:\Program Files\OpenUEM Agent and check the logs or the certificates folder. If the connection with the agent is possible, you can use the ["Show agent's log"](/docs/Console/agents#2-more-actions) in the console Agents view to see the logs from the console.

![Agent installation](/img/agent/agent_folders.png)

In the logs folder you should check the `openuem-log.txt` that should explain the possible error:

- Maybe your NATS server or the Agent Worker (or both) is not running
- Maybe you specified the wrong path for the required certificates. You can copy the certificates by hand using the required names or uninstall the agent and install it again.
- Maybe you specified the wrong name for the NATS server or the port. You can edit the `config\openuem.ini` file and change the domain name or port and restart the OpenUEM Agent service.

:::warning

Note that the installer creates firewall rules for Microsoft's firewall. If you use a different firewall check that your agent can connect to the NATS server port, and that your endpoint has the VNC and SFTP ports enabled for incoming connections from the console to the endpoint.

:::

Need more help?, Open an issue in GitHub or send a message in Discord!
