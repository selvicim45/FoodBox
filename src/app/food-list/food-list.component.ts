import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { FoodBoxService } from '../food-box.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})


export class FoodListComponent implements OnInit {
  food:Food = new Food(); 
  foodInfo:Food[];
  foodSelected: String[]=[];
  selectedItem:any;
  selection:any;
  fdropdown:Food[];
  constructor(private foodboxService:FoodBoxService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.viewAllFoodItems();
    this.getAllFoodFromDatabaseForDropDownBox();
  }
  
  getAllFoodFromDatabaseForDropDownBox()
  {    
    this.foodboxService.ShowAllFoodItems().subscribe(data => {this.fdropdown=data;});
           
  }

  //To display all fooditems from the database if the login successful
  viewAllFoodItems()
  {
    this.foodboxService.ShowAllFoodItems().subscribe(data => {this.foodInfo=data;});
  }

 // To add the selected Fooditems to the String Array
  addSelectedFoodToArray(event:any)
  {
    this.selectedItem= event.target.value;
    this.foodSelected.push(this.selectedItem);
  }

  //Sender to send data to FoodBox Service setData() method
  sender()
  {
    this.foodboxService.setData(this.foodSelected);
    this.router.navigate(['confirmation']);
  }

  showHomePage()
  {
    this.router.navigate(['']);
  }

//To display food item based on the user cuisne selection in dropdownbox
//This method get the selected value from html using the $event 
//And Send the selected value to Service method which in turn get all food in related cuisne from DB
//and display for users to select
  
showFoodSelectedFromDropDown(event:any) 
{   
this.selection= event.target.value;
console.log("Selection is",this.selection);
this.foodboxService.showFoodItemsBasedOnDropDownSelectionService(event.target.value).subscribe(data => {this.foodInfo=data;});
 }


}
