import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Items} from "../item";
import {Bids} from "../bid";
import {BidderService} from "../bidder.service";

@Component( {
  selector: `app-bid-list`,
  templateUrl: `./bid.list.html`,
  styleUrls: [`./bid.list.css`]
})

export class BidList implements  OnInit {
  username: String | undefined;
  id: bigint;
  item: Items | undefined;
  bids: Bids[] | undefined;
  map = new Map<bigint, string>();
  status = true;
  buyer = new Map<bigint, boolean>();
  buttonAvailable = false;

  constructor(private sellerService: SellerService, private router: ActivatedRoute,
              private navRouter: Router, private bidderService: BidderService) {
    this.username = this.router.snapshot.params['username'];
    this.id = this.router.snapshot.params['id'];
  }

  goToMessages(){
    let iterator = this.map.entries();
    let firstIteration = iterator.next();
    let winner = firstIteration.value;
    this.navRouter.navigate([`user-page`,this.username,`start-message`,winner[1]]);
  }

  ngOnInit(): void {
    this.sellerService.getItemById(this.id).subscribe( data => {
      this.item = data;

      if(this.item.ends < this.sellerService.convertCurrentDate())
        this.buttonAvailable = true;

      this.sellerService.getAllItemsBids(this.item.id).subscribe(data => {
        this.bids = data;
        this.bids?.forEach( (element) => {
          this.buyer.set(element.id, this.status && this.buttonAvailable);
          this.status = false;
          this.bidderService.getUserByBidId(element.id).subscribe( data => {
            this.map.set(element.id, data.username);
          })
        })
      })
    })
  }
}
