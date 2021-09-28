import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  searchField!: FormControl;
  searches: string[] = [];
  name = new FormControl('');
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(debounceTime(400),
    distinctUntilChanged())
        .subscribe(term => {
          this.searches.push(term);
        });
  }

  updateName() {
    this.name.setValue('LMI Dev Team');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
