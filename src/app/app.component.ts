import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  topics=['Angular', 'React', 'Vue'];

  userModel = new User('Rob', 'pratyush@gmail.com', 9268223104,'','morning', true);
  constructor() { }

  ngOnInit() {
  }


}
