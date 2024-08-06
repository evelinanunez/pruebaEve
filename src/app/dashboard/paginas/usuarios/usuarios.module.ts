import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuariosDialogComponent } from './components/usuarios-dialog/usuarios-dialog.component';
import { UsuariosTableComponent } from './components/usuarios-table/usuarios-table.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosDialogComponent,
    UsuariosTableComponent,
    UsuarioDetalleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuariosRoutingModule
  ],
  exports:[
    UsuariosComponent
  ],
})
export class UsuariosModule { }
