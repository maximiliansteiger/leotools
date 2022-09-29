import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../services/validator.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private validator: ValidatorService) {
    this.registerForm = this.fb.group({
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        email: [null, [Validators.required]],
        password: [null, [Validators.required]],
        confirmPassword:  [null, [Validators.required]]
      },
      {
        validator: this.validator.match('password', 'confirmPassword')
      });
  }

  ngOnInit(): void {
  }

}
