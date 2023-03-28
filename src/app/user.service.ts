import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 user:User;
 baseURL="http://localhost:8080/api/v1/user";
 regURL="http://localhost:8080/api/v1/register";
  constructor(private httpClient:HttpClient) { }


    //UserLogin
    userLoginService(user: User):Observable<object>
    {
      return this.httpClient.post(`${this.baseURL}`,user);
    }
  
    //User Register
    userRegister(user: User):Observable<object>
    {
       console.log(user);
       return this.httpClient.post(`${this.regURL}`,user);
    }
}
