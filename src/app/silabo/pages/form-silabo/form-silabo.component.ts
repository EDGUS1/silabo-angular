import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
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
import { Capacidad } from 'src/app/models/capacidad';
import { AgregarElementoCardComponent } from '../../components/agregar-elemento-card/agregar-elemento-card.component';
import { AgregarSelectElementComponent } from '../../components/agregar-select-element/agregar-select-element.component';
import { Referencia } from 'src/app/models/referencia';
import { Unidad } from 'src/app/models/unidad';

@Component({
  selector: 'app-form-silabo',
  templateUrl: './form-silabo.component.html',
  styleUrls: ['./form-silabo.component.css'],
})
export class FormSilaboComponent implements OnInit {
  @Input() silabo: Silabo;
  @Input() isEdit: boolean;
  @Input() curso: Course;

  @ViewChild(AgregarElementoCardComponent) childCapacidad;
  @ViewChildren(AgregarSelectElementComponent)
  childrenSelect: QueryList<AgregarSelectElementComponent>;

  silaboForm: FormGroup = new FormGroup({});
  faTrashAlt = faTrashAlt;
  listdocentes: Docente[];
  listCompetencias: CompentenciaEspecifica[];
  referencias: Referencia[] = [];
  unidades: Unidad[] = [];

  constructor(
    private fb: FormBuilder,
    private silaboService: SilaboService,
    private router: Router,
    private docenteService: DocenteService,
    private competenciaService: CompetenciaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
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
        { value: silabo.curso.asig_codigo, disabled: true },
        [Validators.required],
      ],
      nombre: [{ value: silabo.curso.asig_nombre, disabled: true }],
      tipo: [{ value: silabo.curso.tipo_asignatura_id, disabled: true }],
      horas: [{ value: silabo.curso.horas_sem_id, disabled: true }],
      semestre: [silabo.periodo_academico, [Validators.required]],
      ciclo: [{ value: silabo.curso.asig_ciclo, disabled: true }],
      creditos: [{ value: silabo.curso.asig_creditos, disabled: true }],
      modalidad: [silabo.asig_periodo_modalidad, [Validators.required]],
      sumilla: [{ value: silabo.curso.asig_sumilla, disabled: true }],
    });
  }

  saveSilabo(): void {
    if (this.silaboForm.valid) {
      let newSilabo = new Silabo();
      newSilabo.periodo_academico = this.silaboForm.get('semestre').value;
      newSilabo.asig_periodo_modalidad = this.silaboForm.get('modalidad').value;

      let newCourse = new Course();
      newCourse.asig_id = this.curso.asig_id;

      newSilabo.curso = newCourse;
      //TODO: CAMBIAR USERID
      newSilabo.user_id = 1;

      newSilabo.docentes =
        this.childrenSelect.toArray()[0].elementosSeleccionados;
      newSilabo.competencias =
        this.childrenSelect.toArray()[1].elementosSeleccionados;

      newSilabo.capacidades = this.childCapacidad.elementos.map((c) => ({
        capacidad_id: c.elemento_id,
        capacidad_nombre: c.elemento_nombre,
      }));

      newSilabo.referencias = this.referencias;

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

  listCompentenciasEspecificas(id: number) {
    this.competenciaService
      .listCompetenciasEspecificas(id)
      .subscribe(
        (response: CompentenciaEspecifica[]) =>
          (this.listCompetencias = response)
      );
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
        //TODO: crear interfaz para referencia
        let res = this.referencias.reduce(function (p, v) {
          return p['id'] > v['id'] ? p['id'] : v['id'];
        }, 0);

        this.referencias.push({ ...result, id: res + 1 });
        console.log(this.referencias);
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
    let data = {
      capacidades: this.childCapacidad.elementos.map((c) => ({
        capacidad_id: c.elemento_id,
        capacidad_nombre: c.elemento_nombre,
      })),
    };

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(
      (result) => {
        console.log(result);
        let res = this.unidades.reduce(function (p, v) {
          return p['unidad_id'] > v['unidad_id']
            ? p['unidad_id']
            : v['unidad_id'];
        }, 0);
        this.unidades.push({ unidad_id: res + 1, ...result, semanas: [] });
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  verSemanas(id: number) {
    const modalRef = this.modalService.open(VerSemanaComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      size: 'lg',
    });
    let data = {
      unidades: this.unidades.find((e) => e['unidad_id'] == id),
    };

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

  agregarContenidoUnidad(id: number) {
    const modalRef = this.modalService.open(AgregarSemanaComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      size: 'lg',
    });
    let data = { unidad_id: id };

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(
      (result) => {
        // console.log(result);
        // TODO:
        if (result != 'dismiss') {
          // this.semanas = result;
          // console.log(this.unidades);
          let res = this.unidades.findIndex(
            (e) => e['unidad_id'] == result['unidad_id']
          );
          // console.log(res);

          this.unidades[res]['semanas'] = [
            ...this.unidades[res]['semanas'],
            result,
          ];
          console.log(this.unidades);
        }
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
}
