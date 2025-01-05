# 🐘 Setting the Postgres database

# 1. Install the Postgres database server

To install the Postgres database server on a Windows or Linux machine please use the following references:

- [Debian](https://www.postgresql.org/download/linux/debian/)
- [Ubuntu](https://www.postgresql.org/download/linux/ubuntu/)
- [Windows](https://www.postgresql.org/download/windows/)

# 2. Create the database

# 2.1 Ubuntu/Debian

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
