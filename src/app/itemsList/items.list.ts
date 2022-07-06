import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute} from "@angular/router";

import {Items} from "../item";

@Component( {
  selector: `app-items-list-page`,
  templateUrl: `./items.list.html`,
  styleUrls: [`./items.list.css`]
})

export class ItemsList implements  OnInit {
  username: String | undefined;
  public items: Items[] | undefined;

  constructor(private sellerService: SellerService, private router: ActivatedRoute) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.getSellerItems();
  }

  seeBids(){

  }

  startAuction(){

  }

  deleteItem(){

  }

  updateItem(){

  }

  getSellerItems(){
    this.sellerService.getSellerItems(this.username).subscribe(data => {
      this.items = data;
    });
  }
}
