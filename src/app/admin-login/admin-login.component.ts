import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  admin:Admin = new Admin();
  constructor(private adminService:AdminService,private route:Router) { }

  ngOnInit(): void {
  }

  adminLogin()
  {
    return this.adminService.adminLoginService(this.admin).subscribe(data=>{
      this.route.navigate(['adminpage']);
    })
  }

}
