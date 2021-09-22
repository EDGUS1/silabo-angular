import { Component, Input, OnInit } from '@angular/core';
import { faHeart, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-silabos-list',
  templateUrl: './card-silabos-list.component.html',
  styleUrls: ['./card-silabos-list.component.css'],
})
export class CardSilabosListComponent implements OnInit {
  @Input() silabo: any;
  faHeart = faHeart;
  faTrashAlt = faTrashAlt;
  faPen = faPen;
  constructor() {}

  ngOnInit(): void {}
}
