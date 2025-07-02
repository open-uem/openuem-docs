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

## 2. Create .env file with environment variables

Use the file named `.env-example` file to create a `.env` file

:::note
The file must be named .env without extension and with a dot before the env word as required by Docker to read the environment variables
:::

In the `.env` file, edit the environment variables that docker compose will use to build and get the containers up and running.

:::warning
You should set the Postgres database user and password in the `init.sh` file inside the `postgres\build` as defaults used are dummy, unsafe values
that should not be used in production

```
psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
  CREATE DATABASE openuem;
  CREATE USER **YOUR_USER** WITH ENCRYPTED PASSWORD '**YOUR PASSWORD**';
  GRANT ALL PRIVILEGES ON DATABASE openuem TO **YOUR_USER**;
  ALTER DATABASE openuem OWNER TO **YOUR_USER**;
EOSQL
```

**Then you must change the DATABASE_URL** in the .env file to use the username and password accordingly

:::

Here are the possible environment variables that can appear in the .env file.

| Name                    | Description                                                                                                                         | Optional | Example value                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| SERVER_NAME             | The name of the server where the console is hosted                                                                                  | no       | server.example.com                                      |
| POSTGRES_PORT           | The port number where the database service should be found                                                                          | no       | 5432                                                    |
| DATABASE_URL            | The database url in format postgres://user:password@openuem-db-1:port/openuem                                                       | no       | postgres://test:test@openuem-db-1:5432/openuem          |
| ORGNAME                 | Your organization's name                                                                                                            | no       | OpenUEM                                                 |
| ORGPROVINCE             | Your organization's province                                                                                                        | yes      | Valladolid                                              |
| ORGLOCALITY             | Your organization's locality                                                                                                        | yes      | Valladolid                                              |
| ORGADDRESS              | Your organization's address                                                                                                         | yes      | My org's address                                        |
| COUNTRY                 | Your organization's country                                                                                                         | no       | ES                                                      |
| OCSP_PORT               | The port used by the OCSP responder                                                                                                 | no       | 8000                                                    |
| NATS_SERVER             | The domain name used by the NATS server                                                                                             | no       | The value of SERVER_NAME                                |
| NATS_PORT               | The port used by the NATS server                                                                                                    | no       | 4433                                                    |
| NATS_SERVERS            | The NATS service url                                                                                                                | no       | server.example.com:4433                                 |
| REVERSE_PROXY_SERVER    | If you want to use a reverse proxy, set the domain name that you want to use to visit the console, **use an empty value otherwise** | no       | console.example.com or **use an empty value otherwise** |
| REVERSE_PROXY_AUTH_PORT | If you want to use a reverse proxy, set the port that will be used to answer for auth, **use an empty value otherwise**             | no       | 1340 or **use an empty value otherwise**                |
| OCSP                    | The URL for the OCSP responder service                                                                                              | no       | http://server.example.com:8000                          |
| DOMAIN                  | Your DNS domain                                                                                                                     | no       | example.com                                             |
| CONSOLE_PORT            | The port used by the console                                                                                                        | no       | 1323                                                    |
| AUTH_PORT               | The port used by the auth server                                                                                                    | no       | 1324                                                    |
| JWT_KEY                 | The key used to encrypt JWT tokens for user registration                                                                            | no       | averylongsecret                                         |
| TZ                      | The timezone used by OpenUEM containers                                                                                             | yes      | Europe/Madrid                                           |

server.example.com should be resolved by your DNS service if you want remote agents to be able to contact OpenUEM components.

:::tip
If you don't have a DNS you can use extra_hosts in the docker_compose.yml to add entries for the containers as if you were using /etc/hosts

Reference: https://docs.docker.com/reference/compose-file/build/#extra_hosts

![Extra hosts](/img/docker/extra_hosts.png)
:::

:::danger
It's strongly recommended to change the JWT key with a random 32 characters long string
:::

## 3. Use a reverse proxy (Optional)

