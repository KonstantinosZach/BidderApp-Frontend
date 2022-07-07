import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";

import {Items} from "../item";

@Component( {
  selector: `app-make-bid-page`,
  templateUrl: `./make.bid.html`,
  styleUrls: [`./make.bid.css`]
})

export class makeBid implements  OnInit {
  username: String | undefined;
  id: bigint | undefined;
  item: Items = {} as Items;
  offer: number = 0;

  constructor(private sellerService: SellerService, private router: ActivatedRoute, private navRouter: Router) {}

  makeOffer(){
      if (confirm("Confirm the bid")){
        let date = this.sellerService.convertCurrentDate();

        if(date > this.item.ends)
          alert("Auction is closed!");
        else if(this.item.numberOfBids > 0 && this.offer <= this.item.currently)
          alert("bigger offer need!");
        else if(this.item.numberOfBids == 0 && this.offer < this.item.currently)
          alert("bigger offer need!");
        else{
          //---item----
          //equals to buy price
          //update currently
          //update number of bids

          //---bid----
          //make the bid
        }

      }
      else{

      }
  }

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.id = this.router.snapshot.params['id'];
    this.sellerService.getItemById(this.id).subscribe(data =>{
      this.item = data;
    })

  }

}
