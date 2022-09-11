import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  get userName() { return this.loginForm.get('userName'); }

  get password() { return this.loginForm.get('password'); }
  constructor() { }

  ngOnInit() {
  }

}
