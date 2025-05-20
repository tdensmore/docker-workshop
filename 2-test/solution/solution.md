## Solution: Test

A `docker-compose.yml` file is a text document that describes how to run docker containers programmatically. More information can be found in the [docker-compose.yml reference](https://docs.docker.com/compose/compose-file/).

Docker compose files are written in YAML. and can optionally include other docker compose files using the `include` keyword, override values using the `extends` keyword, or merge values using the `merge` keyword.

The command to start the compose file is:

```bash
docker compose up
```

Execute the command and examine the output.

The command to stop the compose file is:

```bash
docker compose down
```

## EXTRA: Examine the final image size and address any security issues

You can use the `docker image history` command to examine the image size.

Example: 

```bash
docker image history <image_name>
```

You can use `docker scout` to scan docker images for vulnerabilities.

Example: 

```bash
docker scout <image_name>
```

## EXTRA: Using environment variables

You can use the `environment` keyword to store secrets from within the docker compose file itself, or you can use a .env file to store secrets on the host and reference them in the docker compose file.

Example (using environment): 

```yaml
services:
  webapp:
    image: nginx:1.25.5
    container_name: nginx
    environment:
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_DB=postgres
```

Example (using .env): 

```yaml
services:
  webapp:
    env_file: "webapp.env"
```

## EXTRA: Using different databases

### Merge

You can use the `merge` keyword to merge values in a docker compose file.

`merge`documentation: 
  https://docs.docker.com/compose/how-tos/multiple-compose-files/merge/

Example: 

```yaml
merge: 
  - ../database/compose.yaml
 
services:
  webapp:
    image: nginx:1.25.5
    container_name: nginx
    merge:
      file: ../database/compose.yaml
      service: database
```

### Extends

You can use the `extends` keyword to override values in a docker compose file.

`extends`documentation: 
  https://docs.docker.com/compose/how-tos/multiple-compose-files/extends/

Example: 

```yaml
extends: 
  - ../database/compose.yaml
 
services:
  webapp:
    image: nginx:1.25.5
    container_name: nginx
    extends:
      file: ../database/compose.yaml
      service: database
```

### Include

You can use the `include` keyword to include any database that is available as a Docker image.

`include`documentation: 
  https://docs.docker.com/compose/how-tos/multiple-compose-files/include/

Example: 

```yaml
include: 
  - ../database/compose.yaml
 
services:
  webapp:
    image: nginx:1.25.5
    container_name: nginx
    depends_on:
     - database
```
