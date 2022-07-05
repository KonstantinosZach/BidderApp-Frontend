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
import { adminPage } from "./adminPage/admin.page";
import { pendingPage } from "./pendingPage/pending.page";
import { PendingUserList } from "./pendingUserList/pending.user.list"
import { userPage } from  "./userPage/user.page"

@NgModule({
  declarations: [
    AppComponent,
    UserList,
    CreateUser,
    UpdateUser,
    userDetail,
    WelcomeUser,
    LogInUser,
    adminPage,
    pendingPage,
    PendingUserList,
    userPage
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
