This repository includes webservice of **easy-bookmarks** repository.


### How can I use it?

Firstly;

Pull the container.

```bash
docker pull enesusta/easy-bookmarks-server:0.1
```

Then;

Create new `docker-compose.yml` file.

```yml
version: '3.1'

services: 
    node_test:
        container_name: easy-bookmarks-server
        image: enesusta/easy-bookmarks-server:0.1
        ports: 
            - '9050:3000'
        volumes: 
            - c:/Users/Enes/AppData/Local/Google/Chrome/User Data/Default:/data/json
```

















