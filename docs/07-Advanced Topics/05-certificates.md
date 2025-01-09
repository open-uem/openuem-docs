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

Here's the list of certificates that you must generate using the cert-manager tool
