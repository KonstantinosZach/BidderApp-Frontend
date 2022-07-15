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
import { SellingPage } from "./sellingPage/selling.page";
import { OldItemsList } from "./OldItemsList/old.items.list";
import { createAuction } from "./createAuction/create.auction";
import { startAuction } from "./startAuction/start.auction";
import { UpdateItem } from "./updateItem/update.item";
import { createBidder } from "./createBidder/create.bidder";
import { bidderPage } from "./bidderPage/bidder.page";
import { makeBid } from "./makeBid/make.bid";
import { BidList } from "./bidList/bid.list";
import { wonAuctions } from "./wonAuctions/won.auctions";
import { messageList } from "./messageList/message.list";
import { MessageDetails } from "./messageDetails/message.details";
import { startMessage } from "./startMessage/start.message";

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
    userPage,
    SellingPage,
    OldItemsList,
    createAuction,
    startAuction,
    UpdateItem,
    createBidder,
    bidderPage,
    makeBid,
    BidList,
    wonAuctions,
    messageList,
    MessageDetails,
    startMessage
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
