import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loweCaseValidate } from 'src/app/shared/validate/loweCaseValidate';
import { SigupNotTakenValidationService } from './sigupNotTakenValidation.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {

  sigUp: FormGroup = new FormGroup({
    email: new FormControl('',
      [
        Validators.required,
        Validators.email]
    ),
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40)
    ]),
    userName: new FormControl('', [
      Validators.required,
      loweCaseValidate,
      Validators.minLength(2),
      Validators.maxLength(30)
    ],
    this.sigupNotTakenValidationService.chekenUserNameTaken()
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(14)
    ])
  });
  constructor(private router: Router,private sigupNotTakenValidationService:SigupNotTakenValidationService) { }

  get email() { return this.sigUp.get('email'); }

  get fullName() { return this.sigUp.get('fullName'); }

  get userName() { return this.sigUp.get('userName'); }

  get password() { return this.sigUp.get('password'); }

  ngOnInit() {
  }

}
