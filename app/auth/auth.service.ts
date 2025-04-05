import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/accounts';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password });
  }

  verifyEmail(email: string, token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-email`, { email, token });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, { email, password });
  }
}
