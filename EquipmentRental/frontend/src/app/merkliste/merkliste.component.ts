import { Component, OnInit } from '@angular/core';
import { Equipment } from '../models/equipment';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-merkliste',
  templateUrl: './merkliste.component.html',
  styleUrls: ['./merkliste.component.css']
})
export class MerklisteComponent implements OnInit {

  bookmarks: any;
  equipments: any[] = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getBookmarkByUserId(1).subscribe((data: any) => {
      this.bookmarks = data;
      console.log(this.bookmarks);
      for (let i = 0; i < this.bookmarks.length; i++) {
        this.http.getEquipmentById(+this.bookmarks[i].equipmentId).subscribe((data: any) => {
          this.equipments.push(data);
          console.log(data);

        });
      }
    });
  }

  delete() {
    alert("Delete works")
  }

  reserve() {
    alert("Merkliste wurde reserviert")
    document.body.getElementsByClassName("container")[0].innerHTML = ``
  }





}
