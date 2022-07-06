import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import {Seller} from "./seller";
import {Items} from "./item";
import {User} from "./user";

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

  public addSeller(username: String | undefined): Observable<Seller> {
    return this.http.post<Seller>(`${this.apiServerUrl}/seller/add/${username}`, {});
  }

  public getSellerItems(username: String | undefined): Observable<Items[]> {
    return this.http.get<Items[]>(`${this.apiServerUrl}/item/find/${username}`);
  }

  public addItem(username: String | undefined, item: Items): Observable<Items> {
    return this.http.post<Items>(`${this.apiServerUrl}/item/add/${username}`, item);
  }

  public deleteItem(id: bigint): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/item/delete/${id}`);
  }

  public getItemById(id: bigint | undefined): Observable<Items>{
    return this.http.get<Items>(`${this.apiServerUrl}/item/find-id/${id}`);
  }

  public updateItem(id: bigint | undefined, item: Items): Observable<Items> {
    return this.http.put<Items>(`${this.apiServerUrl}/item/update/${id}`, item);
  }
}
