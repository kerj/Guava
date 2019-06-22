import { Injectable } from '@angular/core';
import { User } from './Models/user.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  users: Observable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.users = database.list('users').valueChanges();
    console.log(this.users);
    
  }

  getUserById(userId: string){
    this.database.object('users/' + userId);
  }

  getUsers() { 
    console.log(this.users);
    
    return this.users;
  }
}
