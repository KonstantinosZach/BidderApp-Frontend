import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import {Seller} from "./seller";
import {Bidder} from "./bidder";
import {HttpClient} from "@angular/common/http";
import {Items} from "./item";

//same as manually in providers
@Injectable({
  providedIn: 'root'
})
export class BidderService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public addBidder(username: String | undefined, bidder: Bidder): Observable<Bidder> {
    return this.http.post<Bidder>(`${this.apiServerUrl}/bidder/add/${username}`, bidder);
  }

  public getBidderByUsername(username: String | undefined): Observable<Bidder>{
    return this.http.get<Bidder>(`${this.apiServerUrl}/bidder/find/${username}`);
  }

  public getBidderItems(username: String | undefined): Observable<Items[]> {
    return this.http.get<Items[]>(`${this.apiServerUrl}/item/find-bidder-items/${username}`);
  }

}
