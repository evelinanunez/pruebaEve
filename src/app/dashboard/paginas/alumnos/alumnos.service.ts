import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  constructor(private  httpClient : HttpClient) {

  }

  getAlumnos() :Observable<Alumno[]>{
  return this.httpClient.get<Alumno[]>(`${environment.baseUrl}/alumnos`);
  }

  crearAlumno (AlumnoAdd : Alumno) : Observable <Alumno>{
      return this.httpClient.post<Alumno>(`http://localhost:3000/alumnos`,AlumnoAdd);
  }

  editarAlumno (idAlumnoEditar : number, AlumnoEditar : Alumno) : Observable<Alumno>{
    return this.httpClient.put<Alumno>(`${environment.baseUrl}/alumnos/${idAlumnoEditar}`, AlumnoEditar);
  }

  eliminarAlumno( idAlumnoAEliminar : number) :  Observable <void>{
    return this.httpClient
    .delete<void>(`${environment.baseUrl}/alumnos/${idAlumnoAEliminar}`);
  }

  obtenerAlumnoPorId( alumnoid : number) : Observable<Alumno> {
    return this.httpClient.get<Alumno>(`${environment.baseUrl}/alumnos/${alumnoid}`)
  }
}
