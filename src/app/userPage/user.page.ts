import { Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../seller.service";
import {BidderService} from "../bidder.service";
import {mergeMap, timer} from "rxjs";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {MessageService} from "../message.service";
import {colors} from "@angular/cli/utilities/color";

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
  timerId: any;

  constructor(private sellerService: SellerService, private router: ActivatedRoute, private messageService: MessageService,
              private navRouter: Router, private  bidderService: BidderService) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.isSeller();
    this.isBidder();
    this.getReceivedMessages();
    this.timerId = setInterval(() => this.getReceivedMessages(), 7200);
  }

  ngOnDestroy():void{
    clearInterval(this.timerId);
  }

  isSeller(){
    this.sellerService.getSellerByUsername(this.username).subscribe( result => {
      this.sellerValid = !!result;
    })
  }

  isBidder(){
    this.bidderService.getBidderByUsername(this.username).subscribe( result => {
      this.bidderValid = !!result;
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
    if(confirm("To become seller you need to re-login\nConfirm?")){
      this.sellerService.addSeller(this.username).subscribe( data =>{
        this.navRouter.navigate([`welcome-user`]);
      });
    }
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
