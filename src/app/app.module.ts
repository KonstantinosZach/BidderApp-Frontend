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

@NgModule({
  declarations: [
    AppComponent,
    UserList,
    CreateUser,
    UpdateUser,
    userDetail
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
