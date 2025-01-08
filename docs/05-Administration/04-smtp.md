---
title: 📨 SMTP Settings
description: OpenUEM SMTP
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    admin,
    smtp,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 📨 SMTP Settings

OpenUEM has a [**notification worker**](/docs/Introduction/workers) which is responsible for sending emails to users. This worker requires an administrator to introduce the SMTP settings before it can try to send messages.

![SMTP Settings](/img/console/smtp_settings.png)

Fill in your SMTP provider settings in the form fields and use the **Test settings** button to send a test email to the email address set in the user field.

Finally, save the settings and the **notification worker** will read the settings from the database the next time it needs to send a message.
