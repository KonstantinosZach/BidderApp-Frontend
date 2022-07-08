import {Component, OnInit} from "@angular/core";
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
  username: String | undefined;
  categories: String[] | undefined;

  constructor(private sellerService: SellerService, private navRouter: Router, private router: ActivatedRoute) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
  }

  saveItem(){
    this.item.currently = this.item.firstBid;
    this.item.category = "";
    this.categories?.forEach( category =>{
      console.log(category);
      this.item.category += " " + category;
    })
    this.sellerService.addItem(this.username, this.item).subscribe({
      complete: () => {
        console.log(),
          this.navRouter.navigate([`user-page`,this.username,`selling-page`])
      },
      error: () => {console.log(this.item); alert("Wrong input... try again")}
    })
  }

  onSubmit(){
    console.log(this.item);
    this.saveItem();
  }

}
