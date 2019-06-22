import { Component, Input, OnInit } from '@angular/core';
import { GlobalNav } from '../Models/GlobalNav.model';
import { User } from '../Models/user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AngularFireList } from 'angularfire2/database';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {
  users: AngularFireList<any>[];
  @Input() globalNavs: GlobalNav[];
  @Input() selectedUser: User;
  // @Output() userId: 
  constructor(private router: Router, private userService: UserService) {}
  
  ngOnInit() {
   
  }

  goToUserProfile(profileNavClicked) {
    this.router.navigate(['users', profileNavClicked.$key]);
  };

}
