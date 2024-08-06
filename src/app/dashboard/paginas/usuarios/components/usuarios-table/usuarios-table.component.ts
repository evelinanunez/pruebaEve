import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../models';
import { Router } from '@angular/router';
//import { AuthService } from 'src/app/auth/auth.service';
import { Observable, map } from 'rxjs';
import { LoginService } from 'src/app/auth/paginas/login/login.service';



@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html'
})
export class UsuariosTableComponent {

  public authUser$: Observable<Usuario | null>;
  constructor( private router : Router,
              private authService: LoginService){
      this.authUser$ = this.authService.authUser$;
  }

  get rol$ () :Observable<string | undefined> {
    return this.authUser$.pipe(
      map((usuario) => usuario?.rol));
  }

  @Input()
  dataSource : Usuario[]= [];
  //Nombre de las columnas de mi tabla
  displayedColumns = ['id','nombre','apellido', 'email','rol', 'acciones'];

  @Output()
  eliminarUsuario = new EventEmitter<number>();

  @Output()
  editarUsuario = new EventEmitter<Usuario>();

  verDetalle( usuarioId : number): void{
    this.router.navigate(['dashboard','usuarios','detalle', usuarioId]);
  }
}










