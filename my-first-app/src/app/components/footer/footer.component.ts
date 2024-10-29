import { Component , Output, EventEmitter, Input} from '@angular/core';
import { FooterClickedEvent } from './footer-clicked.event'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private totalClicks  = 0;

  constructor() { console.log('initialied');}

  @Input()
  title = 'Footer';

  @Output()
  titleClick = new EventEmitter<FooterClickedEvent>();

  handleTitleClick(){
    const event = new FooterClickedEvent(++this.totalClicks);
    this.titleClick.next( event );
  }
}
