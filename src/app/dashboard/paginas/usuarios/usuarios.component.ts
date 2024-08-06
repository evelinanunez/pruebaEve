import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UsuariosDialogComponent } from './components/usuarios-dialog/usuarios-dialog.component';
import { Usuario } from './models';
import { UsuariosService } from './usuarios.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {

  usuarios$ : Observable<Usuario[]>;
  // usuarios : Usuario[] = [];
  formulario ='';

  constructor(
    private matDialog : MatDialog,
    private usuarioServicio : UsuariosService

  ){
    this.usuarios$ = this.usuarioServicio.traerUsuarios();
 /*    this.usuarioServicio.traerUsuarios().subscribe({
      next :(v)=>{
        this.usuarios= v;
      },
      error :()=>{},
      complete: ()=>{},
    }); */
  }


  openUsuariosDialog() : void{
    this.matDialog.open(UsuariosDialogComponent)
    .afterClosed()
    .subscribe({
      next:(usuario) =>{
        if(!!usuario){
           this.usuarioServicio.crearUsuario(usuario)
           .subscribe({
            next : ()=>{
              this.usuarios$ = this.usuarioServicio.traerUsuarios();
            }
          })
        }
      }
    });
  }

  /* OnEliminarUsuario ( idUsuario : number) : void{
    this.usuarios = this.usuarios.filter((a) => a.id !== idUsuario);
  }
 */
  OnEliminarUsuario (idUsuarioEliminar : number): void{
    this.usuarioServicio.eliminarUsuario(idUsuarioEliminar).subscribe({
      next: ()=>{
        this.usuarios$  = this.usuarioServicio.traerUsuarios();
      }
    })
  }

/*   onEditarUsuario ( usuario : Usuario) : void{
    this.matDialog.open(UsuariosDialogComponent,{
      data :usuario,
    })
    .afterClosed()
    .subscribe({
      next : (v)=>{
        if(!!v){
          this.usuarios = this.usuarios.map((u)=>
          u.id === usuario.id ? {...u,...v}: u);
        }
      }
    });
  } */

  onEditarUsuario (usuarioEditar : Usuario):void{
    this.matDialog.open(UsuariosDialogComponent, {
      data : usuarioEditar ,
    })
    .afterClosed()
    .subscribe({
      next :(usuario)=>{
        if(!!usuario){
          this.usuarioServicio.editarUsuario(usuarioEditar.id, usuario).subscribe({
            next : ()=>{
              this.usuarios$  = this.usuarioServicio.traerUsuarios();
            }
          })
        }
      }
    })
  }
}
