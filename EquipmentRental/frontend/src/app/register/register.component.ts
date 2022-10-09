import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../services/validator.service";
import {HttpService} from "../services/http.service";
import {User} from "../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  user!: User;

  constructor(private fb: FormBuilder, private validator: ValidatorService, private http: HttpService) {
    this.registerForm = this.fb.group({
        firstName: [null, []],
        lastName: [null, []],
        email: [null, []],
        password: [null, []],
        confirmPassword:  [null, []]
      },
      {
        //validator: this.validator.match('password', 'confirmPassword')
      });
  }

  ngOnInit(): void {
  }

  register(): void {
    console.log("cool");
    this.user = (this.registerForm.value.firstName, this.registerForm.value.lastName, this.registerForm.value.email, this.registerForm.value.password);
    this.http.createUser(this.user);
    //console.log(this.registerForm.get('fistName'));
  }

}
