import { Component, OnInit} from "@angular/core";
import {SellerService} from "../seller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Items} from "../item";

@Component( {
  selector: `app-start-auction-page`,
  templateUrl: `./start.auction.html`,
  styleUrls: [`./start.auction.css`]
})

export class startAuction implements  OnInit {
  id: bigint | undefined;
  username: string | undefined;
  start = new Date();
  dateEnds: string | undefined;
  hourEnds: string | undefined;

  public items: Items | undefined;

  constructor(private sellerService: SellerService, private router: ActivatedRoute, private navRouter: Router) {}

  startAuction(){
    let month: string;
    let day: string;
    let min: string;
    let hour: string;

    this.sellerService.getItemById(this.id).subscribe(result => {
      this.items = result;

      if(this.start.getMonth().toString().length == 1)
        month = "0" + (this.start.getMonth() + 1);
      else
        month = (this.start.getMonth() + 1).toString();

      if(this.start.getDate().toString().length == 1)
        day = "0" + this.start.getDate();
      else
        day = this.start.getDate().toString();

      if(this.start.getMinutes().toString().length == 1)
        min = "0" + this.start.getMinutes();
      else
        min = this.start.getMinutes().toString();

      if(this.start.getHours().toString().length == 1)
        hour = "0" + this.start.getHours();
      else
        hour = this.start.getHours().toString();

      this.items.started = this.start.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + min;
      this.items.ends = this.dateEnds + " " + this.hourEnds;

      if(this.items.started >= this.items.ends)
        alert("wrong date");
      else {
        this.sellerService.updateItem(this.id, this.items).subscribe(data =>{
          console.log(data);
          this.navRouter.navigate([`user-page`,this.username,`selling-page`,`items-list-page`]);
        })
      }

      console.log(this.items.started);
      console.log(this.items.ends);
    })
  }

  ngOnInit():void {
    this.id = this.router.snapshot.params['id'];
    this.username = this.router.snapshot.params['username'];
  }
}
