import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BidderService} from "../bidder.service";
import {Message} from "../message";
import {MessageService} from "../message.service";

@Component( {
  selector: `app-message-list-page`,
  templateUrl: `./message.list.html`,
  styleUrls: [`./message.list.css`]
})

export class messageList implements  OnInit {
  username: String | undefined;
  messages: Message[] | undefined;
  map = new Map<bigint, string>();
  search: String | undefined;

  constructor(private sellerService: SellerService, private router: ActivatedRoute,
              private messageService: MessageService, private navRouter: Router, private bidderService: BidderService) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.getReceivedMessages();
  }

  deleteMessage(id:bigint){
    this.messageService.deleteReceivedMessage(id).subscribe(data => {
      this.getReceivedMessages();
    });
  }

  details(id:bigint){
    this.navRouter.navigate([`user-page`,this.username,`message-details`,id]);
  }

  filter(){
    this.messages = [];
    this.messageService.getAllReceivedMessages(this.username).subscribe(data =>{
      data.forEach(element => {
        this.messageService.getSenderByMessageId(element.id).subscribe(data =>{
          if(data.username == this.search){
            this.messages?.push(element);
            this.map.set(element.id, data.username);
          }
        })
      })
    })
  }

  clear(){
    this.getReceivedMessages();
  }

  getReceivedMessages(){
    this.messages = [];
     this.messageService.getAllReceivedMessages(this.username).subscribe(data =>{
      this.messages = data;
      data.forEach(element => {
        this.messageService.getSenderByMessageId(element.id).subscribe(data =>{
          this.map.set(element.id, data.username);
        })
      })
    })
  }

}
