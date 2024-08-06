import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosDialogComponent } from './componentes/alumnos-dialog/alumnos-dialog.component';
import { AlumnosTablaComponent } from './componentes/alumnos-tabla/alumnos-tabla.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';



@NgModule({
  declarations: [
    AlumnosDialogComponent,
    AlumnosTablaComponent,
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule
  ],
  exports:[
    AlumnosComponent
  ]
})
export class AlumnosModule {

}
