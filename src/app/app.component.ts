import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anouksha';
  count: number = 0;
  students: string[] = ["Sahiti","pooja","ravi","Arun"];
  studentDetails: any = [
    {"name":"Sahiti", "marks":"45"},
    {"name":"pooja", "marks":"69"},
    {"name":"ravi", "marks":"55"},
    {"name":"Arun", "marks":"85"}
  ]
  marsk: number[] = [98,56,76,89];
  onClick(){
    this.count = this.count+1;
    console.log(this.count);
  }
}
