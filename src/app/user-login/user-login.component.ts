import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from  '../user.service';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UserService]
})
export class UserLoginComponent implements OnInit{
  users: Observable<any[]>;
  currentRoute: string = this.router.url;
  loggingInUser;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  login(userName: string){
    this.loggingInUser = userName;
  }

  findUser(userName){
    this.router.navigate(['user', userName.$key])
    this.users.forEach(() =>{
      console.log(this.users);
    })
  }

  
}
