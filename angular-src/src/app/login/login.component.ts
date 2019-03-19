import { Component, OnInit } from '@angular/core';
import {AuthService}from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:String 
  password :String
   
  constructor(private authService :AuthService) { }
  


  ngOnInit() {
  }
  
  onLoginSubmit(){
    const user={
      email:this.email ,
      password:this.password
    }
   this.authService.authenticateUser(user)
  }
}
