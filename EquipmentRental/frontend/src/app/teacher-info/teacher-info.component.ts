import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  updateTeacher(){
    alert("Informations of teacher were updated!")
  }

}
