# Backend Spring Boot

This is a Spring Boot application that provides a REST API for managing students.

## API Endpoints

- `GET /api/students`: Get all students
- `GET /api/students/{id}`: Get a student by ID
- `POST /api/students`: Create a new student
- `PUT /api/students/{id}`: Update a student
- `DELETE /api/students/{id}`: Delete a student

## Development

### Backend Development

The backend is a Spring Boot application with Maven. To run it locally:

```bash
cd backend-springboot
mvn spring-boot:run
```

*Note:* This project makes use of a PostgreSQL database. When running with `docker compose`, a local test database is spun up automatically for this purpose. If you wish to run the backend on its own, you will have to ensure a test database is running.