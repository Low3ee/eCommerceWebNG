import { Component } from '@angular/core';
import { UserData } from './models/user-model';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eCommerceWebNG';
  users : UserData[] = []
  targetUser?: UserData;
  

  constructor(private userService : UserService) {}

  ngOnInit() : void {
    this.userService.getUsers().subscribe((result: UserData[]) => (this.users = result));
  }

  updateUserList(){
    this.userService.getUsers().subscribe((result: UserData[]) => (this.users = result));
  }

  editUsers(){
    this.targetUser = new UserData
  }

  updateUser(user: UserData) {
    this.targetUser = user;
  }

  deleteUser(user:UserData){
    this.targetUser = user;
  }
}
