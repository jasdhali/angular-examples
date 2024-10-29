import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickCounterService {
  clicks = 0;
  clicked = new EventEmitter<number>();
  click(){
    this.clicks += 1;
    this.clicked.emit(this.clicks); 
  }
}
