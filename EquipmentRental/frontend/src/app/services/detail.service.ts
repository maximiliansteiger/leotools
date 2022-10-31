import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment';
import { EquipmentType } from '../models/equipmentType';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private http: HttpService) {}
  equipment!: Equipment;

  setEquipment(equipment:Equipment){
    this.equipment = equipment;
    console.log(equipment);
  }

  

}
