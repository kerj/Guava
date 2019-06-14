import { Component, Output, Input, EventEmitter } from '@angular/core';
import { GlobalNav } from '../Models/GlobalNav.model';
import { User } from '../Models/user.model';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent{
  @Input() globalNavs: GlobalNav[];
  @Input() selectedUser: User;
  // @Output() userId: 

  getUser(){

  }
 

}
