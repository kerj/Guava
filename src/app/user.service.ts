import { Injectable } from '@angular/core';
import { User } from './Models/user.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: AngularFireList<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.users = database.list('users');
  }

  getUserById(userId: string){
    this.database.object('users/' + userId);
  }

  getUsers() { 
    console.log(this.users);
    
    return this.users;
  }
}
