import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { Equipment } from '../models/equipment';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-teacher-overview-reservation',
  templateUrl: './teacher-overview-reservation.component.html',
  styleUrls: ['./teacher-overview-reservation.component.css']
})
export class TeacherOverviewReservationComponent implements OnInit {

  reservations: Reservation[] = [];
  equipments!: Equipment[];
  noteEquipment!: Equipment[];
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

  showNotes(id: number) {
    console.log("asd");
    this.noteEquipment = this.equipments.filter(e => e.id = id);
  }

}
