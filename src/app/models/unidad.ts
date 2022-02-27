import { Capacidad } from './capacidad';
import { Semana } from './semana';

export class Unidad {
  unidad_id: number;
  unidad_nombre: string;
  capacidades: Capacidad[];
  semanas: Semana[];
}
