import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
 user:User = new User();
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  userRegister()
  {
     this.userService.userRegister(this.user).subscribe(data=>{
     alert("user Registration Successful, you may login now"); 
     this.showUserLoginComponent();
    },error=>alert("username already exists"));

  }
  showUserLoginComponent()
  {
     this.router.navigate(['userlogin']);
  }

  showHomePage()
  {
    this.router.navigate(['']);
  }
}
