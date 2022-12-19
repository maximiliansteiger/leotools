import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }


  download() {
    //get the equipments from the backend equiptments/getAll and download them as a csv file
    this.http.getAllEquipments().subscribe((data: any) => {
      let csvData = this.ConvertToCSV(data, ['id', 'set', 'name', 'equipmentTypeId', 'status', 'serialNumber', 'notes', 'anlagenummer']);
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      let blob = new Blob([csvData], { type: "octet/stream" }),
        url = window.URL.createObjectURL(blob);
      a.href, url;
      a.download = "equipments.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
