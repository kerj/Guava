import { Component, Output, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserService } from  '../user.service';
 

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UserService]
})
export class UserLoginComponent implements OnInit{
  users: AngularFireList<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  findUser(userName){
    console.log(userName);
    console.log(this.users);
    
    
    this.router.navigate(['user', userName.$key])
  }

  
}
