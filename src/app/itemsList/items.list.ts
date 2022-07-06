import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";

import {Items} from "../item";

@Component( {
  selector: `app-items-list-page`,
  templateUrl: `./items.list.html`,
  styleUrls: [`./items.list.css`]
})

export class ItemsList implements  OnInit {
  username: String | undefined;
  public items: Items[] | undefined;

  constructor(private sellerService: SellerService, private router: ActivatedRoute, private navRouter: Router) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.getSellerItems();
  }

  seeBids(){

  }

  startAuction(item:Items){
    this.navRouter.navigate([`user-page`,this.username,`selling-page`,item.id,`start-auction`]);
  }

  deleteItem(item: Items){
    this.sellerService.deleteItem(item.id).subscribe( data =>{
      console.log(data);
      this.getSellerItems();
    })
  }

  updateItem(item:Items){
    this.navRouter.navigate([`user-page`,this.username,`selling-page`,item.id,`update-item`]);
  }

  getSellerItems(){
    this.sellerService.getSellerItems(this.username).subscribe(data => {
      this.items = data;
    });
  }
}
