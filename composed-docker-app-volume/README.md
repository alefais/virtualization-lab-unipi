# [Docker] Third example: a composed Docker application with persistent storage

## How to run
1. Build the image of the **Node web app service** from the Dockerfile (the current directory ```.``` is the build context for the image, a port mapping is configured to map port ```4001``` on the local host to port ```8081``` on the Docker container).

2. Create the volume
```
$ docker volume create --name=composed-docker-app-volume_redis-db-data
```

3. Create a running Docker container of the **Node web app service** from the **Node web app** custom image created at step 1.

4. Create a running Docker container for the **Redis DB service** from the official **redis** image from the Docker Hub. This is the container that will be attached to the volume created at step 2.

```
$ docker volume ls      // check the volume

$ docker-compose up     // start all the services

$ docker-compose stop   // stop node-web-app and redis-db services

$ docker-compose down   // stop and remove node-web-app and redis-db 
                           services and the network connecting them
```