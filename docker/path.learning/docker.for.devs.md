Containers
A Basic Container
Beyond Basic Containers
Along Comes Docker
Why We Should Care as Developers
Getting Started
Installing Docker
Running Our First Container

How Containers Work
Working With Containers
Images
Controlling Containers
Container Data
Networking
Creating Custom Images
Dockerfiles
Building a Custom Image
Docker Compose
docker-compose.yml
Running Containers
Testing Scaling
Containerizing Your Application
Setting up a Compose file
Running Composer

Development Tools
Thinking About Architecture
Docker Machine
Swarm Mode
Deploying to Swarm Mode
Dealing with Logs
Viewing Container Logs
Application Logs
Logging Drivers and Remote Logging
Sample EFK files
Twelve Factor Applications and Containers
Codebase
Dependencies
Configuration
Backing Services
Build, Release, Run
Processes
Port Binding
Concurrency
Disposibility
Development/Production Parity
Logs
Admin Processes
Command Cheatsheets
Images
Containers
docker-machine
docker-compose

Part 2: The technical stuff

5: The Docker Engine
Docker Engine - The TLDR
Docker Engine - The Deep Dive
Getting rid of LXC
Getting rid of the monolithic Docker daemon
The influence of the Open Container Initiative (OCI)
runc
containerd
Starting a new container (example)
One huge benefit of this model
What’s this shim all about?
How it’s implemented on Linux
What’s the point of the daemon
Securing client and daemon communication
Chapter summary

6: Images
Docker images - The TLDR
Docker images - The deep dive
Images and containers
Images are usually small
Pulling images
Image naming
Image registries
Image naming and tagging
Images with multiple tags
Filtering the output of docker image ls
Searching Docker Hub from the CLI
Images and layers
Sharing image layers
Pulling images by digest
A little bit more about image hashes (digests)
Multi-architecture images
Deleting Images
Images - The commands
Chapter summary

7: Containers
Docker containers - The TLDR
Docker containers - The deep dive
Containers vs VMs
The VM tax
Running containers
Checking that Docker is running
Starting a simple container
Container processes
Container lifecycle
Stopping containers gracefully
Self-healing containers with restart policies
Web server example
Inspecting containers
Tidying up
Containers - The commands
Chapter summary

8: Containerizing an app
Containerizing an app - The TLDR
Containerizing an app - The deep dive
Containerize a single-container app
Moving to production with Multi-stage Builds
A few best practices
Containerizing an app - The commands
Chapter summary

9: Deploying Apps with Docker Compose
Deploying apps with Compose - The TLDR
Deploying apps with Compose - The Deep Dive
Compose background
Installing Compose
Compose files
Deploying an app with Compose
Managing an app with Compose
Deploying apps with Compose - The commands
Chapter Summary

10: Docker Swarm
Docker Swarm - The TLDR
Docker Swarm - The Deep Dive
Swarm primer
Build a secure Swarm cluster
Swarm manager high availability (HA)
Swarm services
Viewing and inspecting services
Replicated vs global services
Scaling a service
Removing a service
Rolling updates
Troubleshooting
Backing up Swarm
Docker Swarm - The Commands
Chapter summary

11: Docker Networking
Docker Networking - The TLDR
Docker Networking - The Deep Dive
The theory
Single-host bridge networks
Multi-host overlay networks
Connecting to existing networks
Service discovery
Ingress load balancing
Docker Networking - The Commands
Chapter Summary

12: Docker overlay networking
Docker overlay networking - The TLDR
Docker overlay networking - The deep dive
Build and test a Docker overlay network in Swarm mode
Test the overlay network
The theory of how it all works
Docker overlay networking - The commands
Chapter Summary

13: Volumes and persistent data
Volumes and persistent data - The TLDR
Volumes and persistent data - The Deep Dive
Containers and non-persistent data
Containers and persistent data
Demonstrating volumes with containers and services
Sharing storage across cluster nodes
Volumes and persistent data - The Commands
Chapter Summary

14: Deploying apps with Docker Stacks
Deploying apps with Docker Stacks - The TLDR
Deploying apps with Docker Stacks - The Deep Dive
Overview of the sample app
Looking closer at the stack file
Deploying the app
Managing the app
Deploying apps with Docker Stacks - The Commands
Chapter Summary

15: Security in Docker
Security in Docker - The TLDR
Security in Docker - The deep dive
Linux security technologies
Docker platform security technologies
Docker Secrets
Chapter Summary

16: What next
Practice makes perfect
Get involved with the community
Kubernetes
-->
