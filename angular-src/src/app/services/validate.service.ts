import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  ValidateRegistration(user){
    if(user.name ==undefined || user.email==undefined ||  user.password ==undefined){
      return false
    }
    else return true
  }
}
