import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsComponent } from '../model/user-details/user-details.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList!: any;
  constructor(private userService: UserService,private ModelService: NgbModal) { }

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
    const modalRef = this.ModelService.open(UserDetailsComponent, {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
    });
    let data = {
      id:user.id,
      action: 'edit'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

  addUser(){
    const modalRef = this.ModelService.open(UserDetailsComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      // keyboard: false,
      // backdrop: 'static'
  });
  let data = {
    action: 'new'
  }

  modalRef.componentInstance.fromParent = data;
  modalRef.result.then((result) => {
    console.log(result);
    this.getUserSList();
  }, (reason) => {
  });
  }
}
