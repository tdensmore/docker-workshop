## Build: Containerize the Application

To containerize the application, we need to create a `Dockerfile` for each application.

A `Dockerfile` is a text document that describes how to build an image. More information can be found in the [Dockerfile reference](https://docs.docker.com/engine/reference/builder/).

To build an image from a `Dockerfile`, you use the `docker build` command.

Hint: The command `docker init` can be used to create a `Dockerfile` automatically for the backend.

```bash
docker build -t backend:latest ./backend-springboot
```


### Solution

1. Create a Dockerfile for the backend
2. Build and run the container
3. Test the container