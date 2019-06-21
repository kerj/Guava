import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { GlobalNav } from '../Models/GlobalNav.model';
import { User } from '../Models/user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {
  users: User[];
  @Input() globalNavs: GlobalNav[];
  @Input() selectedUser: User;
  // @Output() userId: 
  constructor(private router: Router, private userService: UserService) {}
  
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  goToUserProfile(profileNavClicked: User) {
    this.router.navigate(['users', profileNavClicked.id]);
  };

}
