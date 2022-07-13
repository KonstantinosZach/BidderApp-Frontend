import { Component, OnInit} from "@angular/core";
import {Items} from "../item";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component( {
  selector: `app-selling-page`,
  templateUrl: `./selling.page.html`,
  styleUrls: [`./selling.page.css`]
})

export class SellingPage implements  OnInit {
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

  startAuction(item:Items){
    this.navRouter.navigate([`user-page`,this.username,`selling-page`,item.id,`start-auction`]);
  }

  deleteItem(item: Items){
    this.sellerService.deleteItem(item.id).subscribe( data =>{
      this.getSellerItems();
    })
  }

  updateItem(item:Items){
    this.navRouter.navigate([`user-page`,this.username,`selling-page`,item.id,`update-item`]);
  }

  getSellerItems(){
    this.sellerService.getSellerItems(this.username).subscribe(data => {
      this.items = data;
      this.activeItems = [];
      let date = this.sellerService.convertCurrentDate();
      this.items?.forEach( (element) => {
        if(((date <= element.ends) && (element.buyPrice == null || element.buyPrice > element.currently)) || element.ends == "")
          this.activeItems.push(element);
      })
    });
  }

}
