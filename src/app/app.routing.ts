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
import {ItemsList} from "./itemsList/items.list";
import {createAuction} from "./createAuction/create.auction";
import {startAuction} from "./startAuction/start.auction";
import {UpdateItem} from "./updateItem/update.item";


const routes: Routes = [
  {path: `users`, component: UserList},
  {path: `create-user`, component: CreateUser},
  {path: `update-user/:username`, component: UpdateUser},
  {path: `user-page/:username/user-detail`, component: userDetail},
  {path: `welcome-user`, component: WelcomeUser},
  {path: `log-in-user`, component: LogInUser},
  {path: `admin-page`, component: adminPage},
  {path: `pending-page/:username`, component: pendingPage},
  {path: `pending-user-list`, component: PendingUserList},
  {path: ``, redirectTo: `welcome-user`, pathMatch: `full`},
  {path: `user-page/:username`, component: userPage},
  {path: `user-page/:username/selling-page`, component: SellingPage},
  {path: `user-page/:username/selling-page/items-list-page`, component: ItemsList},
  {path: `user-page/:username/selling-page/create-auction`, component: createAuction},
  {path: `user-page/:username/selling-page/:id/start-auction`, component: startAuction},
  {path: `user-page/:username/selling-page/:id/update-item`, component: UpdateItem},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
