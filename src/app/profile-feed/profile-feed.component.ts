import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireList } from 'angularfire2/database';
import { User } from '../Models/user.model';
import { UserService } from '../user.service';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css'],
  providers: [UserService]
})
export class ProfileFeedComponent implements OnInit {
  userId: string;
  userToDisplay;
  users: Observable<any[]>;

  constructor(private router: Router, private location: Location, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  goToUserProfile(clickedUser){
    this.router.navigate(['users', clickedUser.$key]);
  }
}

