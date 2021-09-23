import { Component, OnInit } from '@angular/core';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-silabos',
  templateUrl: './home-silabos.component.html',
  styleUrls: ['./home-silabos.component.css'],
})
export class HomeSilabosComponent implements OnInit {
  silabos = [
    {
      nombre_curso: 'Nombre del curso 1',
      ciclo: 7,
      peridio: 2021,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque asperiores dolores dignissimos repudiandae laborum consequuntur aliquid fuga cupiditate accusamus veritatis iusto officia, nihil odit id, quas assumenda autem corrupti.',
      fecha: new Date(),
    },
    {
      nombre_curso: 'Nombre del curso 2',
      ciclo: 7,
      peridio: 2021,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque asperiores dolores dignissimos repudiandae laborum consequuntur aliquid fuga cupiditate accusamus veritatis iusto officia, nihil odit id, quas assumenda autem corrupti.',
      fecha: new Date(),
    },
    {
      nombre_curso: 'Nombre del curso 3',
      ciclo: 7,
      peridio: 2021,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque asperiores dolores dignissimos repudiandae laborum consequuntur aliquid fuga cupiditate accusamus veritatis iusto officia, nihil odit id, quas assumenda autem corrupti.',
      fecha: new Date(),
    },
    {
      nombre_curso: 'Nombre del curso 4',
      ciclo: 7,
      peridio: 2021,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque asperiores dolores dignissimos repudiandae laborum consequuntur aliquid fuga cupiditate accusamus veritatis iusto officia, nihil odit id, quas assumenda autem corrupti.',
      fecha: new Date(),
    },
  ];
  faList = faList;
  faGrid = faTh;
  viewSilabosGrid: boolean;

  constructor() {}

  ngOnInit(): void {
    this.viewSilabosGrid = true;
  }

  activeListView() {
    this.viewSilabosGrid = false;
  }

  activeGridView() {
    this.viewSilabosGrid = true;
  }
}
