import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UsuariosModule } from './paginas/usuarios/usuarios.module';
import { AlumnosModule } from './paginas/alumnos/alumnos.module';
import { CursosModule } from './paginas/cursos/cursos.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeModule } from './paginas/home/home.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    DashboardRoutingModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
