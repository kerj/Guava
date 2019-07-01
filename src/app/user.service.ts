import { Injectable } from '@angular/core';
import { User, LastRide } from './Models/user.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  users: Observable<any[]>;
  newUser: User; 

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users').valueChanges();
  }

  getUserById(userId: string){
    console.log(userId);
    return this.database.object('users/0' + userId);
  }

  getUsers() {
    return this.users;
  }

  addUser(newUser: User) {
    this.database.list('users').push(newUser);
  }

  updateUser(){

  }
  deleteUser(){

  }
}
