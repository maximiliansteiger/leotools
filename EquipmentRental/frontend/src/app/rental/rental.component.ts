import { Component, OnInit } from '@angular/core';
import { Equipment } from '../models/equipment';
import { EquipmentTypes } from '../models/equipmentType';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {


  equipments!: Equipment[];
  equipmentTypes!: EquipmentTypes[]
  staticEquipment!: Equipment[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAllEquipments().subscribe((data) => {
      this.staticEquipment = data;
      this.equipments = data;
      this.equipments.sort((a, b) => a.EquipmentType.name.localeCompare(b.EquipmentType.name));
      console.log(this.equipments);
    });
  }



  getImagebyEquipment(equipment: Equipment) {
    let imageURL = "../../assets/img/";
    switch (equipment.EquipmentType.name) {
      case "Mikrofon":
        imageURL += "Mikrofon.png"
        break;
      case "Fotokamera":
        imageURL += "Fotokamera.png"
        break;
      case "Videokamera":
        imageURL += "Videokamera.png"
        break;
      case "Stativ":
        imageURL += "Stativ.png"
        break;
      default:
        imageURL += "err.png"
        break;
    }

    return imageURL;
  }


}
