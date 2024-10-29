import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegulatoryAppBasic';
  clickedNo : number = 0;
  onClick(){
    this.clickedNo++;
  }
}
