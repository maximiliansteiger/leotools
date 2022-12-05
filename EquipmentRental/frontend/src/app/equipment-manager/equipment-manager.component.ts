import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-equipment-manager',
  templateUrl: './equipment-manager.component.html',
  styleUrls: ['./equipment-manager.component.css']
})
export class EquipmentManagerComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {

    this.http.getAllEquipments().subscribe((data) => {
      console.log(data);
    });
  }

}
