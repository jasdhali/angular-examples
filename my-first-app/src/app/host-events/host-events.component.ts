import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-events',
  templateUrl: './host-events.component.html',
  styleUrls: ['./host-events.component.css'],
  host: {
     class: 'host-events',
     '[class.is-invalid]': 'isInvalid',
     '[class.is-readonly]': 'isReadonly',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(window:resize)': 'onWindowResize()',
    'role': 'button',
    'aria-label': 'Demo button'
  },
})
export class HostEventsComponent implements OnInit {
  isInvalid: boolean = false;

  isReadonly: boolean = false;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log('ngOnInit(): void ');
  }

  color = 'black';

  onMouseEnter() {
    this.color = 'red';
  }

  onMouseLeave() {
    this.color = 'black';
  }
  onWindowResize() {
    console.log('Window resized');
  }
}
