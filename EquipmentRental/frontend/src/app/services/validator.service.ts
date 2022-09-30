import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  match(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (passwordControl.value != confirmPasswordControl.value) {
        return confirmPasswordControl.setErrors({didNotComfirmPassword: true});
      }
      return null;
    }
  }
}
