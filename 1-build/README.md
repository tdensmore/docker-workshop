# Docker Workshop: Build

(open the `1-build` directory in your IDE)

You are a developer working on a Springboot application that allows users to add, update, and delete "students" in a PostgreSQL database. Students have a name and belong to one of four houses: Gryffindor, Slytherin, Hufflepuff, or Ravenclaw.

## Project Structure

The project is split into two parts:

- `backend-springboot/`: Java Spring Boot backend API
- `frontend-angular/`: Angular frontend application

## The Problem

The application repository currently contains the complete source code to run the application on your local machine but the are a few shortcomings:

1. The application is hard to setup quickly (it requires specific versions of Java, Maven, Node and PostgreSQL)
2. The application is hard to share easily (other developers need to install the same tools and versions)
3. The application is hard to deploy to production (operations team needs detailed instructions to understand how to deploy the application)

## The Challenge

Your task is to containerize the application and make it easy to setup and share.

### Steps

To containerize the application, we need to create a `Dockerfile` for each application.

A `Dockerfile` is a text document that describes how to build an image. More information can be found in the [Dockerfile reference](https://docs.docker.com/engine/reference/builder/).

To build an image from a `Dockerfile`, you use the `docker build` command.

```bash
docker build -t backend:latest ./backend-springboot
```

## Bonus Points

1. Add `postgresql` as a docker container
2. Ensure that secrets are not accidentally committed added to the container image
3. Make sure the application adheres to best practices for containerization

## Hint

The command `docker init` can be used to create a `Dockerfile` automatically for some lanaguages, and provide a starting template Dockerfile for other languages.

Usage:

```bash
docker init
```