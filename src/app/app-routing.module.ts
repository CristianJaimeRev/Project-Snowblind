import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewpassComponent } from './auth/newpass/newpass.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [

 {path: 'register', component: SignupComponent},
 {path: 'view/:movie', component: ViewComponent},
 {path: 'sign-in', component: SigninComponent},
 {path: 'newpass', component: NewpassComponent},
 {path: 'register', component: SignupComponent},
 {path: 'busqueda', component: BusquedaComponent},
 {path: 'home', component: HomeComponent},
 {path: '', component: SigninComponent},
 {path: '**', component: SigninComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
