import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import {Observable} from "rxjs";
import {Message} from "./message";
import {User} from "./user";
import {Bidder} from "./bidder";

//same as manually in providers
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public addMessage(sender: String | undefined, receiver: String | undefined, message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.apiServerUrl}/message/add/${sender}/${receiver}`, message);
  }

  public getAllReceivedMessages(username: String | undefined): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServerUrl}/message/find-received/${username}`);
  }

  public getSenderByMessageId(id: bigint): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/message/find-sender/${id}`);
  }

  public getMessageById(id: bigint): Observable<Message> {
    return this.http.get<Message>(`${this.apiServerUrl}/message/find-message/${id}`);
  }

  public deleteReceivedMessage(id: bigint): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/message/delete-received/${id}`);
  }

  public messageIsRead(id: bigint): Observable<void> {
    return this.http.put<void>(`${this.apiServerUrl}/message/read-message/${id}`,null);
  }
}
