# Docker Workshop: Deploy

(open the `3-deploy` directory in your IDE)

We now have a `docker-compose.yml` file that can be used to run the application stack in a reliable and repeatable way.

The file can be checked into source control and used by others to get quickly onboarded.

## The Problem

The problem with the current `docker-compose.yml` file is that it defines images that are only available on the user's local machine. This means other developers will have to build the images themselves, potentially creating different versions of the images. 

Additionally, a single image artifact should be tested in CI/CD and before being deployed to production. To do this, production systems use a container registry to store the images in order to deploy them to a production environment, often a Kubernetes cluster.

## The Challenge

We need to push our images to a registry so that we can deploy them to other environments, and create a new `docker-compose.yml` file that uses the images from the registry. This will allow us to share the application stack with other developers and let them use the same images we use. These same images can then be deployed to a Kubernetes cluster, such as the one that ships with Docker Desktop.

## Steps

1. Push images to a registry
2. Update `docker-compose.yml` to use the images from the registry
3. Deploy to a Kubernetes cluster

## Hints

### Registry

Spin up a local image registry for testing using a `docker-compose.yml` file.

## docker-compose.yml

Update the `docker-compose.yml` file to use the image from the registry.

### Kubernetes

You can use `compose-bridge convert` to convert your docker-compose.yml file to a Kubernetes deployment.

