import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserService } from  '../user.service';
import { Observable } from 'rxjs';

 
@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
  providers: [UserService]
})
export class UserNavComponent implements OnInit {
  users: Observable<any[]>;
  
  constructor(private router: Router, private userService: UserService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  goToUserProfile(profileNavClicked) {
    this.router.navigate(['users', profileNavClicked.$key]);
  };

}
