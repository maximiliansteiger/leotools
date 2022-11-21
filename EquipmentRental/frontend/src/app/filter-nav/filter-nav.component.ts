import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Equipment } from '../models/equipment';
import { HttpService } from '../services/http.service';

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
  type?: any;
  brand?: any;
  typeFilter = ["Video", "Fotografie", "Audio"];
  brandFilter= ["Canon", "Nikon", "Zoom"];
  equipments?: Equipment[];


  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAllEquipments().subscribe((data) => {
      this.equipments = data;
    })
  }

  refreshFilter(){
    console.log(this.type + " "+ this.brand);
    let equipmentFiltered = this.filterEquipment();
  }

  filterEquipment(){
    let equipmentFiltered!: Equipment[];
    if(this.brand != undefined){}
    this.equipments?.forEach(e => {
      if(e.EquipmentType = this.type){
        equipmentFiltered.push(e);
      }
    }
    );
    return equipmentFiltered;
    
  }

}
