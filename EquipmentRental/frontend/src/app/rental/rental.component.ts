import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment } from '../models/equipment';
import { EquipmentType } from '../models/equipmentType';
import { DetailService } from '../services/detail.service';
import { HttpService } from '../services/http.service';
import { Form, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  equipments!: Equipment[];
  equipmentTypesMap!: Map<String, number>;
  equipmentNamesMap!: Map<String, number>;
  equipmentNamesArray!: String[];
  equipmentTypes!: EquipmentType[];
  bookmarks!: Equipment[];


  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  type = new FormControl('');
  brand = new FormControl('');
  brandFilter = ["Canon", "Nikon", "Zoom"];

  constructor(
    private http: HttpService,
    private router: Router,
    private details: DetailService
  ) { }

  ngOnInit(): void {

    this.http.getAllStatuses().subscribe((data) => {
      console.log(data);
    });

    this.equipmentTypesMap = new Map<String, number>();
    this.equipmentNamesMap = new Map<String, number>();
    this.equipmentNamesArray = [];

    this.http.getAllEquipmentTypes().subscribe((data) => {
      this.equipmentTypes = data;
      // console.log(this.equipmentTypes);
    });

    this.http.getAllEquipments().subscribe((data) => {
      this.equipments = data;
      console.log(this.equipments);

      this.refreshFilter();
    });

    this.http.getAllBookmarks().subscribe((data) => {
      this.bookmarks = data;
      console.log(data);
    });
  }

  getImageByEquipment(equipmentType: String) {
    let imageURL = '../../assets/img/';
    let imageURL2 = '../../assets/img/Sony_6100.png';
    switch (equipmentType) {
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
    return imageURL2;
  }

  redirectDetail(equipmentName: any) {
    let equipment = this.getEquipmentByName(equipmentName);
    if (equipment != null) {
      this.router.navigate(['detail'], { state: { equipment } })
    }
  }


  editBookmark(equipmentName: any) {
    let eqtype = this.getEquipmentByName(equipmentName);
    if (eqtype != null) {
      this.http.getAllEquipments
      let bookmark = {
        equipmentId: eqtype.id,
        userId: 1,
      }
      this.http.getAllUsers().subscribe((data) => {
        console.log(data);
      });

      this.http.createBookmark(bookmark).subscribe((data) => {
        console.log(data);
        this.http.getAllBookmarks().subscribe((data) => {
          this.bookmarks = data;
          console.log(data);
        });
      });
    }
  }

  getEquipmentByName(equipmentName: any) {
    let eqtype: Equipment | undefined;
    this.equipments.forEach((equipment) => {
      if (equipment.name == equipmentName) {
        eqtype = equipment;
      }
    });
    return eqtype;
  }

  setEquipmentNamesMap(equipment1: Equipment[]) {
    this.equipmentNamesMap = new Map<String, number>();

    if (equipment1.length != 0) {
      this.equipmentNamesArray = [];
    }
    equipment1.forEach((equipment) => {
      if (equipment.status == "Available") {
        let num = this.equipmentNamesMap?.get(equipment.name);
        if (num) {
          this.equipmentNamesMap.set(equipment.name, num + 1);
          this.equipmentNamesArray.push(equipment.name);
        } else {
          //  this.equipmentNamesArray.push(equipment.name);
          this.equipmentNamesMap.set(equipment.name, 1);
        }
      }
    });
    //make array unique
    this.equipmentNamesArray = Array.from(new Set(this.equipmentNamesArray));
    // console.log(this.equipmentNamesArray);

  }

  refreshFilter() {
    console.log("oho");
    let equipmentFiltered = this.filterEquipment();
    console.log(equipmentFiltered);
    this.setEquipmentNamesMap(equipmentFiltered);

  }

  filterEquipment() {
    let equipmentFiltered: Equipment[] = [];
    let typeFiltered: Equipment[] = [];
    let brandFiltered: Equipment[] = [];
    let dateFiltered: Equipment[] = [];
    if (this.type.value?.[0] == undefined) {
      equipmentFiltered = this.equipments;
    }
    // TYPE FILTER
    if (this.type.value?.[0] != undefined) {
      this.equipments?.forEach(e => {
        for (let i = 0; i < this.equipmentTypes.length; i++) {
          if (this.type.value?.[i] != undefined) {
            if (e.EquipmentType.name == this.type.value?.[i]) {
              typeFiltered.push(e);
            }
          }
        }
      });
    }
    // BRAND FILTER
    /*
  if (this.brand.value?.[0] != undefined) {
    this.equipments?.forEach(e => {
      for (let i = 0; i < 4; i++) {
        if (this.brand.value?.[i] != undefined) {
          if (e.EquipmentType.brand == this.type.value?.[i]) {
            brandFiltered.push(e);
          }}}
    });}
    */
    // DATE FILTER
    /*
    if (this.range.get('start')?.value != undefined && this.range.get('end')?.value) {
     this.equipments?.forEach(e => {
       for (let i = 0; i < 2; i++) {
           if (e.EquipmentType.name == this.type.value?.[i]) {
             dateFiltered.push(e);
           }}
     });}*/
    console.log(this.equipmentTypes[0]);
    console.log(this.equipments[0])


    if (typeFiltered.length !== 0) {
      return typeFiltered
    } else {
      return equipmentFiltered;
    }

  }

}

