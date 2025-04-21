---
title: 🐧 Debian/Ubuntu Agent
description: How to install OpenUEM agent in Debian/Linux
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    debian agent,
    ubuntu agent,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🕵️ Linux Agent

OpenUEM agents are responsible for inspecting your endpoints information and offer additional services like file browsing and VNC connections.

This page explains how you can install an agent in a Debian 12/Ubuntu 24.04 (or higher) system.

## 1. Download the Debian/Ubuntu installer

OpenUEM provides a repository for deb packages. You can add the repository following the steps in the [Server section](/docs/Installation/Server/linux#1-adding-the-repository).

:::tip
If you are familiar with Ansible you can use [this playbook](https://github.com/open-uem/openuem-ansible/blob/main/deb-openuem-agent.yml) to automatically configure the repository and skips sections 2 and 3 of this document. You only have to configure the values for the NATS servers, SFTP and VNC proxy ports in the playbook before using it
:::

Alternatively, you can visit the [repository](https://apt.openuem.eu/pool/main/) and download the .deb package that you need.

:::warning
If you don’t add the OpenUEM repository to your agent, you won’t be able to update agents from the console
:::

## 2. Install the agent

The agent can be installed from the repository using the following command:

`apt install openuem-agent`

If you have downloaded the .deb package manually, you can install it using

`apt install ./openuem-agent_0.4.0_amd64.deb`

Once the installation starts, you’ll have to answer some questions to configure the agent.

First you must introduce the OpenUEM NATS server URL in the format server.your.domain:port (if you use a cluster you must introduce a comma between the servers)

![NATS Server](/img/agent/debian_nats_server.png)

The Agent has an SFTP server used to browse, update or delete files from the console. You must specify the port number (default: 2022). If you set an empty value the SFTP server will not be used.

![SFTP Server](/img/agent/debian_sftp_server.png)

The Agent can use a VNC Proxy if you install a [supported VNC server](/docs/Advanced%20Topics/vnc). If no VNC app is installed this port won't be used. Specify the port number for the proxy (default: 1443). If you set an empty value the VNC proxy will not be used.

![VNC Proxy](/img/agent/debian_vnc_proxy.png)

:::note
If your endpoint has a firewall, you must enable the incoming traffic to the SFTP and VNC Proxy ports from OpenUEM console
:::

## 3. Agent post-install steps

The agent requires some certificates to secure connections between the agent and the rest of OpenUEM components. You must place the required certificates under the `/etc/openuem-agent/certificates` folder **with administrator privileges**. You should find the certificates and private keys in the folder where the OpenUEM Server/Docker was installed.

These are the certificates required by the OpenUEM agent:

- ca.cer, this is the Certification Authority certificate file. You should place the file in `/etc/openuem-agent/certificates/ca.cer`
- sftp.cer, this is the public part of the SFTP certificate that the console will use to authenticate SFTP connections. You should place the file in `/etc/openuem-agent/certificates/sftp.cer`
- agent.cer, this is the certificate that allows the agent to connect with the NATS server. You should place the certificate in `/etc/openuem-agent/certificates/agent.cer`
- agent.key, this is the private key that allows the agent to connect with the NATS server. You should find the file in the folder where the OpenUEM Server/Docker was installed under `/etc/openuem-agent/certificates/agent.key`

Once you've copied the required certificates, **you must restart the openuem-agent and openuem-agent-updater services**:

```(bash)
systemctl restart openuem-agent
systemctl restart openuem-agent-updated
```

## 4 Next steps and troubleshooting

After the agent installation, if everything goes fine you should see the agent in the console's agents' view ready to be admitted

![Admit agent](/img/agent/debian_admit_agent.png)

If you don't see the agent in the console something may have gone wrong. You can have a look at the agent's log located at `/var/log/openuem-agent/openuem-agent.log`. If the connection with the agent is possible, you can use the ["Show agent's log"](/docs/Console/agents#2-more-actions) in the console Agents view to see the logs from the console.

![Agent installation](/img/agent/debian_agent_logs.png)

In the logs you should find ERROR messages that should explain the problem:

- Maybe your NATS server or the Agent Worker (or both) is not running or the Agent.
- Maybe you missed to copy a required certificates.
- Maybe you specified the wrong name for the NATS server or the port. You can edit the `/etc/openuem-agent/openuem.ini` file and change the domain name or port and restart the OpenUEM Agent service.

Need more help?, Open an issue in GitHub or send a message in Discord!
