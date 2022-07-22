import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AuthRequest} from "./auth.request";
import {AuthResponse} from "./auth.response";

//same as manually in providers
@Injectable({
  providedIn: 'root'
})

export class authService {
  private apiServerUrl = 'https://localhost:8080';
  private readonly TOKEN_NAME = 'accessToken';
  private readonly USER_NAME = 'username';
  roles: string = "";
  constructor(private http: HttpClient) {}


  getUserName(){
    return localStorage.getItem(this.USER_NAME);
  }

  getToken(){
    return localStorage.getItem(this.TOKEN_NAME);
  }

  deleteToken(){
    if(this.getToken())
      localStorage.removeItem(this.TOKEN_NAME);
  }

  deleteUserName(){
    if(this.getUserName())
      localStorage.removeItem(this.USER_NAME);
  }

  public authUser(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiServerUrl}/auth/login`, authRequest).pipe(
      tap(response => {
        localStorage.setItem(this.TOKEN_NAME, response.accessToken);
        localStorage.setItem(this.USER_NAME, authRequest.username);
      })
    )
  }

  public getRoles():string{
    let token = this.getToken();
    if(token != null)
      this.roles = JSON.parse((atob(token.split('.')[1]))).roles;
    return this.roles;
  }
}
