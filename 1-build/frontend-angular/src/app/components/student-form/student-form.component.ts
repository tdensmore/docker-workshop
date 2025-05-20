import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, House } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  isEditMode = false;
  studentId?: number;
  houses = Object.values(House);
  loading = false;
  errorMessage = '';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.studentId = +params['id'];
        this.loadStudent(this.studentId);
      }
    });
  }

  initForm(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      house: [House.GRYFFINDOR, Validators.required]
    });
  }

  loadStudent(id: number): void {
    this.loading = true;
    this.studentService.getStudentById(id).subscribe({
      next: (student) => {
        this.studentForm.patchValue({
          name: student.name,
          house: student.house
        });
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading student: ' + error.message;
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.studentForm.invalid) {
      return;
    }
    
    const student: Student = {
      name: this.studentForm.value.name,
      house: this.studentForm.value.house
    };
    
    this.loading = true;
    
    if (this.isEditMode && this.studentId) {
      this.studentService.updateStudent(this.studentId, student).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.errorMessage = 'Error updating student: ' + error.message;
          this.loading = false;
        }
      });
    } else {
      this.studentService.createStudent(student).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.errorMessage = 'Error creating student: ' + error.message;
          this.loading = false;
        }
      });
    }
  }

  get formControls() {
    return this.studentForm.controls;
  }
}
