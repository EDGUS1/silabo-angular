import { Capacidad } from './capacidad';
import { CompentenciaEspecifica } from './compentencia-especifica';
import { Course } from './course';
import { Docente } from './docente';

export class Silabo {
  curso: Course;
  periodo_academico: string;
  asig_periodo_id: number;
  asig_periodo_modalidad: string;
  user_id: number;
  updated_at: Date;
  favorito: boolean;
  docentes: Docente[];
  competencias: CompentenciaEspecifica[];
  capacidades: Capacidad[];
}
