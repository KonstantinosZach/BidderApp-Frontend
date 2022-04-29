import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { UserList } from "./userList/user.list";
import { CreateUser } from  "./createUser/create.user"
import { AppRoutingModule } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { UpdateUser } from "./updateUser/update.user";
import { userDetail } from "./userDetails/user.detail";
import { WelcomeUser} from "./welcomeUser/welcome.user";
import { LogInUser } from "./logInUser/log.in.user";

@NgModule({
  declarations: [
    AppComponent,
    UserList,
    CreateUser,
    UpdateUser,
    userDetail,
    WelcomeUser,
    LogInUser
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
