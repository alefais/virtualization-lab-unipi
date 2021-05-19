# -*- mode: ruby -*-
# vi: set ft=ruby :

ENV["LC_ALL"] = "em_US.UTF-8"


###############
## Variables ##
###############

CPUS = 2

# 4 GB RAM should be sufficient for the examples, reduce the memory number (in MB) if you physical machine does not have enough physical memory
RAM = 4096

# Bento: Packer templates for building minimal Vagrant baseboxes (the bento/ubuntu-18.04 is a small image of 500 MB, fast to download)
BOX = "bento/ubuntu-18.04"
VM_NAME = "virtlab-ubuntu-18.04"


#############################
## Installing dependencies ##
#############################

# setup docker
$setup_docker = <<-SCRIPT 
  apt-get update
  apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common
  
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add-
  apt-key fingerprint 0EBFCD88
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
  
  apt-get update
  apt-get install -y docker-ce docker-ce-cli containerd.io
SCRIPT

$post_setup_docker = <<-SCRIPT
  # Allow vagrant user to use Docker without sudo
  usermod -aG docker vagrant
  if [ -d /home/vagrant/.docker ]; then
    chown -R vagrant:vagrant /home/vagrant/.docker
  fi
SCRIPT

# setup docker-compose
$setup_docker_compose = <<-SCRIPT 
  curl -L https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
SCRIPT

# setup kubernetes
#$setup_kubernetes = <<-SCRIPT 
#SCRIPT


###########################
## Vagrant configuration ##
###########################

# The "2" in Vagrant.configure configures the configuration version (we support older styles for backwards compatibility). 
Vagrant.configure("2") do |config|

  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  if Vagrant.has_plugin?("vagrant-vbguest")
    config.vbguest.auto_update = false
  end

  config.vm.define "virtlab" do |virtlab|

    # VirtualBox-specific configuration (VB is the only supported provider)
    virtlab.vm.provider "virtualbox" do |vb|
      vb.gui = true
      vb.name = VM_NAME
      vb.cpus = CPUS
      vb.memory = RAM
    end

    # VM specific configuration
    virtlab.vm.box = BOX
    # Sync ./ to home dir of vagrant to simplify the install script
    virtlab.vm.synced_folder ".", "/vagrant", disabled: true
    virtlab.vm.synced_folder ".", "/home/vagrant/virtlab", type: 'virtualbox'

    virtlab.hostname = "virtlab"
    virtlab.vm.box_check_update = true
    virtlab.vm.post_up_message = 'Welcome in the VirtLab VM! Run "$ vagrant ssh virtlab" to ssh into the running VM.'
  
    virtlab.vm.provision :shell, inline: $setup_docker, privileged: true
    virtlab.vm.provision :shell, inline: $post_setup_docker, privileged: true
    virtlab.vm.provision :shell, inline: $setup_docker_compose, privileged: true

    virtlab.vm.provision "shell", inline: <<-SHELL
      echo "Testing Docker..."
      docker run hello-world
      docker image prune --force
    SHELL

    #virtlab.vm.provision "shell", inline: <<-SHELL
    #  apt-get update
    #  apt-get install -y apache2
    #SHELL

    virtlab.vm.network "forwarded_port", guest: 4001, host: 4001, host_ip: "127.0.0.1"
    
  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  # config.vm.box = BOX #"base"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = true

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL

  end
end
