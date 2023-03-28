import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { FoodBoxService } from '../food-box.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.scss']
})
export class UpdateFoodComponent implements OnInit {
  food:Food = new Food();
  id:number;
  foodInfo:Food[];
  constructor(private foodboxService:FoodBoxService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this method will bring data in display in update form text boxes
   this.id =this.route.snapshot.params['id'];   
   this.getFoodDetails();
  }

  
  getFoodDetails()
  {
    this.foodboxService.showFoodBasedOnID(this.id).subscribe(data =>{
    this.food = data;      
   });
  }
  showHomePage()
  {
     this.router.navigate(['']);
  }
  showAdminPage()
  {
    this.router.navigate(['adminpage']);
  }

  upDateFood()
  {
    console.log("Inside the update food in .ts");
    this.foodboxService.updateFood(this.id,this.food).subscribe(data=>{
    this.showAdminPage();
    });
  }

  

}
