import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiUser } from 'src/app/modal/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() fromParent!: any;

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    status: new FormControl('')
  });
  users!: ApiUser;
  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.fromParent);
    if(this.fromParent.action == 'new') {
      console.log("new User");
    }
    else {
      this.userService.getUserById(this.fromParent.id).subscribe((resp: any) => {
        this.profileForm.controls['id'].setValue(resp.data.id);
      this.profileForm.controls['name'].setValue(resp.data.name);
      this.profileForm.controls['gender'].setValue(resp.data.gender);
      this.profileForm.controls['email'].setValue(resp.data.email);
      this.profileForm.controls['status'].setValue(resp.data.status);
      })
    }

    // this.profileForm.controls['id'].setValue(this.fromParent.id);
    // this.profileForm.controls['name'].setValue(this.fromParent.name);
    // this.profileForm.controls['email'].setValue(this.fromParent.email);
    // this.profileForm.controls['gender'].setValue(this.fromParent.gender);
    // this.profileForm.controls['status'].setValue(this.fromParent.status);
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    if(this.fromParent.action ==  'new') {
      this.userService.addApiUser(this.userData()).subscribe((resp: any) => {
        console.log(resp);
      })
    }
    else {
      this.userService.updateApiUser(this.userData()).subscribe((resp: any) => {
        console.log(resp);
      })
    }

  }

  userData(): ApiUser {
    return this.users = {
      id:this.id.value,
      name: this.name.value,
      email: this.email.value,
      gender: this.gender.value,
      status: this.status.value
    }
  }

  // Getter Methods for all FormControl
  get id() {
    return this.profileForm.get('id') as FormControl;
  }
  get name() {
    return this.profileForm.get('name') as FormControl;
  }
  get email() {
    return this.profileForm.get('email') as FormControl;
  }
  get gender() {
    return this.profileForm.get('gender') as FormControl;
  }
  get status() {
    return this.profileForm.get('status') as FormControl;
  }
}
