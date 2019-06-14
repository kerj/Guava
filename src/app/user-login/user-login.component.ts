import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  @Output() userToFind = new EventEmitter()

  findUser(userName: string){
    this.userToFind.emit(userName);
  }

  
}
