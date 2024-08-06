import { Injectable } from '@angular/core';
import { Observable, Subscriber, catchError, concatMap, map } from 'rxjs';
import { Curso } from './models';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../usuarios/models';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient : HttpClient) {

   }

   getCursos(): Observable<Curso[]> {
    return this.httpClient.get<any>(`${environment.urlApi}/cursos`);
  }


  crearCurso( cursoAdd : Curso) : Observable<Curso>{
    return this.httpClient
            .post<Curso>(`${environment.baseUrl}/cursos`,cursoAdd);

  }

  editarCurso ( cursoId : number,cursoEditar : Curso) : Observable <Curso>{
    return this.httpClient
    .put<Curso>(`${environment.baseUrl}/cursos/${cursoId}`, cursoEditar);
  }

  eliminarCurso( idCursoAEliminar : number) :  Observable <void>{
    return this.httpClient
    .delete<void>(`${environment.baseUrl}/cursos/${idCursoAEliminar}`);
  }

  cursoPorId(cursoId : number) : Observable<Curso>{
    return this.httpClient
    .get<Curso>(`${environment.baseUrl}/cursos/${cursoId}`);
  }
}
