import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.fromParent);
    this.userService.getUserById(this.fromParent.id).subscribe((resp: any) => {
      this.profileForm.controls['id'].setValue(resp.data.id);
    this.profileForm.controls['name'].setValue(resp.data.name);
    this.profileForm.controls['gender'].setValue(resp.data.gender);
    this.profileForm.controls['email'].setValue(resp.data.email);
    this.profileForm.controls['status'].setValue(resp.data.status);
    })
    // this.profileForm.controls['id'].setValue(this.fromParent.id);
    // this.profileForm.controls['name'].setValue(this.fromParent.name);
    // this.profileForm.controls['email'].setValue(this.fromParent.email);
    // this.profileForm.controls['gender'].setValue(this.fromParent.gender);
    // this.profileForm.controls['status'].setValue(this.fromParent.status);
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
