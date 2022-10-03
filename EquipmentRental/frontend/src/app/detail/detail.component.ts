import { Component, OnInit } from '@angular/core';
import { RentalComponent } from '../rental/rental.component';
import { DetailService } from '../services/detail.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private details: DetailService,private http:HttpService) { }
  equipmentType = this.details.equipmentType;

  equipmentTypesMap!:any;
  equipments!:any;

  ngOnInit(): void {
    this.http.getAllEquipments().subscribe((data) => {

      this.equipments = data;

      this.equipmentTypesMap = new Map();

      this.equipments.forEach((equipment:any) => {
        // console.log(equipment);
        if (equipment.status != 'available') return;
        this.equipmentTypesMap.set(
          equipment.name,
          this.equipmentTypesMap.has(equipment.name)
            ? this.equipmentTypesMap.get(equipment.name) + 1
            : 1
        );
      });
    })
    
  }
  
  getAvailable(name:any){
    return this.equipmentTypesMap.get(name);
  }


  getImageByEquipment(et: String) {
    let imageURL = "../../assets/img/";
    switch (et) {
      case "Zoom H2n":
        imageURL += "zoom.png"
        break;
      case "Canon Eos 850D":
        imageURL += "Canon_Eos_850D.png"
        break;
      case "Sony 6100":
        imageURL += "Sony_6100.png"
        break;
      case "hama star 75":
        imageURL += "hama_star_75.png"
        break;
      default:
        imageURL += "err.png"
        break;
    }
    return imageURL;
  }



}
