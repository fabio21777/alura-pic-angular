import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/auth/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  user$:Observable<User>
  constructor(
    private userService:UserService,
    private router:Router
    ) { 
    this.user$ = userService.getUser();
  }

  logout(){
    this.userService.logout(); 
    this.router.navigate(['']); 
  }




}
