import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { faHeart, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Silabo } from 'src/app/models/silabo';
import { SilaboService } from 'src/app/services/silabo.service';
import alertify from 'alertifyjs';

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

  constructor(private router: Router, private silaboService: SilaboService) {}

  ngOnInit(): void {}

  editSilabo() {
    this.navigationExtras.state!.silabo = this.silabo;
    this.router.navigate(['/silabo'], this.navigationExtras);
  }

  deleteSilabo(silaboId: number) {
    this.silaboService.deleteSilabo(silaboId).subscribe((response) => {
      console.log(response);
      alertify.set('notifier', 'position', 'top-right');
      alertify.success('Silabo eliminado');
      // output para actualizar los silabos
    });
  }

  updateFavoritos(silaboId: number, favorito: boolean) {
    this.silaboService
      .changeSilaboFavorito(silaboId, !favorito)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
