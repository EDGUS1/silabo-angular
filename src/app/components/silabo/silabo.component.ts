import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faTrashAlt,
  faHeart,
  faPen,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons';
import { Silabo } from 'src/app/models/silabo';
import { CursoService } from 'src/app/services/curso.service';
@Component({
  selector: 'app-silabo',
  templateUrl: './silabo.component.html',
  styleUrls: ['./silabo.component.css'],
})
export class SilaboComponent implements OnInit {
  faHeart = faHeart;
  faTrashAlt = faTrashAlt;
  faPen = faPen;
  faFileDownload = faFileDownload;

  isSelected: boolean;
  isEdit: boolean;
  isNewCourse: boolean;

  silabo: Silabo;
  curso: any;
  cursos: any;

  constructor(private router: Router, private cursoService: CursoService) {
    const navigation = this.router.getCurrentNavigation();
    this.isEdit = navigation?.extras?.state?.edit;
    this.silabo = navigation?.extras?.state?.silabo;
  }

  ngOnInit(): void {
    this.isSelected = false;
    /* this.isEdit = false; */
    this.isNewCourse = false;
    this.listarCursosDisponibles();
  }

  selectSilabo() {
    /* this.curso = 'hola'; */
    console.log(this.curso);
    this.isSelected = true;
  }

  createCourse() {
    this.isNewCourse = true;
  }

  listarCursosDisponibles() {
    this.cursoService.listCourses().subscribe(
      (response) => {
        this.cursos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
