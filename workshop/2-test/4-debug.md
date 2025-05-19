## Step 4: Debug running containers

Adding a database to a docker compose file is simple.

```yaml
services:
  postgres:
    image: postgres:14-alpine
    container_name: postgres
    environment:
      POSTGRES_DB: studentdb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5
```

1. Add the postgres database service to the docker-compose.yml  file
2. Test everything with `docker compose up`

Question:

What if I want to use a different database?

Answer:

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
