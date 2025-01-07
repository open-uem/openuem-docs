# 🐘 Setting the Postgres database

## 1. Install the Postgres database server

To install the Postgres database server on a Windows or Linux machine please use the following references:

- [Debian](https://www.postgresql.org/download/linux/debian/)
- [Ubuntu](https://www.postgresql.org/download/linux/ubuntu/)
- [Windows](https://www.postgresql.org/download/windows/)

## 2. Create the database

### 2.1 Ubuntu/Debian

First, start the Postgres database server and enable the service to start at boot:

```(bash)
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

Then check that the server is running:

![Server running on linux](/img/linux/postgres_running.png)

Now, install the postgresql client:

```(bash)
sudo apt install postgresql-client
```

Run the following command to open psql as the postgres user:

```(bash)
sudo -u postgres psql
```

From postgres# prompt introduce the following commands, changing the user, password and database name according to your needs:

```(bash)
CREATE DATABASE openuem;
CREATE USER test WITH ENCRYPTED PASSWORD 'test';
GRANT ALL PRIVILEGES ON DATABASE openuem TO test;
ALTER DATABASE openuem OWNER TO test;
\q
```

The OpenUEM database and the associated user should be ready.

:::note
When you install OpenUEM (server components or agent) you'll have to specify the database url. Following the previous example the database url should be `postgres://test:test@localhost:5432/openuem`
:::

## 3. Remove the database tables

If you need to perform a clean installation, you should remove the database tables. First you must open a psql session:

```(bash)
sudo -u postgres psql
```

From postgres# prompt connect to the database `\c openuem`, execute the drop table instructions (you can copy and paste them) and quit the connection.

```(bash)
\c openuem

drop table "certificates" cascade;
drop table "agents" cascade;
drop table "releases" cascade;
drop table "agent_tags" cascade;
drop table "antiviri" cascade;
drop table "apps" cascade;
drop table "computers" cascade;
drop table "deployments" cascade;
drop table "logical_disks" cascade;
drop table "metadata" cascade;
drop table "org_metadata" cascade;
drop table "monitors" cascade;
drop table "network_adapters" cascade;
drop table "operating_systems" cascade;
drop table "printers" cascade;
drop table "revocations" cascade;
drop table "settings" cascade;
drop table "tags" cascade;
drop table "users" cascade;
drop table "sessions" cascade;
drop table "shares" cascade;
drop table "system_updates" cascade;
drop table "updates" cascade;
drop table "servers" cascade;

\q
```
