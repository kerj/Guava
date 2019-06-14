import { Component } from '@angular/core';
import { User } from './Models/user.model';
import { GlobalNav } from './Models/GlobalNav.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QUAVA';
  selectedUser = null;
  selectedNav = null;
  create = false;
  profileFeed = false;
  login = false;
  userNav = false;
  userProfile = false;


  masterUserList: User[] = [
    new User('kerj','streamlined', 1),
    new User('ODM','odm4president', 2),
    new User('froome','franceisEZ', 3)
  ];
  
  globalNavMenu: GlobalNav[] = [
    new GlobalNav('Quava', 1),
    new GlobalNav('Sign-Up', 2)
  ];

  globalNavigate(navSelect: GlobalNav){
    this.selectedNav = navSelect;
    console.log(this.selectedNav);
  }

  addUser(){
    console.log(this);
    
    //show hide different componets that make sense....
  }
}
