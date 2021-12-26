import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/models/course';
import { Silabo } from 'src/app/models/silabo';
import { CourseService } from 'src/app/services/course.service';
@Component({
  selector: 'app-silabo',
  templateUrl: './silabo.component.html',
  styleUrls: ['./silabo.component.css'],
})
export class SilaboComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  isSelected: boolean;
  isEdit: boolean;
  isNewCourse: boolean;

  silabo: Silabo;
  curso: Course;
  cursos: Course[];
  initialCurso: Course;

  constructor(private router: Router, private courseService: CourseService) {
    const navigation = this.router.getCurrentNavigation();
    this.isEdit = navigation?.extras?.state?.edit;
    this.silabo = navigation?.extras?.state?.silabo;
  }

  ngOnInit(): void {
    this.isSelected = false;
    this.initialCurso = new Course();
    this.curso = this.initialCurso;
    this.isNewCourse = false;
    this.listarCursosDisponibles();
  }

  selectSilabo() {
    this.isSelected = true;
  }

  createCourse() {
    this.isNewCourse = true;
  }

  listarCursosDisponibles() {
    this.courseService.listCourses().subscribe(
      (response: Course[]) => (this.cursos = response),
      (error) => console.log(error)
    );
  }

  goBackOptions() {
    this.isSelected = false;
    this.isNewCourse = false;
    this.curso = this.initialCurso;
  }
}
