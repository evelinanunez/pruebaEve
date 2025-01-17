import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children:[
      {
        path:'login',
        loadChildren: ()=> import('./paginas/login/login.module').then((m)=>m.LoginModule)
      },
      {
        path:'registrate',
        loadChildren :()=>import('./paginas/registro/registro.module').then((m)=>m.RegistroModule)
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class AuthRoutingModule{}
