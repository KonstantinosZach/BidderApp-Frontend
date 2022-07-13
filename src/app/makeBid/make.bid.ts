import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as L from "leaflet";

import {Items} from "../item";
import {Bids} from "../bid";
import {BidderService} from "../bidder.service";

@Component( {
  selector: `app-make-bid-page`,
  templateUrl: `./make.bid.html`,
  styleUrls: [`./make.bid.css`]
})

export class makeBid implements  OnInit {
  username: String | undefined;
  id!: bigint;
  item: Items = {} as Items;
  bid: Bids = {} as Bids;
  offer: number = 0;
  map: L.Map | undefined;

  constructor(private sellerService: SellerService, private router: ActivatedRoute,
              private navRouter: Router, private bidderService: BidderService) {}
  makeOffer(){
      if (confirm("Confirm the bid")){
        let date = this.sellerService.convertCurrentDate();

        if((date > this.item.ends) || (this.item.buyPrice != null && this.item.currently == this.item.buyPrice))
          alert("Auction is closed!");
        else if(this.item.numberOfBids > 0 && this.offer <= this.item.currently)
          alert("bigger offer need!");
        else if(this.item.numberOfBids == 0 && this.offer < this.item.currently)
          alert("bigger offer need!");
        else{
          if(this.item.buyPrice != null && this.offer >= this.item.buyPrice){
            this.offer = this.item.buyPrice;
            this.item.ends = this.sellerService.convertCurrentDate();
          }
          this.item.currently = this.offer;
          this.item.numberOfBids = this.item.numberOfBids + 1;

          this.sellerService.updateSellingItem(this.id, this.item).subscribe(data =>{
              console.log(data);
              this.sellerService.getItemById(this.id).subscribe(data =>{
                this.item = data;
              })
              this.bid.time = date;
              this.bid.amount = this.offer;
              this.bidderService.addBid(this.username, this.id, this.bid).subscribe({
                error: () => {console.log(); alert("error with the bid")}
              })
            },
            error => console.log(error));
        }

      }
      else{
            //Do nothing
      }
  }

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.id = this.router.snapshot.params['id'];
    this.sellerService.getItemById(this.id).subscribe(data =>{
      this.item = data;
      console.log(data);
      setTimeout(() => {
        if(this.item.latitude != undefined && this.item.longitude != undefined) {
          let map = L.map("map").setView([Number(this.item.latitude), Number(this.item.longitude)], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
          }).addTo(map);
        }
      }, 100);
    })

  }

}
