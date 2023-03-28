import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodBoxService } from '../food-box.service';
import { Food } from '../food';
import { FormGroup } from '@angular/forms';





@Component({
  selector: 'app-add-new-food',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.scss']
})
export class AddNewFoodComponent implements OnInit {
  food:Food= new Food();
  file:any;
  userfile:any = File;
  userformdata: any ;
  formData = new FormData();
  reactiveForm:any = FormGroup;
  constructor(private router:Router,private foodService:FoodBoxService) { }
 
  ngOnInit(): void {
    
  }

  createNewFood()
  {
    this.foodService.createNewFoodService(this.food).subscribe(data=>{
      this. showAdminComponent();

    });
  }

  showAdminComponent()
  {
    this.router.navigate(['adminpage']);

  }
  showHomePage()
  {
    this.router.navigate(['']);
  }

  showAllFood()
  {
    this.router.navigate(['foodlist']);
  }

  onSelectFile(event:any)
  {
      this.file = event.target.files[0];
      console.log(this.file);
      this.userfile = this.file;
  }

  saveForm(submitForm:FormGroup)
  {
     this.userformdata=submitForm.value;
     this.formData.append('food',JSON.stringify(this.food));
     this.formData.append('file',this.userfile);
     this.foodService.saveNewFoodWithPicService(this.formData).subscribe((data)=>{
     console.log(data);
     });

  }


}
