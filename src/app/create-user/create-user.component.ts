import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../Models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent{
  @Input() userList: User[];
  @Output() addEvent = new EventEmitter();

  createUser(userName, password){
    let userId = this.userList.length+1;
    let newUser = new User(userName, password, userId);
    this.userList.push(newUser);
    console.log(this.userList)
  }

  addUser(userToAdd: User){
    this.addEvent.emit(userToAdd);
  }

}
