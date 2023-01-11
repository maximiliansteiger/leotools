import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipment } from '../models/equipment';
import { Reservation } from '../models/reservation';
import { RentalComponent } from '../rental/rental.component';
import { DetailService } from '../services/detail.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private details: DetailService, private http: HttpService, private router: Router) { }

  activeEquipment!: Equipment
  equipments!: Equipment[];
  availableEquipment!: number;
  startDate!: Date | null | undefined;
  endDate!: Date | null | undefined;
  quantity = 1;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  ngOnInit(): void {
    this.activeEquipment = this.details.equipment;
    this.availableEquipment = 0;

    this.http.getAllEquipments().subscribe((data) => {
      this.equipments = data;
      console.log(this.equipments);
      this.getAvailable(this.activeEquipment.name);
    });

  }
  setDates() {

  }

  getAvailable(name: any) {
    this.equipments.forEach((equipment) => {
      if (equipment.name == name && equipment.status == "Available") {
        this.availableEquipment++
      }
    })
    return this.availableEquipment;
  }

  rent() {
    this.startDate = this.range.value.start;
    this.endDate = this.range.value.end;
    console.log(this.startDate);
    console.log(this.endDate);
    // create a reservation object
    console.log(this.activeEquipment);

    let createReservationDto: any = {
      userId: 1,
      equipmentId: this.activeEquipment.id,
      statusId: 1,//1 = reserviert
      startDate: this.startDate!,
      endDate: this.endDate!,
    }
    this.http.createReservation(createReservationDto).subscribe((data) => {
      console.log(data);
    });

    this.router.navigate(['/equipment']);
  }

  getImageByEquipment(et: String) {
    let imageURL = "../../assets/img/";
    let imageURL2 = '../../assets/img/Sony_6100.png';

    switch (et) {
      case "Zoom H2n":
        imageURL += "zoom.png"
        break;
      case "Canon Eos 850D":
        imageURL += "Canon_Eos_850D.png"
        break;
      case "Sony 6100":
        imageURL += "Sony_6100.png"
        break;
      case "hama star 75":
        imageURL += "hama_star_75.png"
        break;
      default:
        imageURL += "err.png"
        break;
    }
    return imageURL2;
  }
}