# Docker Workshop

(clone this repository)

This workshop will guide you through the process of containerizing a CRUD web application that allows users to add, update, and delete "students" in a PostgreSQL database. Students have a name and belong to one of four houses: Gryffindor, Slytherin, Hufflepuff, or Ravenclaw.

## Tech Stack

- **Backend**: Java 17, Spring Boot, Maven, PostgreSQL
- **Frontend**: Angular, Bootstrap
- **Containerization**: Docker, Docker Compose

## Project Structure

- `backend-springboot/`: Java Spring Boot backend API
- `frontend-angular/`: Angular frontend application

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

### Frontend Development

The frontend is an Angular application. To run it locally:

```bash
cd frontend-angular
npm install
npm run-script ng serve
```

You can then open your browser to http://localhost::4200 to access the application.

*Note:* The above requires the local installation of `npm`.