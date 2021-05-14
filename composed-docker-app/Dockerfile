# Specify a base image
FROM node:alpine

# Set the author of the new image
LABEL maintainer="alessandra.fais@phd.unipi.it"

# Specify a working directory
WORKDIR /usr/app

# Copy the dependencies file
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy remaining files
COPY ./ ./

# Default command
CMD ["npm","start"]
