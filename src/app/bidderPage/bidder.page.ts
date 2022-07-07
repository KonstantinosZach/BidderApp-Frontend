import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../seller.service";
import {Bidder} from "../bidder";
import {BidderService} from "../bidder.service";
import {Items} from "../item";

@Component( {
  selector: `app-bidder-page`,
  templateUrl: `./bidder.page.html`,
  styleUrls: [`./bidder.page.css`]
})

export class bidderPage implements  OnInit {
  username: String | undefined;
  bidder: Bidder = {} as Bidder;
  public items: Items[] | undefined;
  public activeItems: Items[] = [];

  constructor(private bidderService: BidderService, private navRouter: Router,
              private router: ActivatedRoute, private sellerService: SellerService) {
    this.username = this.router.snapshot.params['username'];
  }

  bid(){

  }

  ngOnInit():void {
    this.getActiveItems();
  }

  getActiveItems(){
    this.bidderService.getBidderItems(this.username).subscribe(data => {
      this.items = data;
      console.log(this.items);
      let date = this.sellerService.convertCurrentDate();
      this.items?.forEach( (element) =>
      {
        //date/price
        if((date <= element.ends) && (element.buyPrice > element.currently)){
          this.activeItems.push(element);
        }
      })
    });
  }

}
