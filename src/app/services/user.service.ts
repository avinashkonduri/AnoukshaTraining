import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_USER = 'https://gorest.co.in/public/v1/';

let headers = new HttpHeaders()
.set('Authorization', 'Bearer ' +localStorage.getItem('bearerToken'))
.set('Content-Type', 'application/json')
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

  addApiUser(user: any){
    return this.http.post(API_USER + 'users', user, {headers});
  }

  updateApiUser(user: any){
    return this.http.put(API_USER + 'users/'+user.id, user, {headers});
  }

}
