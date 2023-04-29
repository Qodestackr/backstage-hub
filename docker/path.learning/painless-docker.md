Link: https://leanpub.com/painless-docker

Docker Events
Using Docker API To List Events
Monitoring A Container Using Docker Events
Docker Images
Docker Containers
Docker Volumes & Data Volumes

Cleaning Docker Dangling Containers
Docker Volumes Events
Docker Networks
Docker Networks Types
Bridge Networks
Overlay Networks
Using Swarm Mode
Using External Key/Value Store
Docker Networks Events
Docker Daemon & Architecture
Docker Daemon
Containerd
Docker Daemon Events
Docker Plugins
Overview Of Available Plugins
Docker Plugins Events
Docker Philosophy
Build Ship & Run
Docker Is Single Process
Docker Is Stateless
Docker Is Portable
Chapter IV - Advanced Concepts
Namespaces
Control Groups (cgroups)
Linux Capabilities
Secure Computing Mode (seccomp)
Application Armor (Apparmor)
Docker Union Filesystem
Storage Drivers
OverlayFS
Pro
Cons
AUFS
Pro
Cons
Btrfs
Pro
Cons
Device Mapper
Pro
Cons
ZFS
Pro
Cons
VFS
Pro
Cons
What Storage Driver To Choose
Chapter V - Working With Docker Images
Managing Docker Images
Images, Intermediate Images & Dangling Images
Finding Images
Finding Private Images
Pulling Images
Removing Images
Creating New Images Using Dockerfile
FROM
MAINTAINER
RUN
CMD
LABEL
EXPOSE
ENV
ADD
COPY
ENTRYPOINT
VOLUME
USER
WORKDIR
ARG
ONBUILD
STOPSIGNAL
HEALTHCHECK
SHELL
ENTRYPOINT VS CMD
Building Images
The Base Image
Dockerfile
Creating An Image Build Using Dockerfile
Optimizing Docker Images
Tagging Images
Your Private Registry
Optimizing Images
From Scratch
Busybox
Alpine Linux
Phusion Baseimage
Running The Init System
Adding Additional Daemons
Running Scripts At A Container Startup
Creating Environment Variables
Building A MongoDB Image Using An Optimized Base Image
Creating A Python Application Micro Image
Creating A Node.js Application Micro Image
Creating Your Own Docker Base Image
Using Tar
Using Scratch
Chapter VI - Working With Docker Containers
Creating A Container
Pausing And Unpausing A Container
Stopping A Container
Using Docker Stop
Using Docker Kill
Using Docker rm -f
Docker Signals
Container Life Cycle
Running Docker In Docker
Spotify’s Docker Garbage Collector
Performing A Docker Backup
Chapter VII - Working With Docker Machine
What Is Docker Machine & When Should I Use It ?
Installation
\*nix
MacOS
Windows
Using Docker Machine Locally
Creating Docker Machines
Connecting Docker Machines To Your Shell
Working With Multiple Docker Machines
Getting More Information About Docker Machines
Starting, Stopping, Restarting & Killing Machines
Upgrading Docker Machines
Using Docker Machine With External Providers
Create Machines On Amazon Web Services
Creating A Docker Swarm Cluster Using Docker Machine
Create Machines On DigitalOcean
Chapter VIII - Docker Networking
Single Host Vs Multi Host Networking
Single Host Networking
Multi Host Networking
Docker Networks
Docker Default Networks
None Network
Docker Host Network
Bridge Network
docker_gwbridge Network
Software Defined & Multi Host Networks
Bridge Networks
docker_gwbridge Network
Overlay Networks
Flannel
Weave
Open vSwitch
Single Host
Multi Host
Project Calico
Pipework
OpenVPN
Service Discovery
Etcd
Consul
ZooKeeper
Load Balancers
Nginx
HAProxy
Traefik
Kube-Proxy
Vulcand
Moxy
servicerouter.py
Chapter IX - Composing Services Using Compose
What Is Docker Compose
Installing Docker Compose
Docker Compose For Mac And Windows
Docker For Linux
Running Wordpress Using Docker Compose
Running LEMP Using Docker Compose
Scaling Docker Compose
Docker Compose Use Cases
Chapter X - Docker Logging
Docker Native Logging
Adding New Logs
Docker Logging Drivers
Using Fluentd Log Driver
Using AWS CloudWatch Log Driver
Chapter XI - Docker Debugging And Troubleshooting
Docker Daemon Logs
Docker Debugging
Checking Docker Status
Debugging Containers
Troubleshooting Docker Using Sysdig
Chapter XIII - Orchestration - Kubernetes
Introduction
Master Components
Pods
Deployments
Services
Replication Controller
Replicaset
Nodes/Minions
Kubelet
The Container Runtime
Kube Proxy
A Local Kubernetes Using Minikube
Installation
Running Minikube
Kubectl
Publishing Services & Services Types
Using Kubernetes With Google Container Engine
Prerequisites
Setting Up The Compute Zone
Creating The Cluster
Creating The Wordpress Services
Creating Our Pod
Exposing Wordpress
Logging Into Our Cluster Machines
Using an HTTP Proxy to Access the Kubernetes API
Inspecting Services
Inspecting Nodes
Inspecting Namespaces
Viewing Kubernetes Configurations
Installing Kops
Prerequisites
Chapter XIV - Orchestration - Rancher/Cattle
Rancher Architecture
RancherOS
Running Rancher
Running A Wordpress Service
Cattle: Rancher Container Orchestrator
Scaling Wordpress Using Rancher
Chapter XV - Docker API
Exploring Docker API
Streaming Containers Logs Using Docker API
Chapter XVI - Docker Security
Possible Threats
Kernel Panic & Exploits
Container Breakouts & Privilege Escalation
Poisoned Images
Denial-of-service Attacks
Compromising secrets
Application Level Threats
Host System Level Treats
Security Best Practices
Security By Design
SetUID/SetGID
Controlling CPU Usage
Controlling Memory Usage
Verifying Images
Set Container Filesystem to Read Only
Set A User
Do Not Use Environment Variables To Share Secrets
Use Orchestrators Secret managers
Do Not Run Containers In The Privileged Mode
Turn Off Inter-Container Communication
Set Volumes To Read-Only
Only Install Necessary Packages
Make Sure Docker Is Up To Date
Use Vulnerability Analysis Scanners
Properly Configure Your Docker Registry Access Control
Security Through Obscurity
Secure And Control Your Code
Use Limited Linux Capabilities
Use Seccomp
Chapter XVII - Docker, Containerd & Standalone Runtimes Architecture
Docker Daemon
Containerd
Bonus 1: Architecting A Multi-Cloud, Highly Available, Scalable & Distributed Wordpress Using Docker, Docker Swarm, Traefik & GlusterFS
The Use Case
Preparing The Infrastructure
Creating A Trusted Pool Using GlusterFS
Creating Our Swarm Cluster
Deploying Our Application
Adding Traefik:
Udpating Services:
The Multi Cloud Wordpress
Optimizing GlusterFS
Bonus 2: Building A Near Real Time Event-Driven System Using Docker, Python, Amazon SNS & SQS
Introduction
Amazon Simple Notification Service
Amazon Simple Queue Service
Unix Philosophy & Microservice Based Software
A Common Architecture For Message Based Microservices
Building The Publisher
Building The Consumer
The Infrastructure
Load Testing
Benchmarking Results
