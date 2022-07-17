import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import {Seller} from "./seller";
import {Bidder} from "./bidder";
import {HttpClient} from "@angular/common/http";
import {Items} from "./item";
import {Bids} from "./bid";
import {User} from "./user";

//same as manually in providers
@Injectable({
  providedIn: 'root'
})
export class BidderService {
  private apiServerUrl = 'https://localhost:8080';

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

  public addBid(username: String | undefined, id: bigint, bid: Bids): Observable<Bids> {
    return this.http.post<Bids>(`${this.apiServerUrl}/bid/add/${username}/${id}`, bid);
  }

  public getUserByBidId(id: bigint): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/bid/find-user/${id}`);
  }

  public getBiddingItems(username: String | undefined): Observable<Items[]> {
    return this.http.get<Items[]>(`${this.apiServerUrl}/bidder/find-items/${username}`);
  }
}
