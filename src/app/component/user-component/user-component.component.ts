import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserData } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-component',

  templateUrl: './user-component.component.html',
  
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  @Input() user?: UserData;
  @Output() updatedUser = new EventEmitter<UserData[]>();

  constructor(private userService: UserService ){}

  ngOnInit(): void{}

  addUser(user:UserData){
    this.userService.addUser(user)
      .subscribe((users : UserData[]) => 
        this.updatedUser.emit(users))
  }
  updateUser(user:UserData){
    this.userService.updateUser(user)
      .subscribe((users : UserData[]) => 
        this.updatedUser.emit(users))
  }
  deleteUser(user:UserData){
    this.userService.deleteUser(user)
      .subscribe((users : UserData[]) => 
        this.updatedUser.emit(users))
  }
}
