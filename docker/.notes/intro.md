Virtualization is the technology of creating a virtual rather than actual version of something.

> _virtual means not physically existing but rather made by software to do so._

With virtualization, we can create a digital simulation of OS, server, storage devices, CPUs, or network resources. This allows us to run different operating systems, desktops, servers, and applications on the same physical hardware resources.

### Benefits

- Cost
- Easy to test on different environments
- Isolation and security
- Consistency

### Types of virtualization

- Application
- Networking
- OS-level virtualization: Docker

### Docker

A containerization technology/ A platform to create containers that run in isolation.

### Docker architecture

Components of the Docker engine: <!--Check the media folder to see an image-->

1. Docker Daemon: A persistent background process that manages images, containers, networks, and volumes. It also constantly listens to Docker API requests and processes them.

2. Docker API: A REST API used by applications/ clients to reach the daemon.

<!--
TODO:
1. Understand Docker API v Docker client
2. Understand Docker daemon vs Docker Host
-->

3. Docker CLI: <!--command line tool to interact with the docker daemon. via API? is it not a client??-->

<!-- Docker architecture uses a client-server model and comprises of the Docker client, Docker Host, Network and storage components, and the _Registry_/ Hub. -->

The main purpose of the Docker Client is to provide a means to direct the pull of images from a registry and to have it run on a Docker host. Common commands issued by a client are:`bash build pull run`

2. DockerHost
The Docker host provides a complete environment to execute and run applications. It comprises of the Docker daemon, Images, Containers, Networks, and Storage. As previously mentioned, the daemon is responsible for all container-related actions and receives commands via the CLI or the REST API. It can also communicate with other daemons to manage its services. The Docker daemon pulls and builds container images as requested by the client. Once it pulls a requested image, it builds a working model for the container by utilizing a set of instructions known as a build file. The build file can also include instructions for the daemon to pre-load other components prior to running the container, or instructions to be sent to the local command line once the container is built.
<!--
TODO: Understand Docker host vs Docker engine
-->

### Docker Objects

Objects used to assemble the application:

<!-- Key concepts: Dockerfile<contains instructions on how to build an image> -->

- Images: read-only binary templates used to build containers. They contain instructions or metadata that describe containers. Can be used on its own or extended to sit on top of others<base image>.

- Containers: Sandboxed/ encapsulated env where applications run. Container is defined by the image and additional configurations passed when starting it (-d, how to run it in detached) / --network, -v(volumes) etc. They add a writeable layer on top of the read-only image layer. They only have access to resources defined in the image + additional access defined when building the image into a container.
  <!-- A runtime or running instance of an image. It provides a lightweight, isolated environment for running applications and dependencies. Each container has its own `fs`, network interface, and resource limits.
   -->
  **Steps to create a running container**:

<!-- Invoke docker run -->

- Pull image if no locally from a registry.
- Create a container: Create a new container with its own writeable layer on top of the image's read only layer(coz its a running instance, makes sense to be stateful).
- Start the container: Docker starts the container and runs the processes specified in the image's entrypoint. It runs on its own isolated env, with its own network namespace, `fs`, resouce limits/ process space.
  <!-- Isolated env made possible by Linux's kernel namespaces : Dictate isolation of processes-->
  <!-- Resource space made possible by Linux's kernel cgroups: Dictate controls of resources -->
- Expose ports: If container needs to accept incoming network connections, Docker exposes ports from container to the host, so as to correctly route the traffic.
- Connect to networks: Connecting containers to networks to allow them to communicate with each other or with external systems.
- Manage containers: Monitoring resource usage/ metrics, logging, stopping/ restarting, and more.
  Containers: Containers are encapsulated environments in which applications are run. A container is defined by the image and configuration options. At a lower level, you have containerd, which is a core container runtime that initiates, and supervises container performance.

<!--
NOTE: You can also create a new image based on the current state of a container.
-->

- Networking: Docker implements networking in an application-driven manner and provides various options while maintaining enough abstraction for application developers. There are basically two types of networks available – the default Docker network and user-defined networks. By default, you get three different networks on the installation of Docker – none, bridge, and host. The none and host networks are part of the network stack in Docker. The bridge network automatically creates a gateway and IP subnet and all containers that belong to this network can talk to each other via IP addressing. This network is not commonly used as it does not scale well and has constraints in terms of network usability and service discovery.

