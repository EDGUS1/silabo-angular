import { Component, Input, OnInit } from '@angular/core';
import {
  faTrashAlt,
  faHeart,
  faPen,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons';
import { Silabo } from 'src/app/models/silabo';
@Component({
  selector: 'app-header-silabo',
  templateUrl: './header-silabo.component.html',
  styleUrls: ['./header-silabo.component.css'],
})
export class HeaderSilaboComponent implements OnInit {
  @Input() silabo: Silabo;

  faHeart = faHeart;
  faTrashAlt = faTrashAlt;
  faPen = faPen;
  faFileDownload = faFileDownload;

  constructor() {}

  ngOnInit(): void {}
}
