import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { FoodListComponent } from './food-list/food-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddNewFoodComponent } from './add-new-food/add-new-food.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UpdateFoodComponent } from './update-food/update-food.component';








@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    ConfirmationComponent,
    HomepageComponent,
    UserLoginComponent,
    PaymentComponent,
    ThankyouComponent,
    AdminLoginComponent,
    AdminPageComponent,
    AddNewFoodComponent,
    UserRegisterComponent,
    UpdateFoodComponent
   
  
   
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
