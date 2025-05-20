import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  loading = false;
  errorMessage = '';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.loading = true;
    this.studentService.getAllStudents()
      .subscribe({
        next: (data) => {
          this.students = data;
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = 'Error loading students: ' + error.message;
          this.loading = false;
        }
      });
  }

  deleteStudent(id: number | undefined): void {
    if (!id) return;
    
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id)
        .subscribe({
          next: () => {
            this.students = this.students.filter(student => student.id !== id);
          },
          error: (error) => {
            this.errorMessage = 'Error deleting student: ' + error.message;
          }
        });
    }
  }
}
