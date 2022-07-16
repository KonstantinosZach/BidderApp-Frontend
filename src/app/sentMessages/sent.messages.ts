import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BidderService} from "../bidder.service";
import {MessageService} from "../message.service";
import {Message} from "../message";

@Component( {
  selector: `app-sent-messages-page`,
  templateUrl: `./sent.messages.html`,
  styleUrls: [`./sent.messages.css`]
})

export class sentMessages implements  OnInit {
  username: String | undefined;
  messages: Message[] | undefined;
  map = new Map<bigint, string>();

  constructor(private sellerService: SellerService, private router: ActivatedRoute,
              private messageService: MessageService, private navRouter: Router, private bidderService: BidderService) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.getSentMessages();
  }

  deleteMessage(id:bigint){
    this.messageService.deleteSentMessage(id).subscribe(data => {
      this.getSentMessages();
    });
  }

  details(id:bigint){
    this.navRouter.navigate([`user-page`,this.username,`message-details`,id]);
  }

  getSentMessages(){
    this.messages = [];
    this.messageService.getAllSentMessages(this.username).subscribe(data =>{
      this.messages = data;
      data.forEach(element => {
        this.messageService.getReceiverByMessageId(element.id).subscribe(data =>{
          this.map.set(element.id, data.username);
        })
      })
    })
  }


}
