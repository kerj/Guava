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
    new User('kerj','streamlined'),
    new User('ODM','odm4president'),
    new User('froome','franceisEZ')
  ];
  
  // globalNavMenu: GlobalNav[] = [
  //   new GlobalNav('Quava', 1),
  //   new GlobalNav('Sign-Up', 2)
  // ];

  globalNavigate(navSelect: GlobalNav){
    //action comes from global-nav method 'goTo()'
    this.selectedNav = navSelect;
  
    
    if(this.selectedNav === 'create'){ 
      this.create = true;
      this.login = false;  
      console.log(this.create);
      
    }else{
      this.login = true;
      this.create = false;
    }
  }


  userLogin(userName: string){
    this.selectedUser = userName
    let userNames = this.masterUserList.filter(obj =>{
      return obj.userName === this.selectedUser;
    });
    
     
    if(userNames.length === 1){
      
      //user can log in
      
    }else{
     //no match found for user
      
    }
    
    
  }

  addUser(){
    console.log(this);
    //show hide different componets that make sense....
  }
}
