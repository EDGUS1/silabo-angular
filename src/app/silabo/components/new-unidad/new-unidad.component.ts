import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-unidad',
  templateUrl: './new-unidad.component.html',
  styleUrls: ['./new-unidad.component.css'],
})
export class NewUnidadComponent implements OnInit {
  @Input() fromParent;
  capacidades: any[];
  capacidadesSeleccionadas: any[] = [];
  capacidad: any = '';
  nombre: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.fromParent.capacidades);
    this.capacidades = this.fromParent.capacidades;
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

  addCapacidad() {
    this.capacidadesSeleccionadas = [
      ...this.capacidadesSeleccionadas,
      this.capacidad,
    ];
  }
  addUnidad() {
    this.closeModal({
      capacidades: this.capacidadesSeleccionadas,
      nombre: this.nombre,
    });
  }
}
