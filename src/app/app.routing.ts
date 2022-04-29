import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { UserList } from "./userList/user.list";
import { CreateUser } from "./createUser/create.user";
import { UpdateUser } from "./updateUser/update.user";
import { userDetail } from "./userDetails/user.detail";
import { WelcomeUser} from "./welcomeUser/welcome.user";
import { LogInUser} from "./logInUser/log.in.user";

const routes: Routes = [
  {path: `users`, component: UserList},
  {path: `create-user`, component: CreateUser},
  {path: `update-user/:username`, component: UpdateUser},
  {path: `user-detail/:username`, component: userDetail},
  {path: `welcome-user`, component: WelcomeUser},
  {path: `log-in-user`, component: LogInUser},
  {path: ``, redirectTo: `welcome-user`, pathMatch: `full`},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
