import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-elemento-card',
  templateUrl: './agregar-elemento-card.component.html',
  styleUrls: ['./agregar-elemento-card.component.css'],
})
export class AgregarElementoCardComponent implements OnInit {
  @Input() etiqueta: string;
  @Input() placeholder: string;
  elementos: any[];
  nombreElemento: string;

  constructor() {}

  ngOnInit(): void {
    this.elementos = [];
    this.nombreElemento = '';
  }

  eliminarElemento(id: number) {
    this.elementos = this.elementos.filter((e) => e.elemento_id != id);
  }

  agregarElemento() {
    const elemento_id =
      this.elementos.length > 0
        ? this.elementos[this.elementos.length - 1]?.elemento_id + 1
        : 0;

    if (this.nombreElemento.trim() != '') {
      this.elementos.push({
        elemento_id,
        elemento_nombre: this.nombreElemento.trim(),
      });
      this.nombreElemento = '';
    }
  }
}
