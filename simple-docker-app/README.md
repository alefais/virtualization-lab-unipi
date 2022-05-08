# [Docker] First example: a simple Docker application

## How to run
1. Build the image from the Dockerfile (use ```-t``` to tag the image with a name, the current directory ```.``` is the build context for the image).
```
$ docker build -t fais/cowsay-app .
```

2. Create a running Docker container from the image.
```
$ docker run fais/cowsay-app
```