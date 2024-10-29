import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component State Example';
  message = 'Hello from AppComponent!';
  // title = 'my-app';
  updateMessage(newMessage: string) {
    console.log('Event occurred');
    this.message = newMessage;
  }
}
