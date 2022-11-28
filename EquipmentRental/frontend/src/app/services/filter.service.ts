import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  allEquipments: Equipment[] = [];
  constructor() { }

  setAllEquipmentsFiltered(equipments: Equipment[]){
    this.allEquipments = equipments;
  }

  getAllEquipmentsFiltered(){
    return this.allEquipments;
  }
}
