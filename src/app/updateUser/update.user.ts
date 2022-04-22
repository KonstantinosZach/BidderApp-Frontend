import { Component, OnInit} from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component( {
  selector: `app-update-user`,
  templateUrl: `./update.user.html`,
  styleUrls: [`./update.user.css`]
})

export class UpdateUser implements  OnInit {

  user: User = {} as User;
  username: String | undefined;

  constructor(private userService: UserService, private router: ActivatedRoute, private  back: Router) {}

  ngOnInit():void {
    this.username = this.router.snapshot.params[`username`];

    this.userService.getUserByUsername(this.username).subscribe(data => {
        this.user = data;
      },
      error => console.log(error));
  }

  updateUser(){
    this.userService.updateUser(this.username, this.user).subscribe(data =>{
      console.log(data);
      this.user = {} as User;
      this.back.navigate([`users`]);
    },
      error => console.log(error));
  }

  onSubmit(){
    console.log(this.user);
    this.updateUser();
  }
}
