import { Component, OnInit } from '@angular/core';
import {
  faTrashAlt,
  faHeart,
  faPen,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-form-silabo',
  templateUrl: './form-silabo.component.html',
  styleUrls: ['./form-silabo.component.css'],
})
export class FormSilaboComponent implements OnInit {
  faHeart = faHeart;
  faTrashAlt = faTrashAlt;
  faPen = faPen;
  faFileDownload = faFileDownload;
  constructor() {}

  ngOnInit(): void {}
}
