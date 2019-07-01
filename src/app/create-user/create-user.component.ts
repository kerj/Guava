import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User, LastRide } from '../Models/user.model';
import { UserService } from '../user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService]
})

export class CreateUserComponent{
  newUser;
  login;
  constructor(private userService: UserService) {}
  
  createUser(userName, password){
    this.newUser = new User(userName, password,"",new LastRide("0","0","0"));
    
    this.userService.addUser(this.newUser)  
    
  }

}
