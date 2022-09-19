import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from './SignUp.service';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigupNotTakenValidationService {

  constructor(private  sigupService: SignUpService) { }

  chekenUserNameTaken() {
    return(control:AbstractControl) =>{
      return control
          .valueChanges
          .pipe(debounceTime(300))
          .pipe(switchMap(userName => this.sigupService.checkUserNameTaken(userName)))
          .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
          .pipe(first());
    }
  }

}
