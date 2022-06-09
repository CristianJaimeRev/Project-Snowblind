//ImportantModules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components page
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NewpassComponent } from './auth/newpass/newpass.component';
import { PipePipe } from './busqueda/pipe/pipe.pipe';
import { ViewComponent } from './view/view.component';

//Modules page
import { SigninModule } from './auth/signin/signin.module';
import { SignupModule } from './auth/signup/signup.module';

//Utilities
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SpinerComponent } from './auth/spiner/spiner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrincipalComponent } from './home/principal/principal.component';
//primeng
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CardsComponent } from './busqueda/cards/cards.component';
import {DialogModule} from 'primeng/dialog';
import { NovedadesComponent } from './home/novedades/novedades.component';
import { NovecardsComponent } from './home/novedades/novecards/novecards.component';
import { PipeselectPipe } from './busqueda/pipeselect/pipeselect.pipe';
import { PipetypePipe } from './busqueda/pipetype/pipetype.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    NewpassComponent,
    SpinerComponent,
    FooterComponent,
    BusquedaComponent,
    CardsComponent,
    PipePipe,
    ViewComponent,
    PrincipalComponent,
    NovedadesComponent,
    NovecardsComponent,
    PipeselectPipe,
    PipetypePipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SigninModule,
    SignupModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    AccordionModule,
    DialogModule,
    
    ToastrModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
