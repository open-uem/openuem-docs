---
title: 🕵️ Windows Agent
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

OpenUEM agents are responsible for inspecting your endpoints information and offer additional services like file browsing and VNC connections.

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
SHA256          349DF052C62B144493A7E7F632A199A29B10C39D2E70833885A3F693959DB942       C:\Users\doncicuto\Downloads\openuem....
```

:::warning

As OpenUEM is a new project, Microsoft SmartScreen or Microsoft Edge can warn you that it cannot be trusted by Microsoft as it's a file that is not downloaded commonly and you'll have to force the browser to keep that file to download it. Hopefully in the near future, this will change, and this warning will disappear.

:::

## 2. Install the agent

The agent can be installed silently from the command-line or using the wizard

## 2.1 Silent installation from the command-line

The agent requires some certificates that you can either place them next to the installer or use the installer flags to specify the location.

If you want to place the certificates next to the installer, you must place the following certificate and private key files in the same location where the openuem-agent-setup.exe is located:

- ca.cer, this is the Certification Authority certificate file. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\ca\ca.cer`
- sftp.cer, this is the public part of SFTP certificate that the console will use to authenticate SFTP connections. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\console\sftp.cer`
- agent.cer, this is the certificate that allows the agent to connect with the NATS server. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\agents\agent.cer`
- agent.key, this is the private key that allows the agent to connect with the NATS server. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\agents\agent.key`

![Place certs next to the installer](/img/agent/certs.png)

If you want to use the installer's flags:

- /cacert=path, this is the flag for the Certification Authority certificate file. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\ca\ca.cer`
- /cert=path, this is the flag for the public part of SFTP certificate that the console will use to authenticate SFTP connections. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\console\sftp.cer`
- /key=path, this is the flag for the certificate that allows the agent to connect with the NATS server. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\agents\agent.cer`
- /sftpcert=path, this is flag for the private key that allows the agent to connect with the NATS server. You should find the file in the folder where the OpenUEM Server/Docker was installed under `certificates\agents\agent.key`

Once you've copied the required certificates next to the setup, you'll have to run the setup command **with administrator privileges** using the available flags:

:::note

Change the server's name and port for the /server flag to specify where the NATS server is located

Change the SFTP port using the /sftp flag or the VNC proxy port using the /vnc flag

Don't forget to use the /VERYSILENT flag

:::

Here's an example:

```(bash)

openuem-agent-setup.exe /server=lothlorien.local.openuem.eu:4433 /sftp=2022 /vnc=1443 VERYSILENT

```

As the installation is silent wait a couple of minutes and check if you see the application as installed

![Application installed](/img/agent/installed.png)

Now go to the [2.3 section](/docs/Installation/Agent/windows#23-following-steps-and-troubleshooting) to know about the following steps

## 2.2 Wizard installation

If you install the agent using the wizard you must introduce some information about the OpenUEM server and specify the location for the certificates required by the agent.

:::warning

Right now, the agent windows installer is not signed, so Windows will warn you about the executable file to be from an unknown source. A certificate is on the go to avoid this warning.

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

Finally, click the Install button and wait for the installation to finish

![Install](/img/agent/install.png)

![Installation finished](/img/agent/installation_finished.png)

## 2.3 Next steps and troubleshooting

After the agent installation, if everything goes fine you should see the agent in the console's agents' view ready to be admitted

![Admit agent](/img/agent/admit_agent.png)

If you don't see the agent in the console something may have gone wrong. You can visit the agent folder located at C:\Program Files\OpenUEM Agent and check the logs or the certificates folder.

![Agent installation](/img/agent/agent_folders.png)

In the logs folder you should check the `openuem-log.txt` that should explain the possible error:

- Maybe your NATS server is not running
- Maybe you specified the wrong path for the required certificates. You can copy the certificates by hand using the required names or uninstall the agent and install it again.
- Maybe you specified the wrong name for the NATS server or the port. You can edit the `config\openuem.ini` file and change the domain name or port and restart the OpenUEM Agent service.

:::warning

Note that the installer creates firewall rules for Microsoft's firewall. If you use a different firewall check that your agent can connect to the NATS server port, and that your endpoint has the VNC and SFTP ports enabled for incoming connections from the console to the endpoint.

:::

Need more help?, Open an issue in GitHub or send a message in Discord!
