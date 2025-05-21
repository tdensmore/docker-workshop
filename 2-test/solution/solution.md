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

NOTE: Docker Desktop has a built-in Scout integration to show the results of `docker scout` in the UI.

Just click on and image in the UI and click `Start analysis`.

## EXTRA: Using environment variables

You can use the `environment` keyword to pass variables to the docker compose file itself, or you can use a .env file to store variables on the host and reference them in the docker compose file.

Example (using environment): 

```yaml
services:
  webapp:
    image: nginx:1.25.5
    container_name: nginx
    environment:
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_DB=${POSTGRES_DB}
```

Example (using .env): 

```yaml
services:
  webapp:
    env_file: "postgres.env"
```

where `postgres.env` is a file in the same directory as the docker compose file with the following content:

```text
POSTGRES_PASSWORD="postgres"
POSTGRES_USER="postgres"
POSTGRES_DB="studentdb"
```

## EXTRA: Database persistence

You can use the `volumes` keyword to persist data in a docker compose file.

Example: 

```yaml
services:
  webapp:
    image: nginx:1.25.5
    container_name: nginx
    volumes:
      - ./data:/data
```

where `data` is a directory in the same directory as the docker compose file.

A named volume is a volume that is created and managed by docker.

Example: 

```yaml
volumes:
  student-data-postgres:
```
and can be mounted by the postgres service using the `volumes` keyword.

Example: 

```yaml
services:
  postgres:
    image: postgres:17-alpine
    container_name: postgres
    volumes:
      - student-data-postgres:/var/lib/postgresql/data
```

and will not be visible in the local file system. Use `docker volume ls` to list created volumes.

### Merge

You can use the `merge` keyword to merge values in a docker compose file.

`merge`documentation: 
  webapp:
    image: nginx:1.25.5
    container_name: nginx
    volumes:
      - student-data-postgres:/data
```

and will not be visible in the local file system. Use `docker volume ls` to list created volumes.

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
