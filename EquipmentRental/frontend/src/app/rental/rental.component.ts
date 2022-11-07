import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment } from '../models/equipment';
import { EquipmentType } from '../models/equipmentType';
import { DetailService } from '../services/detail.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  equipments!: Equipment[];
  equipmentTypesMap!: Map<String, number>;
  equipmentNamesMap!: Map<String, number>;
  equipmentNamesArray!: String[];
  equipmentTypes!: EquipmentType[];

  constructor(
    private http: HttpService,
    private router: Router,
    private details: DetailService
  ) { }

  ngOnInit(): void {

    this.equipmentTypesMap = new Map<String, number>();
    this.equipmentNamesMap = new Map<String, number>();
    this.equipmentNamesArray = [];

    this.http.getAllEquipmentTypes().subscribe((data) => {
      this.equipmentTypes = data;
      console.log(this.equipmentTypes);

    });

    this.http.getAllEquipments().subscribe((data) => {
      this.equipments = data;
      console.log(this.equipments);

      this.setEquipmentNamesMap();

      this.equipments.sort((a, b) =>
        a.EquipmentType.name.localeCompare(b.EquipmentType.name)
      );
    });
  }

 


  getImageByEquipment(et: String) {
    let imageURL = '../../assets/img/';
    let imageURL2 = '../../assets/img/video.png';
    switch (et) {
      case 'Zoom H2n':
        imageURL += 'zoom.png';
        break;
      case 'Canon Eos 850D':
        imageURL += 'Canon_Eos_850D.png';
        break;
      case 'Sony 6100':
        imageURL += 'Sony_6100.png';
        break;
      case 'hama star 75':
        imageURL += 'hama_star_75.png';
        break;
      default:
        imageURL += 'err.png';
        break;
    }
    return imageURL2;
  }

  redirectDetail(equipmentName: any) {
    let eqtype = this.getEquipmentByName(equipmentName);
    if (eqtype != null) {
      this.details.setEquipment(eqtype);
      this.router.navigate(['/detail']);
    }
  }

  getEquipmentByName(equipmentName: any) {
    let eqtype: Equipment | undefined;
    this.equipments.forEach((equipment) => {
      if (equipment.name == equipmentName) {
        eqtype = equipment;
        
      }
    });
    return eqtype;
  }

  setEquipmentNamesMap() {
    this.equipments.forEach((equipment) => {
      if (equipment.status == "Available") {
        let num = this.equipmentNamesMap?.get(equipment.name);
        if (num) {
          this.equipmentNamesMap.set(equipment.name, num + 1);
        } else {
          this.equipmentNamesArray.push(equipment.name);
          this.equipmentNamesMap.set(equipment.name, 1);
        }
      }
    });
    console.log(this.equipmentNamesMap);
  }


}
