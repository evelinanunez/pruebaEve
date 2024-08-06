import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { environment } from "src/environments/environment.local";

import { map, Observable, Subject } from "rxjs";
import { Usuario } from "src/app/dashboard/paginas/usuarios/models";
import { Store } from "@ngrx/store";
import { AuthActions } from "src/app/store/auth/auth.actions";
import { selectAuthUser } from "src/app/store/auth/auth.selectors";
import { TokenLogin } from "../models";

@Injectable({
    providedIn: 'root'
  })
  export class LoginService{

    public authUser$ =  this.store.select(selectAuthUser);
    public errorMessage$ = new Subject<string>();
    token$ = new Subject<string>();
    usuarioLogueado= false;

    constructor(private httpClient : HttpClient,
                private router : Router,
                private store :Store ){}


    private handleAuthUser(authUser: Usuario): void {
        this.store.dispatch(AuthActions.actualizarUsuario({ data: authUser }));
        //localStorage.setItem('token', authUser.token);
    }
     
    login(usuario : Usuario): boolean{
      
      if (usuario) {
        this.httpClient.post<TokenLogin>(`${environment.urlApi}/Login`, usuario)
          .subscribe({
            next: (respuesta) => {
              if (respuesta.isSuccess) {
                console.log("se inició correctamente:", respuesta);
                localStorage.setItem('token', respuesta.token);
                this.token$.next(respuesta.token);
                this.router.navigate(['/dashboard/home']);
                usuario.apellido = respuesta.apellidoUsuario;
                usuario.nombre = respuesta.nombreUsuario;
                usuario.token = respuesta.token;
                console.log(usuario);
                this.usuarioLogueado = true;
                this.handleAuthUser(usuario);
              } else {
                console.log("Error en contraseña o usuario:", respuesta);
                this.errorMessage$.next("Error en contraseña o usuario.");
              }
            },
            error: (error) => {
              console.log("Error:", error);
              this.errorMessage$.next('No puede loguarse en este momento. Intente mas tarde!');
            }
          });
      }
      return this.usuarioLogueado;
    }

    verifyToken(): Promise<boolean> {
      return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token');
        if (token) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    }


    logout(): void {
      this.store.dispatch(AuthActions.restabecerAuthUsuarios());
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
  }