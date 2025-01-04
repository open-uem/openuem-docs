# Security by design

**OpenUEM uses digital certificates** (this is not optional) for several purposes:

- To provide **mutual TLS authentication** between its components
- A user certificate will be used to log in to the console (OpenUEM Web Interface)
- The SFTP server requires a certificate to log in
- The VNC session uses secure web sockets thanks to TLS

A tool to create your own Certificate Authority (cert-manager) is provided with OpenUEM and can generate the required certificates during the setup, but you can use proven tools like [CFSSL](https://github.com/cloudflare/cfssl) to generate them too.

Remote assistance works thanks to VNC but, as we know, VNC servers are used to set a fixed password for remote connections. To improve security with VNC connections, OpenUEM will start the chosen VNC server only when the remote assistance is needed, set a onetime password and shutdown the server when it’s no longer needed. Also, secure web sockets are used between the Console and the VNC server.
