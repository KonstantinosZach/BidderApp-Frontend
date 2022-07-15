import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BidderService} from "../bidder.service";
import {Message} from "../message";
import {MessageService} from "../message.service";
import {User} from "../user";


@Component( {
  selector: `app-message-details-page`,
  templateUrl: `./message.details.html`,
  styleUrls: [`./message.details.css`]
})

export class MessageDetails implements  OnInit {
  username: String | undefined;
  id!: bigint;
  message: Message| undefined;
  newMessage: Message = {} as Message;
  sender: User = {} as User;
  response : string | undefined;
  theme : string | undefined;

  constructor(private sellerService: SellerService, private router: ActivatedRoute,
              private messageService: MessageService, private navRouter: Router, private bidderService: BidderService) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.id = this.router.snapshot.params['id'];

    this.messageService.getSenderByMessageId(this.id).subscribe(data =>{
      this.sender = data;
    })

    this.messageService.getMessageById(this.id).subscribe(data => {
      this.message = data;
    })

    this.messageService.messageIsRead(this.id).subscribe();
  }

  sent(){
    if (this.response != null && this.theme != null) {
      this.newMessage.body = this.response;
      this.newMessage.theme = this.theme;
      this.newMessage.date = this.sellerService.convertCurrentDate();
      this.messageService.addMessage(this.username, this.sender.username, this.newMessage).subscribe(data =>{
        console.log(data);
      })
      this.navRouter.navigate([`user-page`,this.username,`message-list`]);
    }
    else{
      alert("Wrong input")
    }
  }

}
