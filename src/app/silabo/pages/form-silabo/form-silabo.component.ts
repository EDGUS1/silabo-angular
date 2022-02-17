import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompentenciaEspecifica } from 'src/app/models/compentencia-especifica';
import { Course } from 'src/app/models/course';
import { Docente } from 'src/app/models/docente';
import { Silabo } from 'src/app/models/silabo';
import { CompetenciaService } from 'src/app/services/competencia.service';
import { DocenteService } from 'src/app/services/docente.service';
import { SilaboService } from 'src/app/services/silabo.service';
import { AgregarSemanaComponent } from '../../components/agregar-semana/agregar-semana.component';
import { NewUnidadComponent } from '../../components/new-unidad/new-unidad.component';
import { ReferenceComponent } from '../../components/reference/reference.component';
import { VerSemanaComponent } from '../../components/ver-semana/ver-semana.component';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-form-silabo',
  templateUrl: './form-silabo.component.html',
  styleUrls: ['./form-silabo.component.css'],
})
export class FormSilaboComponent implements OnInit {
  @Input() silabo: Silabo;
  @Input() isEdit: boolean;
  @Input() curso: Course;

  silaboForm: FormGroup = new FormGroup({});

  faTrashAlt = faTrashAlt;

  listdocentes: Docente[];
  initialDocente: Docente;
  docente: Docente;
  docentesSeleccionados: Docente[] = [];

  listCompetencias: CompentenciaEspecifica[];
  compentenciaEspecifica: CompentenciaEspecifica;
  initialCompetencia: CompentenciaEspecifica;
  competenciasSeleccionadas: CompentenciaEspecifica[] = [];

  listcapacidades: any[] = [];
  capacidad: string = '';

  referencias: any[] = [];
  unidades: any[] = [];

  constructor(
    private fb: FormBuilder,
    private silaboService: SilaboService,
    private router: Router,
    private docenteService: DocenteService,
    private competenciaService: CompetenciaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    console.log(this.curso);

    this.initialDocente = new Docente();
    this.docente = this.initialDocente;

    this.initialCompetencia = new CompentenciaEspecifica();
    this.compentenciaEspecifica = this.initialCompetencia;

    this.listDocentes();

    this.isEdit ? this.initFormEdit(this.silabo) : this.initForm(this.curso);

    this.listCompentenciasEspecificas(this.curso.asig_id);
  }

  initForm(curso: Course): void {
    this.silaboForm = this.fb.group({
      codigo: [{ value: curso?.asig_codigo, disabled: true }],
      nombre: [{ value: curso?.asig_nombre, disabled: true }],
      tipo: [{ value: curso?.tipo_asignatura_id, disabled: true }],
      horas: [{ value: curso?.horas_sem_id, disabled: true }],
      semestre: ['', [Validators.required]],
      ciclo: [{ value: curso?.asig_ciclo, disabled: true }],
      creditos: [{ value: +curso?.asig_creditos, disabled: true }],
      modalidad: ['', [Validators.required]],
      sumilla: [{ value: curso?.asig_sumilla, disabled: true }],
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
    if (this.silaboForm.valid) {
      console.log('valid');
      let newSilabo = new Silabo();
      newSilabo.periodo_academico = this.silaboForm.get('semestre').value;
      newSilabo.asig_periodo_modalidad = this.silaboForm.get('modalidad').value;
      newSilabo.asig_id = this.silabo?.asig_id || this.curso?.asig_id;
      newSilabo.user_id = 1;
      console.log(newSilabo);

      this.silaboService.saveSilabo(newSilabo).subscribe(
        (response) => {
          let alerta = alertify
            .alert('<strong>Curso guardado con éxito</strong>')
            .set('basic', true);

          setTimeout(() => {
            alerta.close();
          }, 3000);

          this.router.navigate(['silabo']);
        },
        (err) => alertify.error('Ocurrio un error al guardar el silabo', 3)
      );
    }
  }

  listDocentes() {
    this.docenteService
      .listAll()
      .subscribe((response: Docente[]) => (this.listdocentes = response));
  }

  addNewDocente() {
    if (
      !this.docentesSeleccionados.find(
        (e) => e.docente_id == this.docente.docente_id
      )
    ) {
      this.docentesSeleccionados.push(this.docente);
      this.docente = this.initialDocente;
    }
  }

  deleteDocente(id: number) {
    this.docentesSeleccionados = this.docentesSeleccionados.filter(
      (e) => e.docente_id !== id
    );
  }

  listCompentenciasEspecificas(id: number) {
    this.competenciaService
      .listCompetenciasEspecificas(id)
      .subscribe(
        (response: CompentenciaEspecifica[]) =>
          (this.listCompetencias = response)
      );
  }

  addNewCompetencia() {
    if (
      !this.competenciasSeleccionadas.find(
        (e) => e.comp_esp_id == this.compentenciaEspecifica.comp_esp_id
      )
    ) {
      this.competenciasSeleccionadas.push(this.compentenciaEspecifica);
      this.compentenciaEspecifica = this.initialCompetencia;
    }
  }

  deleteCompetencia(id) {
    this.competenciasSeleccionadas = this.competenciasSeleccionadas.filter(
      (e) => e.comp_esp_id !== id
    );
  }

  addNewCapacidad() {
    const id =
      this.listcapacidades.length > 0
        ? this.listcapacidades[this.listcapacidades.length - 1]?.id + 1
        : 0;
    if (this.capacidad != '') {
      this.listcapacidades.push({
        id,
        nombre: this.capacidad,
      });
      this.capacidad = '';
    }
  }

  deleteCapacidad(id: number) {
    this.listcapacidades = this.listcapacidades.filter((comp) => comp.id != id);
  }

  newReference() {
    const modalRef = this.modalService.open(ReferenceComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      size: 'lg',
    });
    let data = {};
    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(
      (result) => {
        // crear interfaz para referencia
        let res = this.referencias.reduce(function (p, v) {
          return p.id > v.id ? p.id : v.id;
        }, 0);

        this.referencias.push({ ...result, id: res + 1 });
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  deleteReferencia(id: number) {
    this.referencias = this.referencias.filter((e) => e.id !== id);
  }

  newUnidad() {
    const modalRef = this.modalService.open(NewUnidadComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      size: 'lg',
    });
    let data = { capacidades: this.listcapacidades };

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(
      (result) => {
        console.log(result);
        this.unidades.push(result);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  verSemanas() {
    const modalRef = this.modalService.open(VerSemanaComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      size: 'lg',
    });
    let data = { capacidades: this.listcapacidades };

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  agregarContenidoUnidad() {
    const modalRef = this.modalService.open(AgregarSemanaComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      size: 'lg',
    });
    let data = { capacidades: this.listcapacidades };

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
}
