import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseUrl: String = 'http://localhost:3000';



  //?get/post/put/delete


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
  public createEquipment(equipment: any): Observable<any> {
    return this.http.post(this.baseUrl + "/equipments/create", equipment);
  }
  public updateEquipment(equipment: any): Observable<any> {
    return this.http.put(this.baseUrl + "/equipments/update/" + equipment.id, equipment);
  }
  public deleteEquipment(equipment: any): Observable<any> {
    return this.http.delete(this.baseUrl + "/equipments/delete/" + equipment.id);
  }

  // ---- EQUIPMENT TYPE ----

  public getAllEquipmentTypes(): Observable<any> {
    return this.http.get(this.baseUrl + "/equipmentTypes/getAll");
  }
  public getEquipmentTypeById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/equipmentTypes/get/" + id);
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
    return this.http.get(this.baseUrl + "/states/getAll");
  }
  public getStatusById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/states/get/" + id);
  }
  public createStatus(status: any): Observable<any> {
    return this.http.post(this.baseUrl + "/states/create", status);
  }
  public updateStatus(status: any): Observable<any> {
    return this.http.put(this.baseUrl + "/states/update/" + status.id, status);
  }
  public deleteStatus(status: any): Observable<any> {
    return this.http.delete(this.baseUrl + "/states/delete/" + status.id);
  }

  // ---- RESERVATION ----

  public getAllReservations(): Observable<any> {
    return this.http.get(this.baseUrl + "/reservations/getAll");
  }
  public getReservationById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/reservations/get/" + id);
  }
  public createReservation(reservation: any): Observable<any> {
    return this.http.post(this.baseUrl + "/reservations/create", reservation);
  }
  public updateReservation(reservation: any): Observable<any> {
    return this.http.put(this.baseUrl + "/reservations/update/" + reservation.id, reservation);
  }
  public deleteReservation(reservation: any): Observable<any> {
    return this.http.delete(this.baseUrl + "/reservations/delete/" + reservation.id);
  }



}
