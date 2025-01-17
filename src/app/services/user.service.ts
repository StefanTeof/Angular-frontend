import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private apiUrl = 'http://localhost:4200/api/users/register'; // Replace with your API URL
  
    constructor(private http: HttpClient) { }
  
    register(user: { username: string, email: string, password: string }): Observable<any> {
      return this.http.post(`${this.apiUrl}/register`, user);
    }

    login(user: { email: string, password: string }): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, user);
    }
  }