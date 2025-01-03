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

:::danger
It's strongly recommended to change the JWT key with a random 32 characters long string
:::

## 3. Launch docker compose command

Where the compose.yaml file and the .env files are located, launch OpenUEM with the following command:

```(bash)
docker-compose up -d --build
```

## 4. Trust in digital certificates created

Next to the compose .yaml file you’ll find a **certificates folder** containing all the certificates that OpenUEM has created and that are [required to run](/docs/Introduction/security).

You must import two certificates to your favorite browser’s certificate store:

- The Certificate Authority (CA) certificate file which is in `certificates/ca/ca.cer`. This certificate must be added to the trusted certificate authorities store.
- The administrator certificate file which is in `certificates/users/admin.pfx` that is protected with the password **changeit**

You must import the certificate according to your browser’s settings:

- In **Chrome** go to **Settings** -> **Privacy and Security**. Click on the **Security section**. Scroll to **Manage Certificates** and click on it. Click on **Manage certificates imported from Windows**. In Windows, import the administrator certificate in the **Personal tab** using the **changeit** password and the CA certificate in the **Trusted Root Certification Authorities tab**. In Linux, import the administrator certificate in the **Your certificates tab** using the **changeit** password and the CA certificate in the **Authorities tab**
- In **Edge** go to **Settings** -> **Privacy, search, and services**. Scroll to **Security** and click on **Manage certificates**. Import the administrator certificate in the **Personal tab** using the **changeit** password and the CA certificate in the **Trusted Root Certification Authorities tab**.
- In **Firefox** go to **Settings** -> **Privacy and Security**. Find the **Security section** and in **Certificates** click on **View Certificates**. Then import the administrator certificate in the **Your certificates tab** using the **changeit** password and the CA certificate in the **Authorities tab**.
