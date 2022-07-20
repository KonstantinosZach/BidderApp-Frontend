import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BidderService} from "../bidder.service";
import {MessageService} from "../message.service";
import {Message} from "../message";

@Component( {
  selector: `app-start-message-page`,
  templateUrl: `./start.message.html`,
  styleUrls: [`./start.message.css`]
})

export class startMessage implements  OnInit {
  sender: String | undefined;
  receiver: String | undefined;
  message: Message = {} as Message;
  response : string | undefined;
  theme : string | undefined;

  constructor(private sellerService: SellerService, private router: ActivatedRoute,
              private messageService: MessageService, private navRouter: Router, private bidderService: BidderService) {}

  ngOnInit():void {
    this.sender = this.router.snapshot.params['username'];
    this.receiver = this.router.snapshot.params['username2'];
  }

  sent(){
    if (this.response != null && this.theme != null) {
      this.message.body = this.response;
      this.message.theme = this.theme;
      this.message.date = this.sellerService.convertCurrentDate();
      this.messageService.addMessage(this.sender, this.receiver, this.message).subscribe(data =>{
        console.log(data);
      })
      this.navRouter.navigate([`user-page`,this.sender,`message-list`]);
    }
    else{
      alert("Wrong input")
    }
  }
}
