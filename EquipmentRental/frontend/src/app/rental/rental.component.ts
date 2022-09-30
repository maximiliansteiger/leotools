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
        if (this.equipmentTypes.has(equipment.name)) {
          this.equipmentTypes.set(equipment.name, this.equipmentTypes.get(equipment.name) + 1);
        } else {
          this.equipmentTypes.set(equipment.name, 1);
        }
      });
      console.log(this.equipmentTypes);
      
      this.equipmentTypeNames = Array.from(this.equipmentTypes.keys());
      // console.log(this.equipmentTypeNames);

      this.equipments.sort((a, b) => a.EquipmentType.name.localeCompare(b.EquipmentType.name));
      // console.log(this.equipments);
    });
  }

  getImageByEquipment(et: String) {
    let imageURL = "../../assets/img/";
    // console.log(et);
    // console.log("hallo");
    
    
    switch (et) {
      case "Zoom H2n":
        imageURL += "zoom.png"
        break;
      case "Canon Eos 850D":
        imageURL += "Canon_Eos_850D.png"
        break;
      case "Sony 6100":
        imageURL += "Sony_6100.jpg"
        break;
      default:
        imageURL += "err.png"
        break;
    }
    return imageURL;
  }


}
