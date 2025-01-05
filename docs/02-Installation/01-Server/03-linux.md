# 🐧 Linux

The OpenUEM server components can be installed on a Debian/Ubuntu machine using .deb packages available in OpenUEM repository.

## 1. Adding the repository

The Debian/Ubuntu repository and its contents are signed with a GPG public key

To download the public GPG key and add it to the keyring use the following command:

```(bash)
curl -fsSL https://apt.openuem.eu/pgp-key.public | sudo gpg --dearmor -o /usr/share/keyrings/openuem.gpg
```

Now, to add the repository, run the following command:

```(bash)
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/openuem.gpg] https://apt.openuem.eu stable main" | sudo tee /etc/apt/sources.list.d/openuem.list
```

Update the repositories:

```(bash)
sudo apt update -y
```

Finally, to start the installation run:

```(bash)
sudo apt install openuem-server
```
