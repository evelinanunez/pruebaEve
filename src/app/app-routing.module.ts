import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { dashboardGuard } from './core/duards/dashboard.guard';


const routes : Routes = [
  {
    path: 'dashboard',
     canActivate: [dashboardGuard],
    loadChildren : ()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path:'**',
    redirectTo: 'auth/login'
  },
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
}
)
export class AppRoutingModule{

}
