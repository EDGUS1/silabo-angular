import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { faHeart, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { Silabo } from 'src/app/models/silabo';

@Component({
  selector: 'app-card-silabo',
  templateUrl: './card-silabo.component.html',
  styleUrls: ['./card-silabo.component.css'],
})
export class CardSilaboComponent implements OnInit {
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

  deleteSilabo() {
    alert('delete');
  }

  editSilabo() {
    this.navigationExtras.state!.silabo = this.silabo;
    this.router.navigate(['/silabo'], this.navigationExtras);
  }
}
