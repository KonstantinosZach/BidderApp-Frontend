import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";
import { environment } from "../environments/environment";

//same as manually in providers
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  }

  public updateUser(username: String | undefined, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/user/update/${username}`, user);
  }

  public deleteUser(username: String): Observable<void> {
     return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${username}`);
  }

  public getUserByUsername(username: String | undefined): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/user/find/${username}`);
  }

  public acceptUser(username: String | undefined): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/user/accept/${username}`,username);
  }
}
