import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Items} from "./item";

//same as manually in providers
@Injectable({
  providedIn: 'root'
})
export class adminService {
  private apiServerUrl = 'https://localhost:8080';

  constructor(private http: HttpClient) {}

  public getItems(): Observable<Items[]> {
    return this.http.get<Items[]>(`${this.apiServerUrl}/item/find/`);
  }
}
