import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String
  email :String
  password:String

  constructor(private validateService :ValidateService , 
              private authService :AuthService,) { }

  ngOnInit() {
  }
  
  onRegisterSubmit(){
    const user={
      name:this.name, 
      email:this.email ,
      password :this.password
    }
    if(!this.validateService.ValidateRegistration(user)){
      console.log(this.validateService.ValidateRegistration(user))
      return false
    }
    this.authService.registerUser(user)
  }
}
