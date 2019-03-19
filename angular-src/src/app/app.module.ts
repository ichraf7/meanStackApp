import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule ,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormsModule } from '@angular/forms';
import  {ValidateService} from './services/validate.service' ;
import { HttpModule } from '@angular/http';
import {AuthService} from './services/auth.service'
  import { from } from 'rxjs';
const appRoutes :Routes =[
  {path:'', component:HomeComponent} ,
  {path:'register', component:RegisterComponent} ,
  {path:'login', component:LoginComponent} ,
  {path:'profile', component:ProfileComponent} ,
  {path:'dashboard', component:DashbordComponent} ,

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule ,
    RouterModule.forRoot(appRoutes),
    FormsModule ,
    HttpModule
  ],
  providers: [
    ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
