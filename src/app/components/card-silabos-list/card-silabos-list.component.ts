import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { faHeart, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Silabo } from 'src/app/models/silabo';

@Component({
  selector: 'app-card-silabos-list',
  templateUrl: './card-silabos-list.component.html',
  styleUrls: ['./card-silabos-list.component.css'],
})
export class CardSilabosListComponent implements OnInit {
  @Input() silabo: Silabo;

  faHeart = faHeart;
  faTrashAlt = faTrashAlt;
  faPen = faPen;

  navigationExtras: NavigationExtras = {
    state: {
      silabo: null,
      edit: true,
    },
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  editSilabo() {
    this.navigationExtras.state!.silabo = this.silabo;
    this.router.navigate(['/silabo'], this.navigationExtras);
  }
}
