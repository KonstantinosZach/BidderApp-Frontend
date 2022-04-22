import { Component, OnInit} from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";
import {Router} from "@angular/router";

@Component( {
  selector: `app-user-list`,
  templateUrl: `./user.list.html`,
  styleUrls: [`./user.list.css`]
})

export class UserList implements  OnInit {

  public users: User[] | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit():void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  updateUser(username: String){
    this.router.navigate([`update-user`,username]);
  }

  detailUser(username: String){
    this.router.navigate([`user-detail`,username]);
  }

  deleteUser(username: String){
    this.userService.deleteUser(username).subscribe( data =>{
      console.log(data);
      this.getUsers();
    })
  }
}

