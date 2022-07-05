import { Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../seller.service";
import {Seller} from "../seller";
import {User} from "../user";
import {Observable} from "rxjs";

@Component( {
  selector: `user-page`,
  templateUrl: `./user.page.html`,
  styleUrls: [`./user.page.css`]
})

export class userPage implements  OnInit {
  username: String | undefined;
  valid = false;

  constructor(private sellerService: SellerService, private router: ActivatedRoute,
              private navRouter: Router) {}

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
    this.navRouter.navigate([`user-page`,this.username,`selling-page`]);
  }

  createSeller(){
    this.sellerService.addSeller(this.username).subscribe( data =>{
      console.log(data);
      this.navRouter.navigate([`user-page`,this.username,`selling-page`]);
    });
  }

}
