# Solution: Deploy

### Push images to a remote registry

By default, docker will push to Docker Hub. If you want to push to a different registry, you can tag the image with the registry name.

```bash
docker tag myapp:latest myregistry.com/myapp:latest
docker push myregistry.com/myapp:latest
```

You can then deploy the image to any environment that has access to the registry.

### Start a local registry

To spin up a local image registry for testing, use the `registry-compose.yml` file.

```bash
docker compose -f registry-compose.yml up -d
```

This will start a local registry on your machine. You can then push your images to this registry and deploy them to other environments.

### Push images to the local registry

First tag the image with the registry name, in this case `localhost:8090`.

Example:
```bash
docker tag backend:latest localhost:8090/backend:v1
docker tag frontend:latest localhost:8090/frontend:v1
docker tag postgres:17-alpine localhost:8090/postgres:v1
```

Then push the images to the local registry.

Example:
```bash
docker push localhost:8090/backend:v1
docker push localhost:8090/frontend:v1
docker push localhost:8090/postgres:v1
```

NOTE: makes sure to remove the images from your local machine after pushing them to the registry.

Example:
```bash
docker rmi localhost:8090/backend:v1
docker rmi localhost:8090/frontend:v1
docker rmi localhost:8090/postgres:v1
```

### Update docker-compose.yml

Copy the existing `docker-compose.yml` file and rename it to `new-docker-compose.yml`. Update the `new-docker-compose.yml` file to use the image from the registry by removing the `build` section and adding an `image` section.

Example:

```yaml
services:
  backend:
    image: localhost:8090/backend:v1
    container_name: backend
    ports:
      - "8080:8080"
```

Then test the new `docker-compose.yml` file that uses the pulled images by running:

```bash
docker compose -f new-docker-compose.yml up -d
```

### Deploying to a Kubernetes cluster

#### Kubernetes Cluster

You can use Kind (Kubernetes IN Docker) to run a local Kubernetes cluster. This comes with Docker Desktop. 

KinD is a tool for running local Kubernetes clusters using Docker containers as nodes. It was developed by the Kubernetes team to make it easier to test and develop Kubernetes itself.

#### Kubernetes Deployment

You can use `compose-bridge convert` to convert your docker-compose.yml file to a Kubernetes deployment.

```bash
compose-bridge convert -f docker-compose.yml -o k8s-deployment
```

This will create a k8s-deployment.yaml file that you can use to deploy to a Kubernetes cluster.

You can deploy to a Kubernetes cluster using the `kubectl` command. 

```bash
kubectl apply -k k8s-deployment/overlays/desktop
kubectl get ns
kubectl config set-context --current --namespace=docker-workshop
kubectl get pods
kubectl get svc
kubectl get deploy
kubectl port-forward svc/frontend-published 8080:80
```

### Debugging Kubernetes applications

```bash
kubectl get pods
kubectl describe pod [podname]
kubectl logs [podname] -p # the -p option will read the logs of the previous (crashed) instance
```