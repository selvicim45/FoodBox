import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewFoodComponent } from './add-new-food/add-new-food.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FoodListComponent } from './food-list/food-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:'foodlist',component:FoodListComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'',component:HomepageComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'payment',component:PaymentComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'adminpage',component:AdminPageComponent},
  {path:'addnewfood',component:AddNewFoodComponent},
  {path:'userregister',component:UserRegisterComponent},
  {path:'updatefood/:id',component:UpdateFoodComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
