/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { LoginPayload } from './paginas/models';
import { Usuario } from '../dashboard/paginas/usuarios/models';
import { UsuarioLogin } from './models';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/auth/auth.actions';
import { selectAuthUser } from '../store/auth/auth.selectors';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _authUser$ = new BehaviorSubject<Usuario | null>(null);

   public authUser$ =  this.store.select(selectAuthUser);

  constructor( private router: Router,
               private httpClient : HttpClient,
              private store :Store) {}

private handleAuthUser(authUser: Usuario): void {
                this.store.dispatch(AuthActions.actualizarUsuario({ data: authUser }));
                localStorage.setItem('token', authUser.token);
              }


  login(usuarioLogin :UsuarioLogin ):void{
    this.httpClient.get<Usuario[]>(`${environment.baseUrl}/usuarios?email=${usuarioLogin.email}&password=${usuarioLogin.password}`)
    .subscribe({
      next: (respuesta)=>{
        if(!respuesta.length){
          alert('Usuario o contaseña invalidos');
        }else{
          const usuarioLogueado = respuesta[0];
            this.handleAuthUser(usuarioLogueado);
            this.router.navigate(['/dashboard/home']);
        }
      },
      error: (error)=>{
        alert('Error de conexion');
      }
    });
  }

  verifyToken(): Observable<boolean> {
    return this.httpClient
      .get<Usuario[]>(
        `${environment.urlApi}/obtenerUsuarios?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((users) => {
          if (!users.length) {
            return false;
          } else {
            const authUser = users[0];
            this.handleAuthUser(authUser);
            return true;
          }
        })
      );
  }

    logout(): void {
      this.store.dispatch(AuthActions.restabecerAuthUsuarios());
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

} */
 