You can run OpenUEM behind a reverse proxy. Caddy can be used and is supported for this deployment with docker compose.

First you must set the REVERSE_PROXY_SERVER and REVERSE_PROXY_AUTH_PORT env variables in the .env file and the REVERSE_PROXY_SERVER domain must be resolved by a DNS server.

Second you must uncomment these lines and watch that the right indentation is set:

```
  # caddy:
  #   image: caddy:latest
  #   restart: always
  #   profiles: ["caddy"]
  #   env_file:
  #     - .env
  #   ports:
  #     - "443:443"
  #     - $REVERSE_PROXY_AUTH_PORT:$REVERSE_PROXY_AUTH_PORT
  #   volumes:
  #     - "./caddy/Caddyfile:/etc/caddy/Caddyfile"
  #     - "./certificates/ca/ca.cer:/etc/caddy/ca.cer"
  #     - "./certificates/console/proxy.cer:/etc/caddy/proxy.cer"
  #     - "./certificates/console/proxy.key:/etc/caddy/proxy.key"
  #     - caddy_data:/data
  #     - caddy_config:/config


  # caddy_data:
  #   driver: local
  # caddy_config:
  #   driver: local
```

## 4. Launch docker compose command

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

If you want to use Caddy as a reverse proxy:

```
docker compose --profile caddy up -d
```

The Caddy container should be created and started:

```
 ✔ Container openuem-caddy-1  Started
```

If we want to stop OpenUEM we should run the following commands:

```(bash)
docker compose --profile openuem down
docker compose --profile init down
```

If you're using the Caddy option you can stop it with:

```(bash)
docker compose --profile caddy down
```

:::warning
If you find any error trying to launch the services, run the docker compose down commands shown above, **remove the volumes and the certificates folder** and start again

```
docker compose --profile openuem down
docker compose --profile init down
sudo rm -rf certificates
docker volume rm openuem_jetstream
docker volume rm openuem_pgdata
```

And if you use the Caddy option

```
docker volume rm openuem_caddy_config
docker volume rm openuem_caddy_data
```

Open an issue with all the possible information if you can't start OpenUEM with Docker
:::

## 5. Trust in digital certificates created

Before we can visit OpenUEM's console, we must import two digital certificates to our browser, the Certificate Authority certificate (ca.cer) and the user's certificate to log in. You have a guide explaining how to import certificates [here](/docs/Advanced%20Topics/user-certificate)

Next to the compose .yaml file you’ll find a **certificates folder** containing all the certificates that OpenUEM has created and that are [required to run](/docs/Introduction/security).

## 6. Visit OpenUEM's Console

Now open `https://SERVER_NAME:CONSOLE_PORT` (replace the values that you've set in your .env file) and you should see OpenUEM's console

:::note
If you've set a reverse proxy the url should be `https://REVERSE_PROXY_SERVER`
:::

![Console LogIn](/img/console/login.png)

Finally, log in user your admin certificate and read how to install and add your first agent.

:::note
If you see any certificates error, please ensure that you've imported the right certificates in the right certificate stores of your browser
:::

## 7. Update

To update the Docker containers, use docker compose:

```(bash)
docker compose pull

docker compose --profile openuem up --force-recreate -d --build
```

And if you use the Caddy option

```(bash)
docker compose --profile caddy up --force-recreate -d
```

## 8. Troubleshooting and FAQ

### 8.1 Why I get 401 | Please provide valid credentials when I try to log into OpenUEM console?

OpenUEM requires a user's certificate to log in. That certificate must be imported in the user's browser before trying to log-in. You can import the certificates following [these steps](/docs/Advanced%20Topics/user-certificate)

### 8.2 Why I see messages like _read certificates/console.cer: is a directory_ in docker logs?

That means that certificates were not generated in the initial phase, most probably there's a connection issue with the database container or wrong credentials have been used. Database credentials must match between the DATABASE_URL variable set in the .env file and the file build/postgres/init.sh file.