<!--
TODO: Learn basics of networking
1. Network hardware
2. Software world: OSI model
3. How software networking works: Ports, Subnets, Gateways,
Run what is h/w part/concept and what is software part, + importantly: its role
-->

<!-- TODO: IP tables & DNS in docker, How it works on bare metal stuff anyway -->

**Bridge network**: Similar to the default bridge network, a user-defined Bridge network differs in that there is no need for port forwarding for containers within the network to communicate with each other. The other difference is that it has full support for automatic network discovery.

**Overlay network**: An Overlay network is used when you need containers on separate hosts to be able to communicate with each other, as in the case of a distributed network. However, a caveat is that swarm mode must be enabled for a cluster of Docker engines, known as a swarm, to be able to join the same group.

**Macvlan network**: When using Bridge and Overlay networks a bridge resides between the container and the host. A Macvlan network removes this bridge, providing the benefit of exposing container resources to external networks without dealing with port forwarding. This is realized by using MAC addresses instead of IP addresses.

- Storage: You can store data within the writable layer of a container but it requires a storage driver. Being non-persistent, it perishes whenever the container is not running. Moreover, it is not easy to transfer this data. In terms of persistent storage, Docker offers four options:

1. **Data Volumes**: Data Volumes provide the ability to create persistent storage, with the ability to rename volumes, list volumes, and also list the container that is associated with the volume. Data Volumes sit on the host file system, outside the containers copy on write mechanism and are fairly efficient.
<!-- Containers copy on write mechanism: Explained -->

2. **Data Volume Container**: A Data Volume Container is an alternative approach wherein a dedicated container hosts a volume and to mount that volume to other containers. In this case, the volume container is independent of the application container and therefore can be shared across more than one container.

<!-- ASK: So by default, If I create a volume, it is associated with that container? -->

3. **Directory Mounts**: Another option is to mount a host’s local directory into a container. In the previously mentioned cases, the volumes would have to be within the Docker volumes folder, whereas when it comes to Directory Mounts any directory on the Host machine can be used as a source for the volume.

4. **Storage Plugins**: Storage Plugins provide the ability to connect to external storage platforms. These plugins map storage from the host to an external source like a storage array or an appliance. A list of storage plugins can be found on Docker’s Plugin page.

<!-- Most preferred? Give scenarios -->
<!-- Format in which docker stores data, based on OS, speed, etc -->

### Docker Registries

Services to provide location to store images, publish, etc.. Repos that is. Can be public or private(create one)

<!-- How docker maps, pushes, etc to a registry-->
<!-- Scan images, run, etc -->

<!--
TODO: Create custom docker image and run containers
TODO: Experiment with different networking and volume configurations
TODO: Deploy docker containers to production, or with docker compose
-->

**TODO**: Write a script to backup or restore data from a Docker container<That's running a backend service>
[RUN] as a cron-job / scheduling.. Linux crontab

**TODO**: Write a script to check for stopped containers so as to remove or restart them.

**TODO**: Write a script to cleanup a docker container<Running a Node.js application>
**TODO**: Write a script that checks used ports in Docker and on HOST.. Prompt me to use different port or kill certain

<!--
DOCKER & CONTAINERS NOTES
- Containers are about portability, consistency, and resource utilization.
- Docker is just one of the many tools you can use to work with containers.
- Image layers exist to reuse work, transfer less data and save bandwidth.
- Containers were not designed as a security containment mechanism from the start, and it shows.
- Dumping your application in containers won't automatically scale.
- Containers don't exist as a first-class object - Linux namespaces and cgroups work together to create "containers".
- Multiple processes can run in the same container, this only means the processes share the same namespaces and cgroup.
- Docker has roles/ work is: Package application into images, distribute images, and run containers from images.
-
Docker is easy to get started with, but the images are too permissive and not correct by default.???? Refine
-
Lots of people use containers badly, and don’t even know it. ??? How do I do better

- It’s okay & possible to use docker-compose for production workloads running on a single machine.
- Container orchestration, security and building good images take effort and experience. They are complex topics by themselves.
- Sometimes it’s okay to not-use Docker even though you could: <Just because you can doesn't mean you should>
 -->

- https://github.com/docker/roadmap/projects/1

- https://www.docker.com/events/

### References

- https://www.aquasec.com/cloud-native-academy/docker-container/
