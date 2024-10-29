// app-child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>{{ message }}</div>
    <button (click)="changeMessage()">Change Message</button>
  `
})
export class AppChildComponent {
  @Input() message: string = "";
  @Output() updateMessage = new EventEmitter<string>();

  changeMessage() {
    console.log('changeMessage()$$');
    const newMessage = 'Updated message from AppChildComponent!';
    this.updateMessage.emit(newMessage);
  }
}