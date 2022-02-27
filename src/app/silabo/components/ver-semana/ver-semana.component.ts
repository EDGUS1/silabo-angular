import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ver-semana',
  templateUrl: './ver-semana.component.html',
  styleUrls: ['./ver-semana.component.css'],
})
export class VerSemanaComponent implements OnInit {
  @Input() fromParent;
  unidades: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.fromParent);
    this.unidades = this.fromParent.unidades;
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }
}
