import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserService } from  '../user.service';
 
@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  users: AngularFireList<any[]>;
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  goToUserProfile(profileNavClicked) {
    this.router.navigate(['users', profileNavClicked.$key]);
  };

}
