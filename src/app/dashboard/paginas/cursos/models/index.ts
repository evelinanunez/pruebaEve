import { Inscripcion } from "../../inscripciones/models"

export interface Curso{
    idCurso: number, // Identificador único del curso
    nombre: string, // Nombre del curso
    descripcion: string, // Descripción del curso
    instructor: string, // Nombre del instructor o profesor
    duracionHoras?: number, // Duración en horas del curso
    fechaInicio?: Date, // Fecha de inicio del curso
    fechaFin?: Date, // Fecha de finalización del curso
    cupoMaximo?: number, // Cupo máximo de estudiantes permitidos
    costo: number, // Costo del curso (si es aplicable)
    nivel?: string, // Nivel del curso (por ejemplo, principiante, intermedio, avanzado)
    categoria: string, // Categoría o tema del curso (por ejemplo, programación, idiomas, matemáticas)
    requisitos?: string // Requisitos previos para tomar el curso (por ejemplo, conocimiento previo de ciertos temas)
    inscripcions : Array<Inscripcion>
}
