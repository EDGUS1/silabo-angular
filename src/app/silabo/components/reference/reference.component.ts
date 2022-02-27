import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent implements OnInit {
  referenciaForm: FormGroup = new FormGroup({});

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    let currentTime = new Date();

    this.referenciaForm = this.fb.group({
      libro_nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200),
        ],
      ],
      libro_fecha: [
        '',
        [
          Validators.required,
          Validators.min(1500),
          Validators.max(currentTime.getFullYear()),
        ],
      ],
      edicion: ['', [Validators.min(1)]],
      editorial_nombre: ['', [Validators.required]],
      paginas: ['', [Validators.min(0)]],
      autores: [''],
    });
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

  saveReference() {
    let salida = this.referenciaForm.get('autores').value;
    salida = salida.split(';').map((e) => ({
      nombre: e.trim().split(' ')[0],
      apellido: e.trim().split(' ')[1],
    }));

    if (this.referenciaForm.valid)
      this.closeModal({ ...this.referenciaForm.value, id: 0, autores: salida });
  }
}
