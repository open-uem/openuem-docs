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

## 2. Required certificates

Here's the list of certificates (and its associated private key) that you must generate using the cert-manager tool:

- Agents certificate to identify the agent against the NATS server
- NATS server certificate
- Agent Worker certificate
- Cert Manager Worker certificate
- Notification Worker certificate
- Console web / auth server certificate
- Console SFTP certificate
- Reverse proxy server certificate if needed

You can use OpenUEM's cert-manager tool binary to execute the following commands to generate the certificates. Substitute your CA certificate and private key with the right path. Also set the DATABASE_URL environment variable.

```
openuem-cert-manager.exe create-ca --name "OpenUEM CA" --org ""{code:OrgName}"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --address ""{code:OrgAddress}"" --years-valid 10  --dst ""{app}\certificates\ca"""; StatusMsg: "Creating OpenUEM CA certificate..."; Check: GenerateCertsSelected; Flags: runhidden

;NATS Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "server-cert --name ""OpenUEM NATS"" --org ""{code:OrgName}"" \
    --dns-names ""{code:GetNATSUrlsForCert}"" --filename ""nats"" --type=""nats"" --client-too --ocsp ""{code:GetOCSPUrls}"" --description ""NATS certificate"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 2  --dst ""{app}\certificates\nats"""; StatusMsg: "Creating OpenUEM NATS certificate..."; Check: GenerateCertsSelected; Flags: runhidden

;OCSP Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "server-cert --name ""OpenUEM OCSP"" --org ""{code:OrgName}"" \
    --sign-ocsp --filename ""ocsp"" --type=""ocsp"" --ocsp ""{code:GetOCSPUrls}"" --description ""OCSP certificate"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 2  --dst ""{app}\certificates\ocsp"""; StatusMsg: "Creating OpenUEM OCSP certificate..."; Check: GenerateCertsSelected; Flags: runhidden

;Notification Worker Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "client-cert --name ""OpenUEM Notification Worker"" --org ""{code:OrgName}"" \
    --filename ""worker"" --ocsp ""{code:GetOCSPUrls}"" --description ""Notification Worker's certificate"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" --type=""worker"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 2  --dst ""{app}\certificates\notification-worker"""; StatusMsg: "Creating OpenUEM Notification Worker certificate..."; Check: GenerateCertsSelected; Flags: runhidden

;Cert Manager Worker Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "client-cert --name ""OpenUEM Cert-Manager Worker"" --org ""{code:OrgName}"" \
    --filename ""worker"" --ocsp ""{code:GetOCSPUrls}"" --description ""Cert-Manager Worker's certificate"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" --type=""worker"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 2  --dst ""{app}\certificates\cert-manager-worker"""; StatusMsg: "Creating OpenUEM Cert-Manager Worker certificate..."; Check: GenerateCertsSelected; Flags: runhidden

;Agent Worker Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "client-cert --name ""OpenUEM Agent Worker"" --org ""{code:OrgName}"" \
    --filename ""worker"" --ocsp ""{code:GetOCSPUrls}"" --description ""OpenUEM Agent Worker's certificate"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" --type=""worker"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 2  --dst ""{app}\certificates\agents-worker"""; StatusMsg: "Creating OpenUEM Agent Worker certificate..."; Check: GenerateCertsSelected; Flags: runhidden

;Console Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "server-cert --name ""OpenUEM Console"" --org ""{code:OrgName}"" \
    --dns-names ""{code:ConsoleServer}"" --filename ""console"" --client-too --type=""console"" --ocsp ""{code:GetOCSPUrls}"" --description ""Console certificate"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 2  --dst ""{app}\certificates\console"""; StatusMsg: "Creating OpenUEM Console certificate..."; Check: GenerateCertsSelected; Flags: runhidden

;Reverse Proxy Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "server-cert --name ""OpenUEM Reverse Proxy"" --org ""{code:OrgName}"" \
    --dns-names ""{code:ReverseProxyServer}"" --filename ""proxy"" --type=""proxy"" --ocsp ""{code:GetOCSPUrls}"" --description ""Reverse Proxy certificate"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 2  --dst ""{app}\certificates\console"""; StatusMsg: "Creating OpenUEM Reverse Proxy certificate..."; Check: IsReverseProxyServerSet; Flags: runhidden

;Agent Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "client-cert --name ""OpenUEM Agent"" --org ""{code:OrgName}"" \
    --filename ""agent"" --ocsp ""{code:GetOCSPUrls}"" --description ""Agent Admission certificate"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" --type=""agent"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 2  --dst ""{app}\certificates\agents"""; StatusMsg: "Creating OpenUEM Agent certificate..."; Check: GenerateCertsSelected; Flags: runhidden

;SFTP Client Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "client-cert --name ""OpenUEM SFTP Client"" --org ""{code:OrgName}"" \
    --filename ""sftp"" --ocsp ""{code:GetOCSPUrls}"" --description ""SFTP Client"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" --type=""sftp"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 2  --dst ""{app}\certificates\console"""; StatusMsg: "Creating OpenUEM SFTP certificate..."; Check: GenerateCertsSelected; Flags: runhidden

;Updater Client Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "client-cert --name ""OpenUEM Updater Client"" --org ""{code:OrgName}"" \
    --filename ""updater"" --ocsp ""{code:GetOCSPUrls}"" --description ""Updater Client"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" --type=""updater"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 2  --dst ""{app}\certificates\updater"""; StatusMsg: "Creating OpenUEM Updater certificate..."; Check: GenerateCertsSelected; Flags: runhidden

;Admin Certificate
Filename: {app}\openuem-cert-manager.exe; Parameters: "user-cert --org ""{code:OrgName}"" \
    --username admin --ocsp ""{code:GetOCSPUrls}"" --description ""Administrator"" \
    --country ""{code:OrgCountry}"" --province ""{code:OrgProvince}"" --locality ""{code:OrgLocality}"" \
    --cacert ""{app}\certificates\ca\ca.cer"" --cakey ""{app}\certificates\ca\ca.key"" --pass ""{code:AdminCertPass}"" \
    --dburl ""postgres://{code:PostgresParam|2}:{code:PostgresParam|3}@{code:PostgresParam|0}:{code:PostgresParam|1}/{code:PostgresParam|4}"" \
    --address ""{code:OrgAddress}"" --years-valid 1  --dst ""{app}\certificates\users"""; StatusMsg: "Creating OpenUEM admin certificate..."; Check: GenerateCertsSelected; Flags: runhidden

```
