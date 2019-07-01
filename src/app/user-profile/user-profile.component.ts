import { Component, OnInit } from '@angular/core';
import { GlobalNav } from '../Models/GlobalNav.model';
import { User } from '../Models/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {
  userId: string;
  loggedUser;
  users: Observable<any[]>;
 
  constructor(private router: ActivatedRoute, private location: Location, private userService: UserService) {}
  
  ngOnInit() {
    this.users = this.userService.getUsers();
    this.router.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
      console.log(this.userId);
      
    });
    this.loggedUser = this.userService.getUserById(this.userId);
    console.log(this.loggedUser);  
  }

selectUser(user){
    this.loggedUser = user; 
  }

}
