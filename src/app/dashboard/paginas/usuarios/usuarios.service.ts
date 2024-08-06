import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
              private httpClient : HttpClient
  ) { }

  traerUsuarios() : Observable<Usuario[]>{
     return this.httpClient.get<Usuario[]>(`${environment.baseUrl}/usuarios`)
  }


  crearUsuario( usuarioAdd : Usuario) : Observable<Usuario>{
    return this.httpClient
    .post<Usuario>(`${environment.baseUrl}/usuarios`,usuarioAdd);
  }

  editarUsuario( usuarioId : number,usuarioEditar : Usuario) : Observable <Usuario>{
    return this.httpClient
    .put<Usuario>(`${environment.baseUrl}/usuarios/${usuarioId}`, usuarioEditar);
  }

  eliminarUsuario( idUsuarioAEliminar : number) :  Observable <void>{
    return this.httpClient
    .delete<void>(`${environment.baseUrl}/usuarios/${idUsuarioAEliminar}`);
  }
}
