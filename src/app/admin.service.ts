import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Admin } from './admin';
import { Food } from './food';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
 admin:Admin;
 food:Food;

 baseURL="http://localhost:8080/api/v1/admin";
  constructor(private httpClient:HttpClient) { }

//Method for admin login
  adminLoginService(admin:Admin):Observable<object>
  {
 
    return this.httpClient.post(`${this.baseURL}`,admin);
  }

}
