import { Component, OnInit } from '@angular/core';
import { Equipment } from '../models/equipment';
import { RentalComponent } from '../rental/rental.component';
import { DetailService } from '../services/detail.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private details: DetailService, private http: HttpService) { }
  
  activeEquipment!: Equipment
  equipments!: Equipment[];
  availableEquipment!:number;
  startDate!: Date;
  endDate!: Date;

  ngOnInit(): void {
    this.activeEquipment = this.details.equipment;
    this.availableEquipment = 0;

    this.http.getAllEquipments().subscribe((data) => {
      this.equipments = data;
      console.log(this.equipments);
      this.getAvailable(this.activeEquipment.name);
    });
    
  }

  getAvailable(name: any) {
    this.equipments.forEach((equipment) =>{
      if(equipment.name == name && equipment.status == "Available"){
        this.availableEquipment++
      }
    })
    return this.availableEquipment;
  }

  rent(){

    // let amount = 
    // let startDate =
    // let endDate =
console.log(this.startDate);
console.log(this.endDate);

    // this.http.createReservation()
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
