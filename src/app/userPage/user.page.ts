import { Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../seller.service";
import {BidderService} from "../bidder.service";
import {mergeMap, timer} from "rxjs";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {MessageService} from "../message.service";

@Component( {
  selector: `user-page`,
  templateUrl: `./user.page.html`,
  styleUrls: [`./user.page.css`]
})

export class userPage implements  OnInit {
  username: String | undefined;
  sellerValid = false;
  bidderValid = false;
  newMessages = false;

  constructor(private sellerService: SellerService, private router: ActivatedRoute, private messageService: MessageService,
              private navRouter: Router, private  bidderService: BidderService) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.isSeller();
    this.isBidder();
    this.getReceivedMessages();
  }

  isSeller(){
    this.sellerService.getSellerByUsername(this.username).subscribe( result => {
      if (result) {
        console.log(result);
        this.sellerValid = true;
      } else {
        this.sellerValid = false;
      }
    })
  }

  isBidder(){
    this.bidderService.getBidderByUsername(this.username).subscribe( result => {
      if (result) {
        console.log(result);
        this.bidderValid = true;
      } else {
        this.bidderValid = false;
      }
    })
  }


  goSell(){
    this.navRouter.navigate([`user-page`,this.username,`selling-page`]);
  }

  goBid(){
    this.navRouter.navigate([`user-page`,this.username,`bidding-page`]);
  }

  goAsGuest(){
    this.navRouter.navigate([`user-page`,this.username,`bidding-page`]);
  }

  createSeller(){
    this.sellerService.addSeller(this.username).subscribe( data =>{
      console.log(data);
      this.navRouter.navigate([`user-page`,this.username,`selling-page`]);
    });
  }

  createBidder(){
    this.navRouter.navigate([`user-page`,this.username,`create-bidder`]);
  }

  getReceivedMessages(){
      this.messageService.getAllReceivedMessages(this.username).subscribe(data =>{
        this.newMessages = false;
        data.forEach(element => {
          if(!element.read)
            this.newMessages = true;
        })
    })
  }
}
