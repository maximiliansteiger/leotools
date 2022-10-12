import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
  
@Component({
  selector: 'app-equipment-nav',
  templateUrl: './equipment-nav.component.html',
  styleUrls: ['./equipment-nav.component.css']
})
export class EquipmentNavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  searched:String = '';

  ngOnInit(): void {
  }
  openFilter(){

}
}
