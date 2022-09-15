import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import jwt_decode from 'jwt-decode';
import { User } from './user';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName: string | undefined;

  private userSubject = new BehaviorSubject<User>(null as any);


constructor(private tokenService:TokenService) { 
  this.tokenService.hasToken() && this.decodeAndNotify();
}

  setToken(token:string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  decodeAndNotify(){
    const token = this.tokenService.getToken();
    if(token){
      const user = jwt_decode(token) as User;
      this.userName = user.name;
      this.userSubject.next(user);
    }

  }
  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null as any);
  }

  getUserName(){
    return this.userName;
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

}


