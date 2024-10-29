import { Component ,Input} from '@angular/core';
import { FooterClickedEvent } from './components/footer/footer-clicked.event';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerClicks = 0;
  @Input()
  text!: string;
  title = 'app';

  footerClicks = 0; 

  onTitleClicked() {
    this.headerClicks += 1;
  }

  onHeaderClicked(event: FooterClickedEvent){
    this.footerClicks  = event.totalClicks;
  }
}
