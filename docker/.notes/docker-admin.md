### Docker Administration

1. Docker Configuration — After installing Docker and starting Docker, the dockerd daemon runs with its default configuration. This page gathers resources on how to customize the configuration, Docker registry configuration, start the daemon manually, and troubleshoot and debug the daemon if run into issues.

2. Collecting Docker Metrics — In order to get as much efficiency out of Docker as possible, we need to track Docker metrics. Monitoring metrics is also important for troubleshooting problems. This page gathers resources on how to collect Docker metrics with tools like Prometheus, Grafana, InfluxDB and more.

3. Starting and Restarting Docker Containers Automatically — Docker provides restart policies to control whether your containers start automatically when they exit, or when Docker restarts. Restart policies ensure that linked containers are started in the correct order. This section gathers resources about how to automatically start Docker container on boot or after server crash.

4. Managing Container Resources — Resource management for Docker containers is a huge requirement for production users. It is necessary for running multiple containers on a single host in an efficient way and to ensure that one container does not starve the others in terms of cpu, memory, io, or networking. This section gathers resources about how to improve Docker performance by managing it’s resources.

5. Controlling Docker With systemd — Systemd provides a standard process for controlling programs and processes on Linux hosts. One of the nice things about systemd is that it is a single command that can be used to manage almost all aspects of a process. This section gathers resources about how to use systemd with Docker daemon service.
<!-- TODO: Linux demystify systemd -->

6. Docker CLI Commands — There are a large number of Docker client CLI commands, which provide information relating to various Docker objects on a given Docker host or Docker Swarm cluster. Generally, this output is provided in a tabular format. This section gathers resources about how the Docker CLI Work, CLI Tips and Tricks and basic Docker CLI commands.
   <!-- TODO: CLI commands mapped to bash scripts, move later in a Node.js library for speed! -->

   <!--
   Docker compose
   Docker Machine
   Docker Swarm
   -->

7. Docker Logging — Logs tell the full story of what is happening, or what happened at every layer of the stack. Whether it’s the application layer, the networking layer, the infrastructure layer, or storage, logs have all the answers. This section gathers resources about working with Docker logs, how to manage and implement Docker logs and more.

8. Troubleshooting Docker Engine — Docker makes everything easier. But even with the easiest platforms, sometimes you run into problems. This section gathers resources about how to diagnose and troubleshoot problems, send logs, and communicate with the Docker Engine.

9. Docker Orchestration – Tools and Options — To get the full benefit of Docker container, you need software to move containers around in response to auto-scaling events, a failure of the backing host, and deployment updates. This is container orchestration. This section gathers resources about Docker orchestration tools, fundamentals and best practices.
