import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_USER = 'https://gorest.co.in/public/v1/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsersList() {
    return this.http.get(API_USER + 'users');
  }

  getUserById(id: number){
    return this.http.get(API_USER + 'users/'+id);
  }
}
