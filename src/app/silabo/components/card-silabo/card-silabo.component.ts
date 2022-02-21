import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {
  faHeart,
  faTrashAlt,
  faPen,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons';
import { Silabo } from 'src/app/models/silabo';
import { SilaboService } from 'src/app/services/silabo.service';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-card-silabo',
  templateUrl: './card-silabo.component.html',
  styleUrls: ['./card-silabo.component.css'],
})
export class CardSilaboComponent implements OnInit {
  @Input() silabo: Silabo;
  @Output() actualizar = new EventEmitter();

  faHeart = faHeart;
  faTrashAlt = faTrashAlt;
  faPen = faPen;
  faFileDownload = faFileDownload;

  navigationExtras: NavigationExtras = {
    state: {
      silabo: null,
      edit: true,
    },
  };

  constructor(private router: Router, private silaboService: SilaboService) {}

  ngOnInit(): void {}

  deleteSilabo(silaboId: number) {
    alertify.confirm(
      '¿Seguro que desea eliminar el silabo?',
      'Esta acción es irreversible, si desea eliminarlo presione OK',
      () =>
        this.silaboService.deleteSilabo(silaboId).subscribe((response) => {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Silabo eliminado');
          this.updateSilabos();
        }),
      function () {}
    );
  }

  updateSilabos() {
    this.actualizar.emit();
  }

  editSilabo() {
    this.navigationExtras.state!.silabo = this.silabo;
    this.router.navigate(['/silabo/config'], this.navigationExtras);
  }

  downloadSilabo(id: number) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.success('Descargando...');
    this.silaboService.downloadSilabo(id).subscribe((result) => {
      const url = window.URL.createObjectURL(result);
      const a = document.createElement('a');
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);
      a.href = url;
      a.download = 'Silabo.pdf';
      a.click();
      return url;
    });
  }

  updateFavoritos(silaboId: number, favorito: boolean) {
    this.silaboService.changeSilaboFavorito(silaboId, !favorito).subscribe(
      (res) => this.updateSilabos(),
      (err) => console.log(err)
    );
  }
}
