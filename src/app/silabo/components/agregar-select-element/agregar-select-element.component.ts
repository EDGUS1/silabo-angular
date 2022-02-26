import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-select-element',
  templateUrl: './agregar-select-element.component.html',
  styleUrls: ['./agregar-select-element.component.css'],
})
export class AgregarSelectElementComponent implements OnInit {
  @Input() etiqueta: string;
  @Input() valor: string;
  @Input() valorId: string;
  @Input() listElements: any[];
  @Input() cadenaMostrar: string;

  initialElement: any;
  element: any;
  elementosSeleccionados: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  addNewElement() {
    if (
      !this.elementosSeleccionados.find(
        (e) => e[this.valorId] == this.element[this.valorId]
      )
    ) {
      this.elementosSeleccionados.push(this.element);
      this.element = this.initialElement;
    }
  }

  deleteElement(id: number) {
    this.elementosSeleccionados = this.elementosSeleccionados.filter(
      (e) => e[this.valorId] !== id
    );
  }
}
