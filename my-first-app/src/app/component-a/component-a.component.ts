import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ClickCounterService } from '../click-counter.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit{
  totalClicks = 0;
  constructor(private clickService: ClickCounterService) { }
  ngOnInit(): void {
    this.clickService.clicked.subscribe( (clicks) => {
      this.totalClicks = clicks;
      }
    );
  }
  onClick() {
    this.clickService.click();
    }  
}
