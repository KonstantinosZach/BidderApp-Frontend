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
  categories: string[] | undefined;
  price: number |undefined;
  location: string | undefined;
  description: string | undefined;
  public items: Items[] | undefined;
  public activeItems: Items[] = [];

  constructor(private bidderService: BidderService, private navRouter: Router,
              private router: ActivatedRoute, private sellerService: SellerService) {
    this.username = this.router.snapshot.params['username'];
  }

  bid(item: Items){
    this.navRouter.navigate([`user-page`,this.username,`bidding-page`,item.id,`make-bid`]);
  }

  ngOnInit():void {
    this.getActiveItems();
  }

  filter(){
    this.getActiveItems()
  }

  clearFilters(){
    this.categories = [];
    this.price = undefined;
    this.location = "";
    this.description = "";
    this.getActiveItems()
  }

  checkCategories(element: Items){
    if (this.categories == undefined || this.categories.length == 0) {
      this.activeItems.push(element);
    }
    else {
      this.categories?.forEach(category => {
        if (!this.activeItems.includes(element) && element.category.includes(category)) {
          this.activeItems.push(element);
        }
      })
    }
  }

  getActiveItems(){
    this.activeItems = [];

    this.bidderService.getBidderItems(this.username).subscribe(data => {
      this.items = data;
      let date = this.sellerService.convertCurrentDate();
      this.items?.forEach( (element) => {
        if((date <= element.ends) && (element.buyPrice > element.currently)){
          if(this.price == undefined && (this.categories == undefined || this.categories.length == 0)
          && this.location == undefined && this.description == undefined){
            this.activeItems.push(element);
          }
          else{
            if(this.price == undefined || this.price >= element.buyPrice) {
              if(this.location == undefined || this.location == "" || this.location == element.location) {
                if(this.description == undefined || this.description == "" ) {
                  this.checkCategories(element);
                }
                else{
                  let words = this.description.split(" ");
                  words.forEach(word=> {
                    if(!this.activeItems.includes(element) && element.description.includes(word)) {
                      this.checkCategories(element);
                    }
                  })
                }
              }
            }
          }
        }
      })
    });
  }
}
