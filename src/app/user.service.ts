import { Injectable } from '@angular/core';
import { User } from './Models/user.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: AngularFireList<any[]>;
  constructor(private database: AngularFireDatabase) { 
    this.users = database.list('users');
  }

  getUserById(userId){

  }

  getUsers() {
    console.log("firebase");
    
    return this.users;
  }
}
