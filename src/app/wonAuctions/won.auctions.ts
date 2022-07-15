import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../seller.service";
import {BidderService} from "../bidder.service";
import {UserService} from "../user.service";
import {Items} from "../item";
import {Bids} from "../bid";

@Component( {
  selector: `app-winnings-page`,
  templateUrl: `./won.auctions.html`,
  styleUrls: [`./won.auctions.css`]
})

export class wonAuctions implements  OnInit {
  username: String | undefined;
  public items: Items[] | undefined;
  public oldItems: Items[] = [];

  constructor(private userService: UserService, private bidderService: BidderService, private navRouter: Router,
              private router: ActivatedRoute, private sellerService: SellerService) {
  }

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.getOldItems();
  }

  goToMessages(item:Items){
    let seller;
    this.sellerService.getUserByItemId(item.id).subscribe(data =>{
      seller = data.username;
      this.navRouter.navigate([`user-page`,this.username,`start-message`,seller]);
    });
  }

  getOldItems(){
    this.oldItems = [];
    this.bidderService.getBiddingItems(this.username).subscribe(data => {
      this.items = data;
      let date = this.sellerService.convertCurrentDate();
      this.items?.forEach( (element) => {
        if((date > element.ends || element.buyPrice <= element.currently)){
          this.sellerService.getAllItemsBids(element.id).subscribe(data => {
            let bid = data[0];
            this.bidderService.getUserByBidId(bid.id).subscribe( data => {
              if(data.username == this.username)
                this.oldItems.push(element);
            })
          })
        }
      })
    });
  }

}
