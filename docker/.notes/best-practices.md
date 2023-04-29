## Docker best practices

The following best practices are recommended when you build images by writing Dockerfiles:

1. Containers should be ephemeral in the sense that you can stop or delete a container at any moment and replace it with a new container from the Dockerfile with minimal set-up and configuration.

2. Use a .dockerignore file to reduce image size and reduce build time by excluding files from the build context that are unnecessary for the build. The build context is the full recursive contents of the directory where the Dockerfile was when the image was built.

3. Reduce image file sizes (and attack surface) while keeping Dockerfiles readable by applying either a builder pattern or a multi-stage build (available only in Docker 17.05 or higher).

4. With a builder pattern, you maintain two Dockerfiles – one to build an application inside the image and a second Dockerfile that includes only the resulting application binaries from the first image to generate a second, streamlined image that is production ready. This pattern requires a custom script in order to automatically apply the transformation from the “development” image to the “production” image (for an example, see the Docker documentation: **Before Multi-Stage Builds** ).

5. A multi-stage build allows you to use multiple FROM statements in a single Dockerfile and selectively copy artifacts from one stage to another, leaving behind everything you don’t want in the final image. You can, therefore, reduce image file sizes without the hassle of maintaining separate Dockerfiles and custom scripts when using the builder pattern.

6. Don’t install unnecessary packages when building images.

7. Use multi-line commands instead of multiple RUN commands for faster builds when possible (for example, when installing a list of packages).

8. Sort multi-line lists of packages into alphanumerical order to easily identify duplicates and make it easier to update and review the list.

9. Enable content trust when operating with a remote Docker registry so that you can only push, pull, run, or build trusted images which have been digitally signed to verify their integrity. When you use Docker with content trust, commands only operate on tagged images that have been digitally signed. Less trustworthy unsigned image tags are invisible when you enable content trust (off by default). To enable it, set the DOCKER_CONTENT_TRUST environment variable to 1. For further information see the Docker documentation: **Content trust in Docker.**
