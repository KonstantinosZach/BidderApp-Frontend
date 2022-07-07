import { Component, OnInit} from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Items} from "../item";
import {SellerService} from "../seller.service";

@Component( {
  selector: `app-update-item`,
  templateUrl: `./update.item.html`,
  styleUrls: [`./update.item.css`]
})

export class UpdateItem implements  OnInit {

  item: Items = {} as Items;
  username: String | undefined;
  id: bigint | undefined;

  constructor(private sellerService: SellerService, private router: ActivatedRoute, private  back: Router) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params[`username`];
    this.id = this.router.snapshot.params[`id`];

    this.sellerService.getItemById(this.id).subscribe(data => {
        this.item = data;
      },
      error => console.log(error));
  }

  onSubmit(){
    this.sellerService.updateItem(this.id, this.item).subscribe(data =>{
        console.log(data);
        this.back.navigate([`user-page`,this.username,`selling-page`]);
      },
      error => console.log(error));
  }
}
