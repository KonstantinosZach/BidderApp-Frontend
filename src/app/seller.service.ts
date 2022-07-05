import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import {Seller} from "./seller";

//same as manually in providers
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getSellerByUsername(username: String | undefined): Observable<Seller>{
    return this.http.get<Seller>(`${this.apiServerUrl}/seller/find/${username}`);
  }
}
