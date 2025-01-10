---
title: 🔐 Certificates
description: How to configure digital certificates for OpenUEM
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

# 🔐 Certificates

OpenUEM can create a Certificate Authority during the installation that will generate automatically all the certificates that are required by OpenUEM components, but if your organization has your own Certificate Authority you can use it to generate the certificates.

In this section you’ll find a description of how many certificates and which information is required on them so mutual TLS can be used in OpenUEM.

:::warning
In this procedure, you will require both the CA certificate and its private key to generate keys
:::

## 1. Download the cert-manager tool

First, you'll have to download the cert-manager tool from the releases section of its GitHub repository. Choose the binary that fits your operating system and architecture.

[Releases](https://github.com/open-uem/openuem-cert-manager/releases)

## 2. Required certificates

Here's the list of certificates (and its associated private key) that you must generate using the cert-manager tool:

- Agents certificate to identify the agent against the NATS server
- NATS server certificate
- Agent Worker certificate
- Cert Manager Worker certificate
- Notification Worker certificate
- Console web / auth server certificate
- Console SFTP certificate
- OCSP certificate to sign OCSP Responder's answers
- Reverse proxy server certificate if needed
- Server Updater certificate
- User certificate for administrator access to the console

You can use OpenUEM's cert-manager tool binary to execute the following commands to generate the certificates. Substitute your CA certificate and private key with the right path for cacert and cakey params. Also change the dburl parameter according to your DB settings and set dst parameter to the path you want to store your certificates

### 2.1 NATS Certificate

```(bash)
openuem-cert-manager.exe server-cert --name "OpenUEM NATS" --org "OrgName" \
    --dns-names "GetNATSUrlsForCert" --filename "nats" --type="nats" --client-too --ocsp "GetOCSPUrls" --description "NATS certificate" \
    --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
    --cacert ca.cer --cakey ca.key \
    --dburl "postgres://user:password@host:port/database" \
    --address "OrgAddress" --years-valid 2  --dst certificates_path
```

### 2.2 OCSP Certificate

```(bash)
openuem-cert-manager.exe server-cert --name "OpenUEM OCSP" --org "OrgName" \
    --sign-ocsp --filename "ocsp" --type="ocsp" --ocsp "GetOCSPUrls" --description "OCSP certificate" \
    --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
    --cacert ca.cer --cakey ca.key \
    --dburl "postgres://user:password@host:port/database" \
    --address "OrgAddress" --years-valid 2  --dst certificates_path
```

### 2.3 Notification Worker Certificate

```(bash)
openuem-cert-manager.exe client-cert --name "OpenUEM Notification Worker" --org "OrgName" \
    --filename "notification-worker" --ocsp "GetOCSPUrls" --description "Notification Worker's certificate" \
    --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
    --cacert ca.cer --cakey ca.key --type="worker" \
    --dburl "postgres://user:password@host:port/database" \
    --address "OrgAddress" --years-valid 2  --dst certificates_path
```

### 2.4 Cert Manager Worker Certificate

```(bash)
openuem-cert-manager.exe client-cert --name "OpenUEM Cert-Manager Worker" --org "OrgName" \
 --filename "cert-manager-worker" --ocsp "GetOCSPUrls" --description "Cert-Manager Worker's certificate" \
 --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
 --cacert ca.cer --cakey ca.key --type="worker" \
 --dburl "postgres://user:password@host:port/database" \
 --address "OrgAddress" --years-valid 2 --dst certificates_path
```

### 2.5 Agent Worker Certificate

```(bash)
openuem-cert-manager.exe client-cert --name "OpenUEM Agent Worker" --org "OrgName" \
 --filename "agent-worker" --ocsp "GetOCSPUrls" --description "OpenUEM Agent Worker's certificate" \
 --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
 --cacert ca.cer --cakey ca.key --type="worker" \
 --dburl "postgres://user:password@host:port/database" \
 --address "OrgAddress" --years-valid 2 --dst certificates_path
```

### 2.6 Console Certificate

```(bash)
openuem-cert-manager.exe server-cert --name "OpenUEM Console" --org "OrgName" \
 --dns-names "ConsoleServer" --filename "console" --client-too --type="console" --ocsp "GetOCSPUrls" --description "Console certificate" \
 --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
 --cacert ca.cer --cakey ca.key \
 --dburl "postgres://user:password@host:port/database" \
 --address "OrgAddress" --years-valid 2 --dst certificates_path
```

### 2.7 Reverse Proxy Certificate

```(bash)
openuem-cert-manager.exe server-cert --name "OpenUEM Reverse Proxy" --org "OrgName" \
 --dns-names "ReverseProxyServer" --filename "proxy" --type="proxy" --ocsp "GetOCSPUrls" --description "Reverse Proxy certificate" \
 --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
 --cacert ca.cer --cakey ca.key \
 --dburl "postgres://user:password@host:port/database" \
 --address "OrgAddress" --years-valid 2 --dst certificates_path
```

### 2.8 Agents Certificate

```(bash)
openuem-cert-manager.exe client-cert --name "OpenUEM Agent" --org "OrgName" \
 --filename "agent" --ocsp "GetOCSPUrls" --description "Agent Admission certificate" \
 --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
 --cacert ca.cer --cakey ca.key --type="agent" \
 --dburl "postgres://user:password@host:port/database" \
 --address "OrgAddress" --years-valid 2 --dst certificates_path
```

### 2.9 SFTP Client Certificate

```(bash)
openuem-cert-manager.exe client-cert --name "OpenUEM SFTP Client" --org "OrgName" \
 --filename "sftp" --ocsp "GetOCSPUrls" --description "SFTP Client" \
 --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
 --cacert ca.cer --cakey ca.key --type="sftp" \
 --dburl "postgres://user:password@host:port/database" \
 --address "OrgAddress" --years-valid 2 --dst certificates_path
```

### 2.10 Updater Client Certificate

```(bash)
openuem-cert-manager.exe client-cert --name "OpenUEM Updater Client" --org "OrgName" \
 --filename "updater" --ocsp "GetOCSPUrls" --description "Updater Client" \
 --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
 --cacert ca.cer --cakey ca.key --type="updater" \
 --dburl "postgres://user:password@host:port/database" \
 --address "OrgAddress" --years-valid 2 --dst certificates_path
```

### 2.11 Admin Certificate

```(bash)
openuem-cert-manager.exe user-cert --org "OrgName" \
 --username admin --ocsp "GetOCSPUrls" --description "Administrator" \
 --country "OrgCountry" --province "OrgProvince" --locality "OrgLocality" \
 --cacert ca.cer --cakey ca.key --pass "AdminCertPass" \
 --dburl "postgres://user:password@host:port/database" \
 --address "OrgAddress" --years-valid 1 --dst certificates_path
```
