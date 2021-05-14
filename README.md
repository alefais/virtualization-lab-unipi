# Virtualization Lab, Wireless Networks Course, University of Pisa

This repository contains some code examples proposed during the laboratory part of the course Wireless Networks (cod. 918II) at the University of Pisa.

## Relevant topics

Relevant topics proposed in this part of the course are: Software Defined Networking (SDN), Network Function Virtualization (NFV), Multi-Access Edge Computing (MEC), Cloud and Edge computing, Service-Oriented Architectures (SOA), virtualization approaches (hypervisors, virtual machines (VMs), containers), RedHat OpenStack, Oracle VM VirtualBox, Docker, Kubernetes.

The most updated version of the course material can be found at [Wireless Networks (2020/2021)](http://for.unipi.it/alessandra_fais/teaching/), in the *Teaching* section of my web page.

## Dependencies

In order to run the examples, you first need to install the following dependencies:
* docker ([get docker](https://docs.docker.com/get-docker/))
* docker-compose ([install docker-compose](https://docs.docker.com/compose/install/))
* kubernetes ([install learning environment on a local machine](https://kubernetes.io/docs/tasks/tools/))

## Code examples

### Docker

* Simple single-component application created with [`docker`](https://www.docker.com/). The program logic is implemented as a bash script using [`fortune`](https://en.wikipedia.org/wiki/Fortune_(Unix)) and [`cowthink`](https://en.wikipedia.org/wiki/Cowsay) programs. `fortune` is put in [pipeline](https://en.wikipedia.org/wiki/Pipeline_(Unix)) with `cowthink`. Hence, the pseudorandom message from a database of quotations produced by `fortune` appears in the cow thought bubbles.

* Multi-component application created with `docker` and [`docker-compose`](https://docs.docker.com/compose/). The application logic results from the interaction of two services: one implementing a very simple web application, and the other storing the value of a visitor counter, incremented every time someone visits (reloads) the page. The web application component logic is implemented using JavaScript and the [Express framework](https://expressjs.com/). The database component is implemented as a [Redis](https://redis.io/) key-value storage.

* Multi-component application created with `docker`, `docker-compose` and [`docker volumes`](https://docs.docker.com/storage/volumes/). This application is an extended version of the previous example, where a `volume` is used for implementing data persistence.



## How to run the examples

### Docker

* Execute the application by running the script `run.sh` inside the [simple-docker-app](https://github.com/alefais/virtualization-lab-unipi/simple-docker-app) exercise folder.

* Execute the application by running the script `run.sh` inside the [composed-docker-app](https://github.com/alefais/virtualization-lab-unipi/composed-docker-app) exercise folder. You can access the application from your browser at `http://localhost:4001`. You can stop the application and remove the created containers by running the script `stop.sh` in the same folder.