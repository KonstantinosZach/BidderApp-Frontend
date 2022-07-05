import { Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SellerService} from "../seller.service";

@Component( {
  selector: `user-page`,
  templateUrl: `./user.page.html`,
  styleUrls: [`./user.page.css`]
})

export class userPage implements  OnInit {
  username: String | undefined;
  valid = false;

  constructor(private sellerService: SellerService, private router: ActivatedRoute) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.isSeller();
  }

  isSeller(){
    this.sellerService.getSellerByUsername(this.username).subscribe( result => {
      if (result) {
        console.log(result);
        this.valid = true;
      } else {
        this.valid = false;
      }
    })
  }

  goSell(){
    //this.router2.navigate([`update-user`,username]);
  }

  createSeller(){
    //this.router2.navigate([`user-detail`,username]);
  }

}
