import { Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../seller.service";
import {BidderService} from "../bidder.service";

@Component( {
  selector: `user-page`,
  templateUrl: `./user.page.html`,
  styleUrls: [`./user.page.css`]
})

export class userPage implements  OnInit {
  username: String | undefined;
  sellerValid = false;
  bidderValid = false;

  constructor(private sellerService: SellerService, private router: ActivatedRoute,
              private navRouter: Router, private  bidderService: BidderService) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.isSeller();
    this.isBidder();
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

}
