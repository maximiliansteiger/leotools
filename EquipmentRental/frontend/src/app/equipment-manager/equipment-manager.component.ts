import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

export interface EquipmentDTO {
  EquipmentType: any;
  name: string;
  notes: string;
  set: string;
}

@Component({
  selector: 'app-equipment-manager',
  templateUrl: './equipment-manager.component.html',
  styleUrls: ['./equipment-manager.component.css']
})
export class EquipmentManagerComponent implements OnInit {

  displayedColumns: string[] = ['equipmentType', 'name', 'notes', 'set', "button"];
  dataSource: EquipmentDTO[] = [];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAllEquipments().subscribe((data) => {
      console.log(data);

      this.dataSource = data;
    });
  }
}


