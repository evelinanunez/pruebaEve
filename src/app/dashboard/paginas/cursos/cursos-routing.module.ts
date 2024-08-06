import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursosComponent } from "./cursos.component";
import { CursosDetalleComponent } from "./components/cursos-detalle/cursos-detalle.component";

const routes : Routes =[
  {
    path: '',
    component: CursosComponent,
  },
  {
    path:':id',
    component: CursosDetalleComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule{}
