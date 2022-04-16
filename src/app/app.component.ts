import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {UserService} from "./user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: User[] | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    }, (error: HttpErrorResponse) => {
      alert(error.message);
    })
  }

  public  onOpenModal(user: User, mode: string): void {
    const button = document.createElement(`button`);
    const container = document.getElementById(`main-container`);

    button.type = `button`;
    button.style.display = `none`;
    button.setAttribute(`data-toggle`, `modal`);
    if (mode === `add`) {
      button.setAttribute(`data-target`, `#addUserModal`);
    }
    if (mode === `edit`) {
      button.setAttribute(`data-target`, `#editUserModal`);
    }
    if (mode === `delete`) {
      button.setAttribute(`data-target`, `#deleteUserModal`);
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();
  }
}
