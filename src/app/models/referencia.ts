import { Autor } from './autor';

export class Referencia {
  edicion: string;
  editorial_nombre: string;
  id: number;
  libro_fecha: number;
  libro_nombre: string;
  paginas: number;
  autores: Autor[];
}
