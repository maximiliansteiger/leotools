import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

    selectedFiles!: FileList;
    progressInfos!: any;
    message = '';

    fileInfos!: Observable<any>;
    uploadService: any;

    constructor(private http: HttpService) { }

    ngOnInit() {
        // this.fileInfos = this.http.getFiles();
    }

    selectFiles(event: any) {
        this.progressInfos = [];
        this.selectedFiles = event.target.files;
    }

    uploadFiles() {
        this.message = '';
        for (let i = 0; i < this.selectedFiles.length; i++) {
            this.upload(i, this.selectedFiles[i]);
        }
    }
    upload(idx: any, file: any) {
        this.progressInfos[idx] = { value: 0, fileName: file.name };
        this.http.uploadEquipments(file).subscribe();
    }
}
