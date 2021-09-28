import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList!: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserSList();
  }

  getUserSList(){
    this.userService.getUsersList().subscribe((resp: any) => {
      console.log(resp);
      this.usersList = resp.data;
    });
  }

  editUser(user: any){
    console.log(user);
  }
}
