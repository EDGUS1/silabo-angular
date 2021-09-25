import { Component, OnInit } from '@angular/core';
import {
  faTrashAlt,
  faHeart,
  faPen,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons';
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
  constructor() {}

  ngOnInit(): void {
    this.isSelected = false;
    this.isEdit = false;
  }

  selectSilabo() {
    this.isSelected = true;
  }
}
