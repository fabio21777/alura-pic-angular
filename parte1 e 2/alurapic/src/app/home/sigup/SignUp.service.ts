import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './interfaces/newUser';

const API_URL = "http://localhost:3000";

@Injectable({ providedIn: 'root' })
export class SignUpService {

    constructor(private http: HttpClient) {}

    checkUserNameTaken(userName: string) {

        return this.http.get(API_URL + '/user/exists/' + userName);
    }

    signup(user: NewUser) {
        return this.http.post(API_URL + '/user/signup', user);
    }
}