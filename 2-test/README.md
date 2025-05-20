# Docker Workshop: Test

(open the `2-test` directory in your IDE)

We now have created Dockerfiles for the application frontend and backend. Both applications can be quickly packaged and run (with all dependencies) in a container.

## The Problem

Currently we have to run three separate containers manually:

```bash
docker run -d --name backend -p 8082:8082 backend:latest
docker run -d --name frontend -p 8080:80 frontend:latest
docker run -d --name postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres -p 5432:5432 postgres:17-alpine
```

Although this is an improvement, it is not a very efficient way to consistently run the application. We need to find a better way to run the application in a repeatable way.

## The Challenge

Create a `docker-compose.yml` file that will run the application, including the database, in a repeatable way.

### Bonus Points

1. Examine the final image size and address any security issues
2. Ensure that secrets are not accidentally added to the container image
3. Add `postgresql` as a docker container, but allow others to use a different database

### Hints

1. Use the docker-compose `include` keyword to include any database that is available as a Docker image
2. Use environment variables to store secrets
3. Use the `docker history` command to examine the image size
4. Use the `docker scout` command to examine the image for security issues







