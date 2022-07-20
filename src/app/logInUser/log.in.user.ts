import { Component, OnInit} from "@angular/core";
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {authService} from "../auth.service";
import {AuthRequest} from "../auth.request";

@Component( {
  selector: `log-in-user`,
  templateUrl: `./log.in.user.html`,
  styleUrls: [`./log.in.user.css`]
})

export class LogInUser implements  OnInit {

  username: string | undefined;
  password: string | undefined;
  user: User = {} as User;
  authRequest: AuthRequest = {} as AuthRequest;

  constructor(private userService: UserService, private  authService: authService, private router: Router) {}

  ngOnInit():void {}

  goToUserPage(){
    console.log(this.authService.getToken());
    this.userService.getUserByUsername(this.username).subscribe(data => {
      this.user = data;
      console.log(data);
      if(this.user.admin)
        this.router.navigate([`admin-page`]);
      else if(!this.user.accepted)
        this.router.navigate([`pending-page/`, this.username]);
      else
        this.router.navigate([`user-page/`, this.username]);
    })
  }

  logIn(){
    if (this.username != null && this.password != null) {
      this.authRequest.username = this.username;
      this.authRequest.password = this.password;
      this.authService.authUser(this.authRequest).subscribe(data => {
        this.goToUserPage();
      },
        error => {
          alert("Wrong password inserted");
        })
    }
    else{
      alert("Error on input...\nTry again!")
    }
  }

  onSubmit(){
    console.log(this.username, this.password);
    this.logIn();
  }

}
