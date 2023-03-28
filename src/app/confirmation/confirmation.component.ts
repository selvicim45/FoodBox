import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodBoxService } from '../food-box.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  foodSelected:String[]=[];
  constructor(private foodService:FoodBoxService,private route:Router) { }

  ngOnInit(): void {
    this.getSelectedData();
    
  }

  //get Data from food component via service as mid man
  getSelectedData()
  {
   this.foodSelected= this.foodService.getData();
   console.log("Data selected are "+ this.foodSelected);
  }

  showHomePage()
  {
    this.route.navigate(['']);
  }

  showPaymentComponent()
  {
    this.route.navigate(['payment']);
  }
}
