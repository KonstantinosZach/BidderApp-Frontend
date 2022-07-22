import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { UserList } from "./userList/user.list";
import { CreateUser } from "./createUser/create.user";
import { UpdateUser } from "./updateUser/update.user";
import { userDetail } from "./userDetails/user.detail";
import { WelcomeUser} from "./welcomeUser/welcome.user";
import { LogInUser} from "./logInUser/log.in.user";
import { adminPage } from "./adminPage/admin.page";
import { pendingPage } from "./pendingPage/pending.page";
import { PendingUserList } from "./pendingUserList/pending.user.list";
import {userPage} from "./userPage/user.page";
import {SellingPage} from "./sellingPage/selling.page";
import {OldItemsList} from "./OldItemsList/old.items.list";
import {createAuction} from "./createAuction/create.auction";
import {startAuction} from "./startAuction/start.auction";
import {UpdateItem} from "./updateItem/update.item";
import {createBidder} from "./createBidder/create.bidder";
import {bidderPage} from "./bidderPage/bidder.page";
import {makeBid} from "./makeBid/make.bid";
import {BidList} from "./bidList/bid.list";
import {wonAuctions} from "./wonAuctions/won.auctions";
import {messageList} from "./messageList/message.list";
import {MessageDetails} from "./messageDetails/message.details";
import {startMessage} from "./startMessage/start.message";
import {sentMessages} from "./sentMessages/sent.messages";
import {AuthGuard} from "./guard/auth.guard";
import {RoleGuard} from "./guard/role.guard";
import {UserGuard} from "./guard/user.guard";
import {RestrictRoleGuard} from "./guard/restrict.role.guard";


const routes: Routes = [
  {path: `users`, component: UserList, canActivate:[AuthGuard, RoleGuard],data:{role: 'ADMIN_ROLE'}},
  {path: `create-user`, component: CreateUser},
  {path: `update-user/:username`, component: UpdateUser, canActivate:[AuthGuard, RoleGuard],data:{role: 'ADMIN_ROLE'}},
  {path: `user-page/:username/user-detail`, component: userDetail, canActivate:[AuthGuard, UserGuard]},
  {path: `welcome-user`, component: WelcomeUser},
  {path: `log-in-user`, component: LogInUser},
  {path: `admin-page`, component: adminPage, canActivate:[AuthGuard, RoleGuard],data:{role: 'ADMIN_ROLE'}},
  {path: `pending-page/:username`, component: pendingPage},
  {path: `pending-user-list`, component: PendingUserList, canActivate:[AuthGuard, RoleGuard],data:{role: 'ADMIN_ROLE'}},
  {path: ``, redirectTo: `welcome-user`, pathMatch: `full`},
  {path: `user-page/:username`, component: userPage, canActivate:[AuthGuard, UserGuard]},
  {path: `user-page/:username/selling-page`, component: SellingPage, canActivate:[AuthGuard, UserGuard, RoleGuard], data:{role:'SELLER_ROLE'}},
  {path: `user-page/:username/selling-page/old-items-list-page`, component: OldItemsList, canActivate:[AuthGuard, UserGuard, RoleGuard], data:{role:'SELLER_ROLE'}},
  {path: `user-page/:username/selling-page/create-auction`, component: createAuction, canActivate:[AuthGuard, UserGuard, RoleGuard], data:{role:'SELLER_ROLE'}},
  {path: `user-page/:username/selling-page/:id/start-auction`, component: startAuction, canActivate:[AuthGuard, UserGuard, RoleGuard], data:{role:'SELLER_ROLE'}},
  {path: `user-page/:username/selling-page/:id/update-item`, component: UpdateItem, canActivate:[AuthGuard, UserGuard, RoleGuard], data:{role:'SELLER_ROLE'}},
  {path: `user-page/:username/create-bidder`, component: createBidder, canActivate:[AuthGuard, UserGuard, RestrictRoleGuard], data:{role:'BIDDER_ROLE'}},
  {path: `user-page/:username/bidding-page`, component: bidderPage, canActivate:[AuthGuard, UserGuard]},
  {path: `user-page/:username/bidding-page/:id/make-bid`, component: makeBid, canActivate:[AuthGuard, UserGuard, RoleGuard], data:{role:'BIDDER_ROLE'}},
  {path: `user-page/:username/bid-list/:id`, component: BidList, canActivate:[AuthGuard, UserGuard, RoleGuard], data:{role:'SELLER_ROLE'}},
  {path: `user-page/:username/winnings-page`, component: wonAuctions, canActivate:[AuthGuard, UserGuard, RoleGuard], data:{role:'BIDDER_ROLE'}},
  {path: `user-page/:username/message-list`, component: messageList, canActivate:[AuthGuard, UserGuard]},
  {path: `user-page/:username/message-details/:id`, component: MessageDetails, canActivate:[AuthGuard, UserGuard]},
  {path: `user-page/:username/sent-messages`, component: sentMessages, canActivate:[AuthGuard, UserGuard, UserGuard]},
  {path: `user-page/:username/start-message/:username2`, component: startMessage, canActivate:[AuthGuard, UserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
