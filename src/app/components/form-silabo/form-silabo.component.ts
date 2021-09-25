import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-form-silabo',
  templateUrl: './form-silabo.component.html',
  styleUrls: ['./form-silabo.component.css'],
})
export class FormSilaboComponent implements OnInit {
  silaboForm: FormGroup = new FormGroup({});
  faTrashAlt = faTrashAlt;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.silaboForm = this.fb.group({
      codigo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      horas: ['', [Validators.required]],
      semestre: ['', [Validators.required]],
      ciclo: ['', [Validators.required]],
      creditos: ['', [Validators.required]],
      modalidad: ['', [Validators.required]],
      sumilla: ['', [Validators.required]],
    });
  }
  saveSilabo() {
    console.log(this.silaboForm.value);
  }
}
