import { Component, OnInit} from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";
import {Router} from "@angular/router";

@Component( {
  selector: `pending-user-list`,
  templateUrl: `./pending.user.list.html`,
  styleUrls: [`./pending.user.list.css`]
})

export class PendingUserList implements  OnInit {

  public users: User[] | undefined;
  public userToAccept: User | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit():void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  acceptUser(username: String){
    this.userService.acceptUser(username).subscribe( data =>{
      console.log(data);
      this.getUsers();
    })
  }

  // detailUser(username: String){
  //   //this.router.navigate([`user-detail`,username]);
  //   this.router.navigate([`user-page`, username, `user-detail`]);
  // }

  deleteUser(username: String){
    this.userService.deleteUser(username).subscribe( data =>{
      console.log(data);
      this.getUsers();
    })
  }
}
