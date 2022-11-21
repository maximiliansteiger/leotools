import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Equipment } from '../models/equipment';
import { HttpService } from '../services/http.service';
import { EquipmentType } from '../models/equipmentType';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter-nav',
  templateUrl: './filter-nav.component.html',
  styleUrls: ['./filter-nav.component.css']
})
export class FilterNavComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  type = new FormControl('');
  brand= new FormControl('');
  equipmentTypes!: EquipmentType[];
  brandFilter = ["Canon", "Nikon", "Zoom"];
  equipments?: Equipment[];
  

  constructor(private http: HttpService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.http.getAllEquipments().subscribe((data) => {
      this.equipments = data;
    })
    this.http.getAllEquipmentTypes().subscribe((data) => {
      this.equipmentTypes = data;
    })
    
  
  }

  refreshFilter(){
    let equipmentFiltered = this.filterEquipment();
    this.filterService.setAllEquipmentsFiltered(equipmentFiltered);
  }

  filterEquipment(){ 
    let equipmentFiltered: Equipment[] = [];
     if(this.type.value?.[0] != undefined){
      this.equipments?.forEach(e => {
        for(let i = 0; i < 4; i++){
          if(this.type.value?.[i] != undefined){
          //console.log(this.type.value?.[i]);
         if(e.EquipmentType.name == this.type.value?.[i]){
          console.log("s");
           equipmentFiltered.push(e);
         }}}});
     }
     return equipmentFiltered; 
  }

}
