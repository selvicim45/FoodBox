import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user:User = new User();
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  //method for user login
  userLogin()
  {
    return this.userService.userLoginService(this.user).subscribe(data=>{
      this.router.navigate(['foodlist']);
    })
  }

  showHomePage(){
    this.router.navigate(['']);
  }
}

  
