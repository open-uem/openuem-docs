---
title: 👥 Users
description: OpenUEM Users
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    admin,
    users,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 👥 Users

OpenUEM allows you to add users that can log in to the console and work as administrators.

:::tip
This section is only available for the Global config
:::

:::note
OpenUEM will have roles and there’s an open issue for that feature in the project’s roadmap
:::

As an administrator you can add more users, or you can approve [register requests](/docs/04-Console/11-register.md) that users have requested.

:::warning
Don’t forget to add [SMTP settings](/docs/05-Administration/04-smtp.md) so users can receive emails about the registration
:::

## 1. Create a new user

You can create a new user directly by clicking on the **Add User** button and by filling in the form fields.

![New user form](/img/console/new_user_form.png)

The new user will show in the Users’ table with the state **Pending email confirmation**. An email will be sent to the user, so the email address is confirmed.

![Pending email confirmation](/img/console/pending_email_confirmation.png)

Here’s a sample of the message to confirm the email address.

![Confirm email](/img/console/confirm_message.png)

The user register’s state will change to **Review request**. Now, go to the [approve request section](/docs/05-Administration/01-users.md#3-approve-register-requests)

## 2. Import users

OpenUEM lets you import many users using comma-separated values files (CSV).

![Import users](/img/console/import_users.png)

Once you upload the users file, a certificate will be sent to the user with instructions to log in. So, by importing users, **you won’t have to approve the user’s request, and the user won’t have to confirm the email address**.

## 3. Approve register requests

If you create a new user or a [user has requested to register in OpenUEM](/docs/04-Console/11-register.md) you’ll see the user on the users’ table with the **Review request** warning, waiting to be approved.

![Review user's registry request](/img/console/users_review_request.png)

Click on the three dots button to generate a digital certificate, accepting the request from the user.

The certificate will be sent to the user, and you’ll see that the state will change to **Certificate sent**. The message will include the user certificate that has to be [imported](/docs/02-Installation/01-Server/04-docker.md#4-trust-in-digital-certificates-created) to the users's browser and the CA certificate that has to be imported as trusted authority too.

![Certificate message](/img/console/certificate_message.png)

Once the user logs in for the first time, you’ll see that the state changes to **Completed**.

Otherwise delete the user and ignore the request.

## 4. Regenerate a certificate

If you need to generate a new certificate for one of your users, either the certificate was compromised or the user never received the certificate, you can click on the three dots icons and use the **Regenerate certificate** option. The old certificate will be automatically revoked, and a new certificate will be sent to the user.

![Regenerate certificate](/img/console/regenerate_certificate.png)
