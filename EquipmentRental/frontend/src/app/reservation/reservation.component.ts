import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { Equipment } from '../models/equipment';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  reservations: Reservation[] = [];
  equipments!: Equipment[];
  states!: any[];


  constructor(private http: HttpService) { }

  ngOnInit(): void {

    this.http.getAllStatuses().subscribe((res: any) => {
      this.states = res;
      console.log(this.states);
    });

    this.http.getAllReservations().subscribe((res: any) => {
      this.reservations = res;
      console.log(this.reservations);
    });

    this.http.getAllEquipments().subscribe((res: any) => {
      this.equipments = res;
      console.log(this.equipments);
    });
  }


  equipmentNameOfReservation(equipmentId: number): string {
    return this.equipments.find(e => e.id == equipmentId)?.name || '';
  }

  getStatusById(id: any): string | void {

    let state = this.states.find(s => s.id == id)?.name;

    switch (state) {
      case "reserviert":
        return `🟡 ${state} `;
      case "ausgeborgt":
        return `🟢 ${state} `;
      case "abgelehnt":
        return `🔴 ${state} `;
      default:
        return "🟡pending...";
    }
  }

  delete() {
    alert("Delete works")
  }

}
