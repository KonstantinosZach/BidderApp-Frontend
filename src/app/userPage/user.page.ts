import { Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component( {
  selector: `user-page`,
  templateUrl: `./user.page.html`,
  styleUrls: [`./user.page.css`]
})

export class userPage implements  OnInit {
  username: String | undefined;

  constructor(private router: ActivatedRoute) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
  }

}
