import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = '';
  constructor(private http:HttpClient) { }
  get isLoggedIn() { return this.token !== ''; }
  login() : Observable<string>{
    return this.http.post<string>('https://fakestoreapi.com/auth/login',{
      username:'david_r',
      password : '3478*#54'
    }).pipe(tap(token=>this.token = token));    
  }
  logout() {
    this.token = '';
    }
}
