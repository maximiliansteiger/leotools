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
  equipmentTypesMap!: any;
  equipmentTypeNames!: any;
  staticEquipment!: Equipment[];
  equipmentTypes!: EquipmentType[];

  constructor(
    private http: HttpService,
    private router: Router,
    private details: DetailService
  ) {}

  ngOnInit(): void {
    this.http.getAllEquipmentTypes().subscribe((data) => {
      this.equipmentTypes = data;
    });

    this.http.getAllEquipments().subscribe((data) => {
      this.staticEquipment = data;
      this.equipments = data;

      this.equipmentTypesMap = new Map();
      this.equipments.forEach((equipment) => {
        if (equipment.status != 'available') return;
        this.equipmentTypesMap.set(
          equipment.name,
          this.equipmentTypesMap.has(equipment.name)
            ? this.equipmentTypesMap.get(equipment.name) + 1
            : 1
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

      this.equipments.sort((a, b) =>
        a.EquipmentType.name.localeCompare(b.EquipmentType.name)
      );
    });
  }

  getImageByEquipment(et: String) {
    let imageURL = '../../assets/img/';
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
    return imageURL;
  }

  redirectDetail(equipmentTypeName: any) {
    let type = this.getTypeByName(equipmentTypeName);

    console.log(type);

    if (type != null) {
      this.details.setEquipmentType(type);
      this.router.navigate(['/detail']);
    }
  }

  getTypeByName(name: string) {
    let equipmentTypeData!: any;
    for (const data of this.equipmentTypes) {
      if (data.name == name) {
        equipmentTypeData = data;
        break;
      }
    }

    return equipmentTypeData;
  }
}
