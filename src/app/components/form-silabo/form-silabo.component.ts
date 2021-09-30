import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Silabo } from 'src/app/models/silabo';
import { SilaboService } from 'src/app/services/silabo.service';
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

  constructor(
    private fb: FormBuilder,
    private silaboService: SilaboService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm(this.silabo);
  }

  initForm(silabo: Silabo): void {
    /* codigo: [
      { value: silabo.asig_codigo, disabled: true },
      [Validators.required],
    ], */
    this.silaboForm = this.fb.group({
      codigo: [{ value: '', disabled: true }],
      nombre: [{ value: '', disabled: true }],
      tipo: [{ value: '', disabled: true }],
      horas: [{ value: '', disabled: true }],
      semestre: ['', [Validators.required]],
      ciclo: [{ value: '', disabled: true }],
      creditos: [{ value: '', disabled: true }],
      modalidad: ['', [Validators.required]],
      sumilla: [{ value: '', disabled: true }],
    });
  }

  saveSilabo(): void {
    console.log(this.silaboForm.valid, this.silaboForm.value);
    if (this.silaboForm.valid) {
      console.log('valid');
      let newSilabo = new Silabo();
      newSilabo.periodo_academico = this.silaboForm.get('semestre').value;
      newSilabo.asig_periodo_modalidad = this.silaboForm.get('modalidad').value;
      newSilabo.asig_id = this.silabo?.asig_id || this.curso?.asig_id || 1;
      newSilabo.user_id = 1;
      console.log(newSilabo);

      this.silaboService.saveSilabo(newSilabo).subscribe(
        (response) => this.router.navigate(['silabos']),
        (err) => console.log(err)
      );
    }
  }
}
