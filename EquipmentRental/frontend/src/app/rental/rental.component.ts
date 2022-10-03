import { Component, OnInit } from '@angular/core';
import { Equipment } from '../models/equipment';
import { EquipmentType, EquipmentTypes } from '../models/equipmentType';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {


  equipments!: Equipment[];
  equipmentTypes!: any;
  equipmentTypeNames!: any;
  staticEquipment!: Equipment[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAllEquipments().subscribe((data) => {
      this.staticEquipment = data;
      this.equipments = data;

      this.equipmentTypes = new Map();
      this.equipments.forEach((equipment) => {
        if (equipment.status != "available") return;
        this.equipmentTypes.set(
          equipment.name,
          (this.equipmentTypes.has(equipment.name)) ?
            this.equipmentTypes.get(equipment.name) + 1 : 1
        );
        // if (this.equipmentTypes.has(equipment.name)) {
        //   this.equipmentTypes.set(equipment.name, this.equipmentTypes.get(equipment.name) + 1);
        // } else {
        //   this.equipmentTypes.set(equipment.name, 1);
        // }
      });


      //get amount of equipment types (availabilities)
      this.equipmentTypeNames = new Set();
      this.equipments.forEach((equipment) => {
        this.equipmentTypeNames.add(equipment.name);
      });

      this.equipments.sort((a, b) => a.EquipmentType.name.localeCompare(b.EquipmentType.name));
    });
  }

  getImageByEquipment(et: String) {
    let imageURL = "../../assets/img/";
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
    return imageURL;
  }

}
