import { Injectable } from '@angular/core';
import { User } from './Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return this.users;
  }
}
