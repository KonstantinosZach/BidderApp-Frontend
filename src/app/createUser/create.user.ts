import { Component, OnInit} from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";
import {Router} from "@angular/router";

@Component( {
  selector: `app-user-create`,
  templateUrl: `./create.user.html`,
  styleUrls: [`./create.user.css`]
})

export class CreateUser implements  OnInit {

  user: User = {} as User;
  verify: string = "";

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit():void {

  }

  //the correct way, not deprecated
  saveUser(){
    if(this.verify != this.user.password){
      alert("Passwords does not match!");
    }
    else {
      this.userService.addUser(this.user).subscribe({
        complete: () => {
          console.log(),
            this.router.navigate([`pending-page/`, this.user.username])
        },
        error: () => {
          console.log();
          alert("User already exists")
        }
      })
    }
  }

  onSubmit(){
    this.saveUser();
  }

}
