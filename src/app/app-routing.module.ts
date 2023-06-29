import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full', data: {animation: 'register'}},
  { path: 'register', component: LoginComponent, data: {animation: 'register'}},
  { path: 'bussinesData', component: LoginComponent, data: {animation: 'bussinesData'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
