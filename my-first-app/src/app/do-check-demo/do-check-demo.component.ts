import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check-demo',
  templateUrl: './do-check-demo.component.html',
  styleUrls: ['./do-check-demo.component.css']
})

export class DoCheckDemoComponent {

    currentUser = {
    firstName: 'John',
    lastName: 'Doe'
    };

    previousUser = {
    firstName: '',
    lastName: ''
    };

    ngDoCheck() {
    }
}
