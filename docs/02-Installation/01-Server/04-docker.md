---
title: 🐳 Docker
description: How to deploy OpenUEM server components using Docker
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    unified endpoint manager,
    remote monitoring and management,
    docker,
  ]
---

# 🐳 Docker

OpenUEM can be tested using Docker containers that are hosted in [Docker Hub](https://hub.docker.com/u/openuem)

You can use [docker compose](https://docs.docker.com/compose/) to install all OpenUEM components in a single machine following these steps:

## 1. Get the docker-compose file

Clone the openuem-docker repository:

```(bash)
git clone https://github.com/open-uem/openuem-docker
```

## 2. Create a .env file with environment variables to be used

Use the file named `.env-example` file to create a `.env` file

:::note
The file must be named .env without extension and with a dot before the env word as required by Docker to read the environment variables
:::

In the `.env` file, edit the environment variables that docker compose will use to build and get the containers up and running.

:::note
You can set the Postgres database user and password in the `init.sh` file inside the `postgres\build`
:::

Here are the possible environment variables that can appear in the .env file.

| Name                 | Description                                                                   | Optional | Example value                                   |
| -------------------- | ----------------------------------------------------------------------------- | -------- | ----------------------------------------------- |
| POSTGRES_PORT        | The port number where the database service should be found                    | no       | 5432                                            |
| DATABASE_URL         | The database url in format postgres://user:password@openuem-db-1:port/openuem | no       | postgres://test:test@openuem-db-1:5432/openuem" |
| ORGNAME              | Your organization's name                                                      | no       | OpenUEM                                         |
| ORGPROVINCE          | Your organization's province                                                  | yes      | Valladolid                                      |
| ORGLOCALITY          | Your organization's locality                                                  | yes      | Valladolid                                      |
| ORGADDRESS           | Your organization's address                                                   | yes      | My org's address                                |
| COUNTRY              | Your organization's country                                                   | no       | ES                                              |
| OCSP_PORT            | The port used by the OCSP responder                                           | no       | 8000                                            |
| NATS_PORT            | The port used by the NATS server                                              | no       | 4433                                            |
| NATS_SERVERS         | The NATS service url                                                          | no       | nats-server:4433                                |
| REVERSE_PROXY_SERVER | If you want to use a reverse proxy, set its domain name                       | yes      | console.example.com                             |
| OCSP                 | The OCSP url                                                                  | no       | http://ocsp-responder:8000                      |
| DOMAIN               | Your DNS domain                                                               | no       | example.com                                     |
| SERVER_NAME          | The name of the server where the console is hosted                            | no       | server.example.com                              |
| CONSOLE_PORT         | The port used by the console                                                  | no       | 1323                                            |
| AUTH_PORT            | The port used by the auth server                                              | no       | 1324                                            |
| JWT_KEY              | The key used to encrypt JWT tokens for user registration                      | no       | averylongsecret                                 |

:::note
openuem-db-1, nats-server and ocsp-responder are the names of the services once Docker start them so you shouldn't change them
:::

:::danger
It's strongly recommended to change the JWT key with a random 32 characters long string
:::

## 3. Launch docker compose command

Where the compose.yaml file and the .env files are located, launch OpenUEM with the following commands:

```(bash)
docker compose --profile init up -d --build
```

Once we run that command, we should see that the database service is healthy and ready:

```
 ✔ Network openuem_default  Created
 ✔ Volume "openuem_pgdata"  Created
 ✔ Container openuem-db-1   Healthy
 ✔ Container openuem-certs  Started
```

Also, we should see that a certificates folder has been created containing all the required certificates:

![Certificates folder](/img/docker/certificates_folder.png)

:::warning
The generation of certificates can take some time, don't go to the next step until you check that certificates have been indeed created. If you find two files under the agents folder and one pfx file inside the users folder, you're good to go.
:::

Now, it's time to start OpenUEM's components

```(bash)
docker compose --profile openuem up -d --build
```

We should see that all components have started:

```
 ✔ Volume "openuem_jetstream" Created
 ✔ Container openuem-ocsp-responder-1 Started
 ✔ Container openuem-nats-server Started
 ✔ Container openuem-console-1 Started
 ✔ Container openuem-notification-worker-1 Started
 ✔ Container openuem-cert-manager-worker-1 Started
 ✔ Container openuem-agents-worker-1 Started
```

If we want to stop OpenUEM we should run the following commands:

```(bash)
docker compose --profile openuem down
docker compose --profile init down
```

Before we can visit OpenUEM's console, we must import two digital certificates

:::warning
If you find any error trying to launch the services, run the docker compose down commands shown above, remove the volumes and the certificates folder and start again

```
docker volume rm openuem_jetstream
docker volume rm openuem_pgdata
```

Open an issue with all the possible information if you can't start OpenUEM with Docker
:::

## 4. Trust in digital certificates created

Next to the compose .yaml file you’ll find a **certificates folder** containing all the certificates that OpenUEM has created and that are [required to run](/docs/Introduction/security).

You must import two certificates to your favorite browser’s certificate store:

- The Certificate Authority (CA) certificate file which is in `certificates/ca/ca.cer`. This certificate must be added to the trusted certificate authorities store.
- The administrator certificate file which is in `certificates/users/admin.pfx` that is protected with the password **changeit**

You must import the certificate according to your browser’s settings:

- In **Chrome** go to **Settings** -> **Privacy and Security**. Click on the **Security section**. Scroll to **Manage Certificates** and click on it. Click on **Manage certificates imported from Windows**. In Windows, import the administrator certificate in the **Personal tab** using the **changeit** password and the CA certificate in the **Trusted Root Certification Authorities tab**. In Linux, import the administrator certificate in the **Your certificates tab** using the **changeit** password and the CA certificate in the **Authorities tab**.
- In **Edge** go to **Settings** -> **Privacy, search, and services**. Scroll to **Security** and click on **Manage certificates**. Import the administrator certificate in the **Personal tab** using the **changeit** password and the CA certificate in the **Trusted Root Certification Authorities tab**.
- In **Firefox** go to **Settings** -> **Privacy and Security**. Find the **Security section** and in **Certificates** click on **View Certificates**. Then import the administrator certificate in the **Your certificates tab** using the **changeit** password and the CA certificate in the **Authorities tab**.

:::warning
In Windows, a warning will be shown when the Certificate Authority is imported. That warning is expected as you must confirm that you want to trust the certificates generated by this custom certificate authority.
:::

## 5. Visit OpenUEM's Console

Now open `https://SERVER_NAME:CONSOLE_PORT` (replace the values that you've set in your .env file) and you should see OpenUEM's console

![Console LogIn](/img/console/login.png)

Finally, log in user your admin certificate and read how to install and add your first agent.

:::note
If you see any certificates error, please ensure that you've imported the right certificates in the right certificate stores of your browser
:::

## 6. Update

To update the Docker containers, use docker compose:

```(bash)
docker compose pull

docker compose --profile openuem up --force-recreate -d --build
```
