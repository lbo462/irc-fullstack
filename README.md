# IRC fullstack

This stacks contains:
- an IRC server (inspircd)
- a webclient (thelounge) configured to work only with the internal IRC server

_The IRC server is only accessible through the webclient since it's not exposed_

## Dependencies

- a Linux distrib with `make` installed
- docker and docker compose

## How to use

__Start the stack__

`make up` will mount the stack and expose it in HTTP on the port 8000 of the computer.

You'll need to create user accounts to use the webclient.

`$ make thelounge command="add <username>"`

To remove a user: 

`$ make thelounge command="remove <username>"`

To remove all users:

`$ make clear_users`

__Stop the stack__

`make down`

## Configuration

Install a graphic theme :

`$ make thelounge command="install [name]"`

see [https://www.npmjs.com/search?q=keywords%3Athelounge-theme](https://www.npmjs.com/search?q=keywords%3Athelounge-theme) for the list of available themes

## Other commands

See `Makefile` for the full list, every thing is explicit, at least imo.

## Full clear

__STOP THE STACK BEFOREHAND!__

If you have git installed, just go with `git clean -X -f`.

Otherwise, use `make clear_all`, it's the same.

## Run under SSL

It's highly recommanded to expose the client under a reverse proxy providing an SSL certificate.

To do so, start an NGINX server with the following configuration:

`/etc/nginx/conf.d/default.conf`
```
server {
    listen 80;
    listen [::]:80;

    server_name <domain.name> www.<domain.name>;

    location /irc/ {
        proxy_pass http://localhost:8000/;
        proxy_http_version 1.1;
        proxy_set_header Connection "upgrade";
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 1d;
    }
}
```

Then, use [cerbot](https://certbot.eff.org) to generate an SSL certificate (you can let it edit your nginx config).

It should then look like something like this:
```
server {

    server_name <domain.name> www.<domain.name>;

    location /irc/ {
        proxy_pass http://localhost:8000/;
        proxy_http_version 1.1;
        proxy_set_header Connection "upgrade";
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 1d;
    }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/<domain.name>/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/<domain.name>/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
server {
    if ($host = <domain.name>) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    listen [::]:80;

    server_name <domain.name> www.<domain.name>;
    return 404; # managed by Certbot
}
```