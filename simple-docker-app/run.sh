#!/bin/bash

docker build -t fais/cowsay-app .
docker run fais/cowsay-app
