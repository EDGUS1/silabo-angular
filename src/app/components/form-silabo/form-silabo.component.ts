import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/models/course';
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
    console.log(this.curso);
    this.isEdit ? this.initFormEdit(this.silabo) : this.initForm(this.curso);
  }

  initForm(curso: Course): void {
    this.silaboForm = this.fb.group({
      codigo: [{ value: curso.asig_codigo, disabled: true }],
      nombre: [{ value: curso.asig_nombre, disabled: true }],
      tipo: [{ value: curso.tipo_asignatura_id, disabled: true }],
      horas: [{ value: curso.horas_sem_id, disabled: true }],
      semestre: ['', [Validators.required]],
      ciclo: [{ value: curso.asig_ciclo, disabled: true }],
      creditos: [{ value: +curso.asig_creditos, disabled: true }],
      modalidad: ['', [Validators.required]],
      sumilla: [{ value: curso.asig_sumilla, disabled: true }],
    });
  }

  initFormEdit(silabo: Silabo): void {
    this.silaboForm = this.fb.group({
      codigo: [
        { value: silabo.asig_codigo, disabled: true },
        [Validators.required],
      ],
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
