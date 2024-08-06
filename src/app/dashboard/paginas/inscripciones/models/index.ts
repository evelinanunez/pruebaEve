import { Curso } from "../../cursos/models";
import { Usuario } from "../../usuarios/models";

export interface Inscripcion{
   id: number;
   cursoId: number;
   alumnoId: number;
   usuario?: Usuario;
   curso?: Curso;
}
