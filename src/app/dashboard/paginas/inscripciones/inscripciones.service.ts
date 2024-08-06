import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Inscripcion } from "./models";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";

@Injectable({providedIn:'root'})
export class InscripcionesService{

  constructor( private httpClient : HttpClient){

  }
  getInscripciones():Observable<Inscripcion[]>{
    return this.httpClient.get<Inscripcion[]>(`${environment.baseUrl}/inscripciones?_expand=curso&_expand=alumno`)
  }

  crearIncripcion(inscripcionAdd : Inscripcion) : Observable<Inscripcion>{
    return this.httpClient
    .post<Inscripcion>(`${environment.baseUrl}/inscripciones`,inscripcionAdd);
  }

  editarInscripcion ( InscripcionId : number,InscripcionEditar : Inscripcion) : Observable <Inscripcion>{
    return this.httpClient
    .put<Inscripcion>(`${environment.baseUrl}/inscripciones/${InscripcionId}`, InscripcionEditar);
  }

  eliminarInscripcion( idInscripcionAEliminar : number) :  Observable <void>{
    return this.httpClient
    .delete<void>(`${environment.baseUrl}/inscripciones/${idInscripcionAEliminar}`);
  }
}
