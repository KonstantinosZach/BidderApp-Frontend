import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { UserList } from "./userList/user.list";
import { CreateUser } from "./createUser/create.user";
import { UpdateUser } from "./updateUser/update.user";
import { userDetail } from "./userDetails/user.detail";

const routes: Routes = [
  {path: `users`, component: UserList},
  {path: `create-user`, component: CreateUser},
  {path: `update-user/:username`, component: UpdateUser},
  {path: `user-detail/:username`, component: userDetail},
  {path: ``, redirectTo: `users`, pathMatch: `full`},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
