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
      nombre_curso: 'Nombre del curso',
      ciclo: 7,
      peridio: 2021,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque asperiores dolores dignissimos repudiandae laborum consequuntur aliquid fuga cupiditate accusamus veritatis iusto officia, nihil odit id, quas assumenda autem corrupti.',
      fecha: new Date(),
    },
    {
      nombre_curso: 'Nombre del curso',
      ciclo: 7,
      peridio: 2021,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque asperiores dolores dignissimos repudiandae laborum consequuntur aliquid fuga cupiditate accusamus veritatis iusto officia, nihil odit id, quas assumenda autem corrupti.',
      fecha: new Date(),
    },
    {
      nombre_curso: 'Nombre del curso',
      ciclo: 7,
      peridio: 2021,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque asperiores dolores dignissimos repudiandae laborum consequuntur aliquid fuga cupiditate accusamus veritatis iusto officia, nihil odit id, quas assumenda autem corrupti.',
      fecha: new Date(),
    },
    {
      nombre_curso: 'Nombre del curso',
      ciclo: 7,
      peridio: 2021,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque asperiores dolores dignissimos repudiandae laborum consequuntur aliquid fuga cupiditate accusamus veritatis iusto officia, nihil odit id, quas assumenda autem corrupti.',
      fecha: new Date(),
    },
  ];
  faList = faList;
  faGrid = faTh;

  constructor() {}

  ngOnInit(): void {}
}
