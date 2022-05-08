# [Docker] Second example: a composed Docker application

## How to run
1. Build the image of the **Node web app service** from the Dockerfile (the current directory ```.``` is the build context for the image, a port mapping is configured to map port ```4001``` on the local host to port ```8081``` on the Docker container).

2. Create a running Docker container of the **Node web app service** from the **Node web app** custom image created at step 1.

3. Create a running Docker container for the **Redis DB service** from the official **redis** image from the Docker Hub.

```
$ docker-compose up     // start all the services

$ docker-compose stop   // stop node-web-app and redis-db services

$ docker-compose down   // stop and remove node-web-app and redis-db 
                           services and the network connecting them
```