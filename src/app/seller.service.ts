import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import {Seller} from "./seller";
import {Items} from "./item";
import {User} from "./user";
import {Bids} from "./bid";

//same as manually in providers
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private apiServerUrl = 'https://localhost:8080';

  constructor(private http: HttpClient) {}

  public getSellerByUsername(username: String | undefined): Observable<Seller>{
    return this.http.get<Seller>(`${this.apiServerUrl}/seller/find/${username}`);
  }

  public addSeller(username: String | undefined): Observable<Seller> {
    return this.http.post<Seller>(`${this.apiServerUrl}/seller/add/${username}`, {});
  }

  public getSellerItems(username: String | undefined): Observable<Items[]> {
    return this.http.get<Items[]>(`${this.apiServerUrl}/item/find-seller-items/${username}`);
  }

  public convertCurrentDate(): string{
    let month: string;
    let day: string;
    let min: string;
    let hour: string;
    let start = new Date();

    if(start.getMonth().toString().length == 1)
      month = "0" + (start.getMonth() + 1);
    else
      month = (start.getMonth() + 1).toString();

    if(start.getDate().toString().length == 1)
      day = "0" + start.getDate();
    else
      day = start.getDate().toString();

    if(start.getMinutes().toString().length == 1)
      min = "0" + start.getMinutes();
    else
      min = start.getMinutes().toString();

    if(start.getHours().toString().length == 1)
      hour = "0" + start.getHours();
    else
      hour = start.getHours().toString();

    return start.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + min;
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

  public updateSellingItem(id: bigint | undefined, item: Items): Observable<Items> {
    return this.http.put<Items>(`${this.apiServerUrl}/item/update/selling-item/${id}`, item);
  }

  public getUserByItemId(id: bigint | undefined): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/item/find-seller-from-item/${id}`);
  }

  public getAllItemsBids(id: bigint | undefined): Observable<Bids[]> {
    return this.http.get<Bids[]>(`${this.apiServerUrl}/bid/find/item-bids/${id}`);
  }

}
