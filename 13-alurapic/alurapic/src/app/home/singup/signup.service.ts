import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';
import { provideForRootGuard } from '@angular/router/src/router_module';

import { enviroment } from '../../../environments/environment';

const API = enviroment.apiUrl;

@Injectable()
export class SignUpService {

    constructor(private http: HttpClient) {}

    checkUserNameTaken(userName: string) {

        return this.http.get(API + '/user/exists/' + userName);
    }

    signup(newUser: NewUser) {
        return this.http.post(API + '/user/signup', newUser);
    }
}
