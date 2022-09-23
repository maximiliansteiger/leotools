import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseUrl: String = 'https://localhost:3000';



  //?get/post/put/delete

  public registerUser(user: User): Observable<any> {
    return this.http.post(this.baseUrl + "/users/register", user);
  }
  public loginUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl + "/users/login", user);
  }

}
