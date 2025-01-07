# 🏢 Using a NATS cluster

OpenUEM is ready to use a NATS cluster. NATS supports running each server in clustered mode. You can cluster servers together for high volume messaging systems and resiliency and high availability. When you install the OpenUEM component you'll be asked if you want to use a cluster.

:::warning
A NATS cluster should have an odd number of servers, in this case we should set 3 or 5 servers.
:::

## 1. Ubuntu/Debian installer

If you want to run a cluster and you’re using the Debian/Ubuntu installation, you’ll have to answer some questions.

You must set the cluster name

![Cluster name](/img/linux/cluster_name.png)

Then you must specify the port where the server will listen to cluster messages. This port should be different than the NATS server port.

![Server's cluster port](/img/linux/cluster_port.png)

Finally, you must specify which are the other members of the cluster (excluding the server we’re currently configuring) using a comma-separated list of the server names and their cluster ports.

![Cluster's other members](/img/linux/cluster_members.png)
