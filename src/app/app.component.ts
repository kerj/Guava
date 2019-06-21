import { Component } from '@angular/core';
import { User } from './Models/user.model';
import { GlobalNav } from './Models/GlobalNav.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GUAVA';
  selectedUser = null;
  selectedNav = null;
  create = false;
  profileFeed = false;
  login = false;
  userNav = false;
  userProfile = false;


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
}
