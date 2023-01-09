import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseUrl: String = 'http://localhost:3000';


  // ---- USER ----


  public getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl + "/users/getAll");
  }
  public getUserById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/users/get/" + id);
  }
  public createUser(user: User): Observable<any> {
    return this.http.post(this.baseUrl + "/users/create", user);
  }
  public updateUser(user: User): Observable<any> {
    return this.http.put(this.baseUrl + "/users/update/" + user.id, user);
  }
  public deleteUser(user: User): Observable<any> {
    return this.http.delete(this.baseUrl + "/users/delete/" + user.id);
  }
  public loginUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl + "/users/login", user);
  }

  // ---- EQUIPMENT ----

  public getAllEquipments(): Observable<any> {
    return this.http.get(this.baseUrl + "/equipments/getAll");
  }
  public getEquipmentById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/equipments/get/" + id);
  }
  public getEquipmentByName(name: any): Observable<any> {
    return this.http.get(this.baseUrl + "/equipments/getByName/" + name);
  }
  public createEquipment(equipment: any): Observable<any> {
    return this.http.post(this.baseUrl + "/equipments/create", equipment);
  }
  public updateEquipment(equipment: any): Observable<any> {
    return this.http.put(this.baseUrl + "/equipments/update/" + equipment.id, equipment);
  }
  public deleteEquipment(equipment: any): Observable<any> {
    return this.http.delete(this.baseUrl + "/equipments/delete/" + equipment.id);
  }
  public uploadEquipments(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/equipments/upload`, formData);
    return this.http.request(req);
  }

  public getEquipmentByType(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/equipments/getByTypeId/" + id);
  }


  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/equipments/getUploadedFiles`);
  }

  downloadCsv(): Observable<any> {
    return this.http.get(`${this.baseUrl}/equipments/download`, { responseType: 'blob' });
  }


  // ---- EQUIPMENT TYPE ----

  public getAllEquipmentTypes(): Observable<any> {
    return this.http.get(this.baseUrl + "/equipmentTypes/getAll");
  }
  public getEquipmentTypeById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/equipmentTypes/" + id);
  }
  public createEquipmentType(equipmentType: any): Observable<any> {
    return this.http.post(this.baseUrl + "/equipmentTypes/create", equipmentType);
  }
  public updateEquipmentType(equipmentType: any): Observable<any> {
    return this.http.put(this.baseUrl + "/equipmentTypes/update/" + equipmentType.id, equipmentType);
  }
  public deleteEquipmentType(equipmentType: any): Observable<any> {
    return this.http.delete(this.baseUrl + "/equipmentTypes/delete/" + equipmentType.id);
  }

  // ---- ROLE ----

  public getAllRoles(): Observable<any> {
    return this.http.get(this.baseUrl + "/roles/getAll");
  }
  public getRoleById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/roles/get/" + id);
  }
  public createRole(role: any): Observable<any> {
    return this.http.post(this.baseUrl + "/roles/create", role);
  }
  public updateRole(role: any): Observable<any> {
    return this.http.put(this.baseUrl + "/roles/update/" + role.id, role);
  }
  public deleteRole(role: any): Observable<any> {
    return this.http.delete(this.baseUrl + "/roles/delete/" + role.id);
  }

  // ---- STATUS ----

  public getAllStatuses(): Observable<any> {
    return this.http.get(this.baseUrl + "/status/getAll");
  }
  public getStatusById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/status/get/" + id);
  }
  public createStatus(status: any): Observable<any> {
    return this.http.post(this.baseUrl + "/status/create", status);
  }
  public updateStatus(status: any): Observable<any> {
    return this.http.put(this.baseUrl + "/status/update/" + status.id, status);
  }
  public deleteStatus(status: any): Observable<any> {
    return this.http.delete(this.baseUrl + "/status/delete/" + status.id);
  }

  // ---- RESERVATION ----

  public getAllReservations(): Observable<any> {
    return this.http.get(this.baseUrl + "/reservations/getAll");
  }
  public getReservationById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/reservations/get/" + id);
  }
  public createReservation(createReservationDto: any): Observable<any> {
    return this.http.post(this.baseUrl + "/reservations", createReservationDto);
  }
  public updateReservation(reservation: any): Observable<any> {
    return this.http.put(this.baseUrl + "/reservations/update/" + reservation.id, reservation);
  }
  public deleteReservation(reservation: any): Observable<any> {
    return this.http.delete(this.baseUrl + "/reservations/delete/" + reservation.id);
  }

  // ---- BOOKMARKS ----

  public getAllBookmarks(): Observable<any> {
    return this.http.get(this.baseUrl + "/bookmarks/getAll");
  }
  public getBookmarkById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/bookmarks/get/" + id);
  }
  public createBookmark(bookmark: any): Observable<any> {
    return this.http.post(this.baseUrl + "/bookmarks/create", bookmark);
  }
  public updateBookmark(bookmark: any): Observable<any> {
    return this.http.put(this.baseUrl + "/bookmarks/update/" + bookmark.id, bookmark);
  }
  public deleteBookmark(bookmark: any): Observable<any> {
    return this.http.delete(this.baseUrl + "/bookmarks/delete/" + bookmark.id);
  }
  public getBookmarkByUserId(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/bookmarks/getByUserId/" + id);
  }

}