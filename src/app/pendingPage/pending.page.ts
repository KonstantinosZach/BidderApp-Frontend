import { Component, OnInit} from "@angular/core";
import {User} from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component( {
  selector: `pending-page`,
  templateUrl: `./pending.page.html`,
  styleUrls: [`./pending.page.css`]
})

export class pendingPage implements  OnInit {

  user: User = {} as User;
  username: String | undefined;

  constructor(private userService: UserService, private router: ActivatedRoute, private  back: Router) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params[`username`];

    this.userService.getUserByUsername(this.username).subscribe(data => {
        this.user = data;
        if(this.user.accepted === true)
          this.back.navigate([`user-detail`,this.user.username]);
      },
      error => console.log(error));
  }

}
