[![Release](https://img.shields.io/github/v/release/alefais/virtualization-lab-unipi?label=Release)](https://github.com/alefais/virtualization-lab-unipi/releases/latest)
[![Last commit](https://img.shields.io/github/last-commit/alefais/virtualization-lab-unipi/main?label=Last%20commit)](https://github.com/alefais/virtualization-lab-unipi/main)

# Virtualization Lab, Wireless Networks Course, Università di Pisa

This repository contains some code examples I proposed as Teaching Assistant during the laboratory part of the course Wireless Networks (cod. 918II) at Università di Pisa, in the academic years from 2019/2020 to 2021/2022. In the academic years 2019/2020 and 2020/2021, the laboratory lectures were shared with the course "Progetto di Reti Wireless e Servizi Multimediali" (cod. 558II) at Università di Pisa. Also, in the academic year 2021/2022, the laboratory was shared with the course "Wireless Network Design" (cod. 1041I) at Università di Pisa. This laboraotry course targets students attending the Master Degree in Computer Science and Networking and the Master Degree in Telecommunication Engineering at Università di Pisa.


## Relevant topics

Relevant topics proposed are: Software Defined Networking (SDN), Network Function Virtualization (NFV), Multi-Access Edge Computing (MEC), Cloud and Edge computing, Service-Oriented Architectures (SOA), virtualization approaches (hypervisors, virtual machines (VMs), containers), RedHat OpenStack, Oracle VM VirtualBox, Docker, Kubernetes.

The most updated version of the course material can be found at [Wireless Network Design (2021/2022)](http://for.unipi.it/alessandra_fais/teaching/), in the *Teaching* section of my web page.

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

* Execute the application by running the script `run.sh` inside the [simple-docker-app](https://github.com/alefais/virtualization-lab-unipi/tree/main/simple-docker-app) exercise folder, or have a look at the [README](https://github.com/alefais/virtualization-lab-unipi/tree/main/simple-docker-app/README.md).

* Execute the application by running the script `run.sh` inside the [composed-docker-app](https://github.com/alefais/virtualization-lab-unipi/tree/main/composed-docker-app) exercise folder. You can access the application from your browser at `http://localhost:4001`. You can stop the application and remove the created containers by running the script `stop.sh` in a second terminal window from the same folder. You can also have a look at the step-by-step instructions in the [README](https://github.com/alefais/virtualization-lab-unipi/tree/main/composed-docker-app/README.md).

* Execute the application by first creating a Docker volume as
`docker volume create --name=composed-docker-app-volume_redis-db-data`, and then running the script `run.sh` inside the [composed-docker-app-volume](https://github.com/alefais/virtualization-lab-unipi/tree/main/composed-docker-app-volume) exercise folder. You can access the application from your browser at `http://localhost:4001`. You can stop the application and remove the created containers by running the script `stop_and_remove.sh` in a second terminal window from the same folder. If you run the application again, the last value of the `visits` counter will be retrieved from the volume, where it has been permanently stored during the previous execution. You can also have a look at the step-by-step instructions in the [README](https://github.com/alefais/virtualization-lab-unipi/tree/main/composed-docker-app-volume/README.md).
