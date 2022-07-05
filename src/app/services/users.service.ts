import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(public _httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(this._url);
  }

}
