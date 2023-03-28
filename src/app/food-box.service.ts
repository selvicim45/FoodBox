import { Injectable } from '@angular/core';
import { Food } from './food';
import {Observable } from'rxjs';
import {HttpClient }  from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class FoodBoxService {
    id:number;
    name:String;
    price:number;
    cuisine: String;
    description: String;
    offers:String;
    piclinks:String;
    enable:any;

  foodSelected:String[]=[];
  private foodURL="http://localhost:8080/api/v1/food";
  private splFoodURL="http://localhost:8080/api/v1/food/selection";
  selection:any;

  constructor(private httpClient:HttpClient) { }

   //Method to display all the Food Items
  ShowAllFoodItems():Observable<Food[]>
  {
    return this.httpClient.get<Food[]>(`${this.foodURL}`);
  }

  //get & set Methods to transfer data between components
  getData(){
    return this.foodSelected;
  }
  setData(data)
  {
     this.foodSelected =data;
  }

  //To delete food in database
  deleteExistingFoodService(id:number):Observable<Object>
  {
         return this.httpClient.delete(`${this.foodURL}/${id}`);
  }
 

  //To Update Food
  updateFood(id:number,food:Food,):Observable<object>
  {
    console.log("Inside the update food in Service");
    return this.httpClient.put(`${this.foodURL}/${id}`,food);
  }

  showFoodBasedOnID(id:number):Observable<Food>
  {
    return this.httpClient.get<Food>(`${this.foodURL}/${id}`);
  }


  //Method to display Food based on Search in User Page
  //User can view food available based on cuisine selection in the dropdown
  showFoodItemsBasedOnDropDownSelectionService(selection:any):Observable<Food[]>
  {
     console.log("Selection inside service method",selection);
     
     return this.httpClient.get<Food[]>(`${this.splFoodURL}/${selection}`);
  }

  //To Create a New food Item from frontend and store in Database
  createNewFoodService(food:Food):Observable<Object>
  {
   return this.httpClient.post(`${this.foodURL}`,food);
  }

  saveNewFoodWithPicService(formData:FormData):Observable<any>
  {
    return this.httpClient.post(`http://localhost:8080/api/v1/food/saveformdata`,formData);
  }


  
 
}

