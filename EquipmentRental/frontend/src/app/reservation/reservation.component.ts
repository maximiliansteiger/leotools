import { Component, OnInit } from '@angular/core';
import { reservation } from '../models/reservation';
import { Equipment } from '../models/equipment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  reservations: reservation[] =  [];
  equipments!: Equipment[];

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    alert("Delete works")
  }

}
