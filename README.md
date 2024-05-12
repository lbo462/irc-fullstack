# IRC fullstack

This stacks contains:
- an IRC server (inspircd)
- a webclient (thelounge) configured to work only with the internal IRC server
- a reverse proxy (nginx) to cover everything

_The IRC server is only accessible through the webclient since it's not exposed_

## Dependencies

- a Linux distrib with `make` installed
- docker and docker compose

## How to use

__Start the stack__

`make up`

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