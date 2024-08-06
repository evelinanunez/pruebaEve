import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';
import { CursosTablaComponent } from './components/cursos-tabla/cursos-tabla.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosDetalleComponent } from './components/cursos-detalle/cursos-detalle.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDialogComponent,
    CursosTablaComponent,
    CursosDetalleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
