import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";

import {Items} from "../item";

@Component( {
  selector: `app-old-items-list-page`,
  templateUrl: `./old.items.list.html`,
  styleUrls: [`./old.items.list.css`]
})

export class OldItemsList implements  OnInit {
  username: String | undefined;
  public items: Items[] | undefined;
  public activeItems: Items[] = [];

  constructor(private sellerService: SellerService, private router: ActivatedRoute, private navRouter: Router) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.getSellerItems();
  }

  seeBids(item: Items){
    this.navRouter.navigate([`user-page`,this.username,`bid-list`,item.id]);
  }

  getSellerItems(){
    this.sellerService.getSellerItems(this.username).subscribe(data => {
      this.items = data;
      this.activeItems = [];
      let date = this.sellerService.convertCurrentDate();
      this.items?.forEach( (element) => {
        if(((date > element.ends) || (element.buyPrice != null && element.buyPrice <= element.currently)) && (element.ends != ""))
          this.activeItems.push(element);
      })
    });
  }
}
