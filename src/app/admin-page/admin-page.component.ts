import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodBoxService } from '../food-box.service';
import { Food } from '../food';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  foodInfo:Food[];
  constructor(private router:Router,private foodboxService:FoodBoxService) { }

  ngOnInit(): void {
    this.viewAllFoodItems();
  }

    //To display all fooditems from the database if the login successful
    viewAllFoodItems()
    {
      this.foodboxService.ShowAllFoodItems().subscribe(data => {this.foodInfo=data;});
      console.log("Foof info" ,this.foodInfo);
    }

    //To delete food from admin page
    deleteFood(id:number)
    {
      let ch=confirm("Are u sure you want to delete?")
      if (ch==true)
      {
      this.foodboxService.deleteExistingFoodService(id).subscribe(data =>{
        this. viewAllFoodItems();
      });   
    }
    }
  

    showHomePage()
    {
      this.router.navigate(['']);
    }

 

    showUpdateFood(id:number)
    {
      this.router.navigate(['updatefood',id]);
    }

    showAddNewFood()
    {
      this.router.navigate(['addnewfood']);;
    }

}
