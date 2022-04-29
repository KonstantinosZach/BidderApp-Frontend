import { Component, OnInit} from "@angular/core";
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component( {
  selector: `log-in-user`,
  templateUrl: `./log.in.user.html`,
  styleUrls: [`./log.in.user.css`]
})

export class LogInUser implements  OnInit {

  username: String | undefined;
  password: String | undefined;
  user: User = {} as User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit():void {}

  logIn(){
    this.userService.getUserByUsername(this.username).subscribe(data =>{
        console.log(data);
        this.user = data;
        if(this.user.password === this.password)
          this.router.navigate([`user-detail/`, this.username]);
        else
          alert("invalid password")
      },
      error => {
      console.log(error)
        alert("invalid username")}
    )}

  onSubmit(){
    console.log(this.username, this.password);
    this.logIn();
  }

}
