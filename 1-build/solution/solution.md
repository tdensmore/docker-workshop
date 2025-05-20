## Solution: Containerize the Application

Lets examine the `Dockerfile.backend` and `Dockerfile.frontend` files. These have been created for you.

Let's understand the `.dockerignore` files. These are used to exclude files from the build context.

Let's discuss containerization best practices (here are just a few):

1. Never use `latest` tag for images
2. Use multi-stage builds
3. Use a non-root user
4. Reduce the number of layers
5. Use a smaller / secure / official base image
6. Use .dockerignore files
7. Use environment variables for configuration

### Steps

Move the `Dockerfile.backend` and `Dockerfile.frontend` files to the appropriate directories and rename them to `Dockerfile`.

Build the backend and frontend images from the `1-build` directory:

```bash
docker build -t backend:latest ./backend-springboot
docker build -t frontend:latest ./frontend-angular
```

Run the backend and frontend containers:

```bash
docker run -d --name backend -p 8082:8082 backend:latest
docker run -d --name frontend -p 8080:80 frontend:latest
```

Now run postgresql in a container:

```bash
docker run -d --name postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=studentdb -p 5432:5432 postgres:17-alpine
```

Test the application:

Open a browser and navigate to [http://localhost:8080](http://localhost:8080)

You should see the frontend application running in your browser.