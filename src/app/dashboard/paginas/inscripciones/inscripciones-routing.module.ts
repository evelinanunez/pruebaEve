import { RouterModule, Routes } from "@angular/router";
import { InscripcionesComponent } from "./inscripciones.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path:'',
    component: InscripcionesComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
})
export class InscripcionesRoutingModule{}
