### Docker volumes

Docker volumes is a way of persisting data outside a docker container. Normally, the container keeps data and state within it. If something goes wrong, the data is lost. A volume is a directory stored outside the container's `fs` that can be shared among multiple containers. Docker Volumes can be created via CLI or Docker API.

When a container is created with a volume, the container is given access to the volume as a seperate directory, allowing data to persist across container restarts and be shared between containers.

**Types of Volumes in Docker**

- _Host mounted volumes_: created by mapping a directory on the host machine to a directory inside docker

You specify the location of the volume when creating it. Like:

```bash
docker run -v /path/on/host:/path/in/container image_name
```

- _Named volumes_: Created and managed by docker + shared across multiple containers

Location of the volume is managed by docker itself, likely located at: `/var/lib/docker/volumes` on the host machine.

- Anonymous volumes

### ?? on Docker volumes

- Tradeoffs between volumes types

- Speed in backup and restoration between the two/ sync
- Is sync similar to that of redis? AOF vs Snapshots?

- Security, does having on host violate security policy that docker tries to enforce?

- Does having docker volume within docker itself make it less fault-tolerant, resilient,? What happens when docker itself is down that is..

- Named volumes are created and managed by docker but still stored on (`/var/lib/docker/volumes`) on the host machine. I don't see a difference if it still ends up storing them on the host machine..

- Is location different? Can I change? Is it meant to be accessed directly by the user even os sudo mode?

> Benefits: Persist data over failures and restarts, share data between containers, backups and restores from a container.
