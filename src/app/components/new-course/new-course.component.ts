import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import alertify from 'alertifyjs';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent implements OnInit {
  courseForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.courseForm = this.fb.group({
      codigo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      horas: ['', [Validators.required]],
      ciclo: ['', [Validators.required]],
      creditos: ['', [Validators.required]],
      sumilla: ['', [Validators.required]],
      estrategia: ['', [Validators.required]],
      plan: ['', [Validators.required]],
    });
  }

  saveCourse() {
    if (this.courseForm.valid) {
      console.log(this.courseForm.value);
      this.courseService
        .saveCourse(this.courseForm.value)
        .subscribe((response) => {
          console.log(response);
          if (response) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success('Curso guardado');
            this.router.navigate(['silabos']);
          } else {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error('No se pudo guardar');
          }
        });
    }
  }
}
