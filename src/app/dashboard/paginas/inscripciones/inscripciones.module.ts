import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesTablaComponent } from './inscripciones-tabla/inscripciones-tabla.component';
import { InscripcionesDialogComponent } from './inscripciones-dialog/inscripciones-dialog.component';



@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesTablaComponent,
    InscripcionesDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscripcionesRoutingModule
  ],
  exports:[InscripcionesComponent]
})
export class InscripcionesModule { }
