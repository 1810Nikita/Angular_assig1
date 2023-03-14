import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string ="http://localhost:3000/emp_list"
  constructor( private http: HttpClient) { }
  postRegistration(registerObj: User) {
    return this.http.post<User>(`${this.baseUrl}`, registerObj)
    }

  getRegisterdUser() {
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  updateRegisteredUser(registerObj: User,id: Number) {
    return this.http.put<User>(`${this.baseUrl}/${id}`, registerObj)
  }

  deleteRegisteredUser(id:Number) {
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }

  getRegisterdUserId(id:Number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }


}
