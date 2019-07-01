import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserService } from  '../user.service';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';
import { LastRide } from '../Models/user.model';
 
@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
  providers: [UserService]
})
export class UserNavComponent implements OnInit {
  users: Observable<any[]>;
  lastRide = new LastRide();
  user: User;
  
  constructor(private router: Router, private userService: UserService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  goToUserProfile(profileNavClicked) {
    console.log(profileNavClicked);
    
    let selectedName = profileNavClicked.name;
    let selectedPassword = profileNavClicked.password;
    let selectedDescritpion = profileNavClicked.description;
    this.lastRide = new LastRide(profileNavClicked.lastRide['averageMPH']);
   
    this.user = new User(selectedName, selectedPassword, selectedDescritpion, this.lastRide);
    
    
    this.router.navigate(['users', profileNavClicked.name]);
  };
}




