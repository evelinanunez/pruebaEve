import { HttpClient } from "@angular/common/http";
import { Injectable, Output } from "@angular/core";
import { Usuario } from "../models";
import { environment } from "src/environments/environment.local";

@Injectable({
    providedIn: 'root'
  })
  export class RegistroService{

    @Output()
    mensaje = '';
    constructor( private httpClient : HttpClient){
        
    }

    registrarse(usuario : Usuario): void{
        console.log(usuario)
        this.httpClient.post<Usuario>(`${environment.urlApi}/Registrarse`,usuario)
        .subscribe({
                next: (respuesta)=>{
                    
                this.mensaje = 'Usuario registrado correctamente!'
            },
            error:(error)=>{
                this.mensaje = 'No se pudo registrar, intentelo nuevamente!'
            }
        });
    }
  }