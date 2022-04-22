import { Component, OnInit} from "@angular/core";
import { User } from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";


@Component( {
  selector: `app-user-detail`,
  templateUrl: `./user.detail.html`,
  styleUrls: [`./user.detail.css`]
})

export class userDetail implements  OnInit {

  user: User = {} as User;
  username: String | undefined;

  constructor(private userService: UserService, private router: ActivatedRoute) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params['username'];
    this.userService.getUserByUsername(this.username).subscribe(data => {
        this.user = data;
      },
      error => console.log(error));
  }

}
