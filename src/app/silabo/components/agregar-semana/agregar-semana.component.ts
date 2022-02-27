import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarElementoCardComponent } from '../agregar-elemento-card/agregar-elemento-card.component';

@Component({
  selector: 'app-agregar-semana',
  templateUrl: './agregar-semana.component.html',
  styleUrls: ['./agregar-semana.component.css'],
})
export class AgregarSemanaComponent implements OnInit {
  @Input() fromParent;
  @ViewChildren(AgregarElementoCardComponent)
  childrenElement: QueryList<AgregarElementoCardComponent>;

  teoria: string;
  laboratorio: string;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

  agregarSemana() {
    this.closeModal({
      unidad_id: this.fromParent.unidad_id,
      teoria: this.teoria,
      laboratorio: this.laboratorio,
      actividades_async: this.childrenElement.toArray()[0].elementos,
      recursos_async: this.childrenElement.toArray()[1].elementos,
      estrategias_async: this.childrenElement.toArray()[2].elementos,
      actividades: this.childrenElement.toArray()[3].elementos,
      recursos: this.childrenElement.toArray()[4].elementos,
      estrategias: this.childrenElement.toArray()[5].elementos,
    });
  }
}
