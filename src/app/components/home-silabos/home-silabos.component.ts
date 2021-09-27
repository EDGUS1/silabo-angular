import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';
import { Silabo } from 'src/app/models/silabo';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-home-silabos',
  templateUrl: './home-silabos.component.html',
  styleUrls: ['./home-silabos.component.css'],
})
export class HomeSilabosComponent implements OnInit {
  faList = faList;
  faGrid = faTh;

  viewSilabosGrid: boolean;

  silabos: Silabo[];

  navigationExtras: NavigationExtras = {
    state: {
      silabo: null,
      edit: false,
    },
  };

  constructor(private cursoService: CursoService, private router: Router) {}

  ngOnInit(): void {
    this.viewSilabosGrid = true;
    this.listarCursos();
  }

  activeListView(): void {
    this.viewSilabosGrid = false;
  }

  activeGridView(): void {
    this.viewSilabosGrid = true;
  }

  listarCursos(): void {
    this.cursoService.listCourses().subscribe((response: Silabo[]) => {
      console.log(response);
      this.silabos = response;
    });
  }

  createSilabo() {
    this.router.navigate(['silabo'], this.navigationExtras);
  }
}
