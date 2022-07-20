import { Component, OnInit} from "@angular/core";
import {authService} from "../auth.service";

@Component( {
  selector: `welcome-user`,
  templateUrl: `./welcome.user.html`,
  styleUrls: [`./welcome.user.css`]
})

export class WelcomeUser implements  OnInit {

  constructor(private authService: authService) {}

  ngOnInit():void {
    this.authService.deleteToken();
    this.authService.deleteUserName();
  }

}
