import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Bidder} from "../bidder";
import {BidderService} from "../bidder.service";

@Component( {
  selector: `app-create-bidder`,
  templateUrl: `./create.bidder.html`,
  styleUrls: [`./create.bidder.css`]
})

export class createBidder implements  OnInit {
  username: String | undefined;
  bidder: Bidder = {} as Bidder;

  constructor(private bidderService: BidderService, private navRouter: Router, private router: ActivatedRoute) {
    this.username = this.router.snapshot.params['username'];
  }

  ngOnInit():void {
  }

  saveBidder(){
    this.bidderService.addBidder(this.username, this.bidder).subscribe({
      complete: () => {
        console.log(),
          this.navRouter.navigate([`user-page/`, this.username,]);
      },
      error: () => {console.log(); alert("Wrong data inserted")}
    })
  }

  onSubmit(){
    console.log(this.bidder);
    this.saveBidder();
  }
}
