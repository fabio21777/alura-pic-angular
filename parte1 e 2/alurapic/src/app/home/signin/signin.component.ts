import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Auth } from 'src/app/entities/auth';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platformDetector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  auth: Auth = new Auth();

  @ViewChild('userNameInput')
  userNameInput!: ElementRef<HTMLInputElement>;

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(' ', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get userName() { return this.loginForm.get('userName'); }

  get password() { return this.loginForm.get('password'); }
  constructor(
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) { }

  login() {
    this.auth.userName = this.userName?.value;
    this.auth.password = this.password?.value;
    this.authService.login(this.auth.userName, this.auth.password).subscribe({
      next: () => this.router.navigate(['user', this.auth.userName]),
      error: err => {
        console.log(err);
        this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
        this.loginForm.reset();
        alert('Senha ou usuario invalido');
      }
    }
    );
  }


  ngOnInit() {
   
  }
  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
  }

}
