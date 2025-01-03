# Log In to the console

OpenUEM comes with a web user interface named **OpenUEM Console**

The console can work behind a reverse proxy like **Caddy** or **NGINX** (recommended) or be served right away from the Console component on port 1323 by default

The log in page looks like this:

![Console LogIn](/img/console/login.png)

To log in to the console, you'll need to have a user certificate installed in your browser. In the server setup, if you've selected to auto generate the certificates an admin certificate will be created and placed under certificates\user and will both the CA certificate and the user certificate should be imported automatically.

The certificate comes in a PFX file that you can import using the password that you've set in the setup or if you leave it empty you'll have to use the `changeit` password.

When you click the log in button you'll have to select the certificate. If no certificate is shown check if you've imported the certificate to the Personal certificates store.

![Select Certificate](/img/console/select_certificate.png)

If authentication works fine, you'll see the **Dashboard** which is documented in the next section
