import { Component, OnDestroy, resolveForwardRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  public isLoading: boolean;
  public users: User[] = [];
  private _subscribeUsers: Subscription;

  constructor(private _userService: UsersService) {

    this.loadUsersList();

  }

  ngOnDestroy(): void {
    this._subscribeUsers.unsubscribe();
  }

  public loadUsersList(): void {

    this.isLoading = true;

    this._subscribeUsers = this._userService.getUsers()
      .subscribe(users => {
        setTimeout(() => {
          this.users = users.slice(0, 4);
          this.isLoading = false;
        }, 3000);
      });

    // test without httpclient

    // setTimeout(() => {

    //   this.users = [
    //     { id: 1, avatar: 'assets/avatar.png', name: 'Mario dos Santos' },
    //     { id: 1, avatar: 'assets/avatar.png', name: 'José dos Santos' },
    //     { id: 1, avatar: 'assets/avatar.png', name: 'Maximilian Rodrigues' },
    //     { id: 1, avatar: 'assets/avatar.png', name: 'Debora Ribeiro' },
    //     { id: 1, avatar: 'assets/avatar.png', name: 'Patricia da Silva' },
    //     { id: 1, avatar: 'assets/avatar.png', name: 'Patrick dos santos' },
    //     { id: 1, avatar: 'assets/avatar.png', name: 'Joelma Ribeiro' }
    //   ];

    //   this.isLoading = false;

    // }, 5000);



  }
}
