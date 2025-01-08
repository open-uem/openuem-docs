---
title: 🛂 Log In / Log Out
description: Log in the OpenUEM Console
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🛂 Log In / Log Out

## Log In

OpenUEM comes with a web user interface named **OpenUEM Console**

The console can work behind a [reverse proxy](/docs/Advanced%20Topics/reverse-proxy) or be served right away from the Console component on port 1323 by default.

The log in page looks like this:

![Console LogIn](/img/console/login.png)

To log in to the console, you'll need to have a user certificate installed in your browser. In the server setup for Windows or Linux, if you've selected to auto generate the certificates, an admin certificate will be created and placed under certificates\user and will both the CA certificate and the user certificate should be imported automatically.

The certificate comes in a PFX file that you can import using the password that you've set in the setup or if you leave it empty you'll have to use the `changeit` password.

When you click the log in button you'll have to select the certificate. If no certificate is shown check if you've imported the certificate to the Personal certificates store. You can use the certificates section in the [Docker guide](/docs/Installation/Server/docker#4-trust-in-digital-certificates-created)

![Select Certificate](/img/console/select_certificate.png)

If authentication works fine, you'll see the **Dashboard** which is documented in the next section.

## Sessions

OpenUEM has **sessions that last 24 hours by default**, after that time you'll have to log in again.

You can set a different session lifetime visiting Admin -> General Settings

![Session lifetime](/img/console/session_lifetime.png)

## Log Out

When you want to log out, you can use the icon in the sidebar...

![Log out button](/img/console/log_out_button.png)

or you can click on your profile to show the log out

![Log out from profile](/img/console/log_out_from_profile.png)
