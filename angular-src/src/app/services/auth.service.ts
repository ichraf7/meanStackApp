import { Injectable } from '@angular/core';
import {Http ,Headers} from '@angular/http' ;
import {Router} from '@angular/router';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken :any ;
  user :any ;
  constructor(private http :Http ,  private router :Router) { }
  
  registerUser(user){
   
   let headers =new Headers();
   headers.append('Content-Type','application/json')
   this.http.post('http://localhost:3000/users/register',user,{headers:headers})
   .subscribe(data=>{
    if(data.ok){
      this.router.navigate(['/login'])
    }
    else{
      this.router.navigate(['/register'])
     }
    })
   
  }

  authenticateUser(user){ 
    let headers =new Headers();
    headers.append('Content-Type','application/json')
    this.http.post('http://localhost:3000/users/login',user,{headers:headers})
    .pipe(map(data => data.json()))
    .subscribe(data=>{
     if(data.ok){
       this.StoreUserData(data.token ,data.userID)
       this.router.navigate(['/dashboard'])
     }
     else{
       this.router.navigate(['/register'])
      }
     })
    }

   private StoreUserData(token ,user){
     localStorage.setItem('id_token' ,token);
     localStorage.setItem('user',JSON.stringify(user))
     this.authToken=token
     this.user=user
    } 
   logOut(){
     this.user=null
     this.authToken=null
     localStorage.clear()
   }
}
