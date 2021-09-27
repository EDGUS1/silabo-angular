import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Silabo } from 'src/app/models/silabo';
@Component({
  selector: 'app-form-silabo',
  templateUrl: './form-silabo.component.html',
  styleUrls: ['./form-silabo.component.css'],
})
export class FormSilaboComponent implements OnInit {
  @Input() silabo: Silabo;
  @Input() isEdit: boolean;
  @Input() curso: any;

  silaboForm: FormGroup = new FormGroup({});

  faTrashAlt = faTrashAlt;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    console.log(this.silabo, this.isEdit, this.curso);
  }

  initForm(): void {
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

  saveSilabo(): void {
    console.log(this.silaboForm.valid, this.silaboForm.value);
  }
}
