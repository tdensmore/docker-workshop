# Student Management System

A CRUD web application that allows users to add, update, and delete "students" in a PostgreSQL database. Students have a name and belong to one of four houses: Gryffindor, Slytherin, Hufflepuff, or Ravenclaw.

## Tech Stack

- **Backend**: Java 17, Spring Boot, Maven, PostgreSQL
- **Frontend**: Angular, Bootstrap
- **Containerization**: Docker, Docker Compose

## Project Structure

- `backend-springboot/`: Java Spring Boot backend API
- `frontend-angular/`: Angular frontend application
- `docker-compose.yml`: Docker Compose configuration to run the entire stack

## How to Run

1. Make sure you have Docker and Docker Compose installed on your system.
2. Clone this repository.
3. From the root directory, run:

```bash
docker-compose up
```

This will:
- Start a PostgreSQL database
- Build and start the Spring Boot backend
- Build and start the Angular frontend
- Connect all services together

4. Access the application at: http://localhost

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
./mvnw spring-boot:run
```

### Frontend Development

The frontend is an Angular application. To run it locally:

```bash
cd frontend-angular
npm install
ng serve
```
