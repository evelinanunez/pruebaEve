import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./paginas/home/home/home.component";
//import { adminGuard } from "../core/duards/admin.guard";

const routes : Routes =[
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'alumnos',
        loadChildren: ()=> import('./paginas/alumnos/alumnos.module').then((m)=>m.AlumnosModule)
      },

      {
        path:'cursos',
        loadChildren: ()=> import('./paginas/cursos/cursos.module').then((m)=>m.CursosModule)
      },
      {
        path: 'usuarios',
        //canActivate:[adminGuard],
        loadChildren: ()=> import('./paginas/usuarios/usuarios.module').then((m)=>m.UsuariosModule)
      },
      {
        path:'inscripciones',
        loadChildren:()=> import('./paginas/inscripciones/inscripciones.module').then((m)=>m.InscripcionesModule)
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ],
  }
]
@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule{}
