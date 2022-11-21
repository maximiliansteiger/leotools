import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-teacher',
  templateUrl: './contact-teacher.component.html',
  styleUrls: ['./contact-teacher.component.css']
})
export class ContactTeacherComponent implements OnInit {

  messageForm!: FormGroup;

  constructor() { }

  

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      message: new FormControl("")
   });
  }

  onSubmit(value: String){
    this.messageForm.setValue({message: value});
    alert(this.messageForm.controls['message'].value)
  }

}
