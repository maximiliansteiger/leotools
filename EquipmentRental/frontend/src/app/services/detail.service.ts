import { Injectable } from '@angular/core';
import { EquipmentType } from '../models/equipmentType';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private http: HttpService) {}
  equipmentType!: EquipmentType;

  setEquipmentType(equipmentType: any) {
    this.equipmentType = equipmentType;
  }

  getAllEquipmentTypes():any {
    let allTypes!: EquipmentType[];
    this.http.getAllEquipmentTypes().subscribe((data) => {
      allTypes = data;
    });
    return allTypes;
  }
}
