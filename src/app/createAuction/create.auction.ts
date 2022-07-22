import {Component, OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Items} from "../item";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../seller.service";

@Component( {
  selector: `app-create-auction`,
  templateUrl: `./create.auction.html`,
  styleUrls: [`./create.auction.css`]
})

export class createAuction implements  OnInit {
  item: Items = {} as Items;
  check: Boolean | undefined;
  username: String | undefined;
  categories: String[] | undefined;

  constructor(private sellerService: SellerService, private navRouter: Router, private router: ActivatedRoute) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
  }

  completeItem(){
    this.item.currently = this.item.firstBid;
    this.item.category = "";
    this.categories?.forEach( category =>{
      this.item.category += " " + category;
    })

    if(this.item.buyPrice == undefined)
      this.item.buyPrice = Number.NaN;

    if(this.check){
      navigator.geolocation.getCurrentPosition((position => {
        this.item.latitude = JSON.stringify(position.coords.latitude);
        this.item.longitude = JSON.stringify(position.coords.longitude);
        this.saveItem();
      }))
    }
    else{
      this.saveItem();
    }
  }

  saveItem(){
    this.sellerService.addItem(this.username, this.item).subscribe({
      complete: () => {
          this.navRouter.navigate([`user-page`,this.username,`selling-page`])
      },
      error: () => {
        alert("Wrong input... try again")
      }
    })
  }

  onSubmit(){
    this.completeItem();
  }

}
