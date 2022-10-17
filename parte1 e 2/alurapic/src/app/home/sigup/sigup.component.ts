import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platformDetector.service';
import { loweCaseValidate } from 'src/app/shared/validate/loweCaseValidate';
import { NewUser } from './interfaces/newUser';
import { SignUpService } from './SignUp.service';
import { SigupNotTakenValidationService } from './sigupNotTakenValidation.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {
  @ViewChild('emailInput')
  emailInput!: ElementRef<HTMLInputElement>;

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
  constructor(
    private router: Router
    ,private sigupNotTakenValidationService:SigupNotTakenValidationService
    ,private signUpService:SignUpService
    ,private platformDetectorService: PlatformDetectorService
    ) {
      
    }
  ngOnInit(): void {
    this.platformDetectorService.isPlatformBrowser() && this.emailInput.nativeElement.focus();
  }

  get email() { return this.sigUp.get('email'); }

  get fullName() { return this.sigUp.get('fullName'); }

  get userName() { return this.sigUp.get('userName'); }

  get password() { return this.sigUp.get('password'); }

  sigup() {
    if (this.sigUp.valid) {
      const newUser = this.sigUp.getRawValue()  as NewUser;
      this.signUpService.signup(newUser).subscribe({
        next: () => this.router.navigate(['']),
        error: err => console.log(err)
      });
    }
  }
  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
    this.emailInput.nativeElement.focus();
  }

}
