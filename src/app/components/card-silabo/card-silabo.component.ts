import { Component, Input, OnInit } from '@angular/core';
import { faHeart, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-silabo',
  templateUrl: './card-silabo.component.html',
  styleUrls: ['./card-silabo.component.css'],
})
export class CardSilaboComponent implements OnInit {
  @Input() silabo: any;
  faHeart = faHeart;
  faTrashAlt = faTrashAlt;
  faPen = faPen;
  constructor() {}

  ngOnInit(): void {}

  deleteSilabo() {
    alert('delete');
  }
}
