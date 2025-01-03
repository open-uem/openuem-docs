# Use a reverse proxy

While it's possible to use the console directly visiting the associated url, **it’s advisable to run OpenUEM's console behind a reverse proxy**. For now, in this section you can find working configuration files for two popular reverse proxies, **[Caddy](https://caddyserver.com/)** and **[NGINX](https://nginx.org/en/)**.

In the following examples the console will be accessible under `https://console.openuem.eu` and the reverse proxy will send traffic to the console server that is located under `https://lothlorien.openuem.eu:1323` and to the auth server which is located under `https://lothlorien.openuem.eu:1324`.

## Caddy configuration

Here's a sample configuration for Caddy

```(bash)
console.openuem.eu {
    tls proxy.cer proxy.key
    reverse_proxy https://lothlorien.openuem.eu:1323 {
        header_up Host {upstream_hostport}
    }
}

console.openuem.eu:1340 {
    tls proxy.cer proxy.key {
        client_auth {
            mode require_and_verify
            trust_pool file {
                pem_file ca.cer
            }
        }
    }
    reverse_proxy https://lothlorien.openuem.eu:1324 {
        header_up Host {upstream_hostport}
        header_up Client-Cert :{tls_client_certificate_der_base64}:
    }
}

```

## NGINX configuration

Here's a sample configuration for NGINX (not NGINX plus)

```(bash)
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

events {
    worker_connections  1024;
}

http {
    server {
        listen              443 ssl;
        server_name         console.openuem.eu;

        ssl_certificate     proxy.cer;
        ssl_certificate_key proxy.key;


        location / {
            proxy_pass https://lothlorien.openuem.eu:1323;
        }
    }

    server {
        listen              1340 ssl;
        server_name         console.openuem.eu;

        ssl_certificate     proxy.cer;
        ssl_certificate_key proxy.key;
        ssl_client_certificate ca.cer;
        ssl_verify_client on;


        location / {
            proxy_pass https://lothlorien.openuem.eu:1324;
            proxy_set_header Client-Cert :$ssl_client_cert:;
        }
    }
}
```
