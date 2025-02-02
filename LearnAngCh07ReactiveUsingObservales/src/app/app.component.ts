import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Learning Angular (${timestamp})`;
  }
  private changeTitle(callback:Function) {
    setTimeout( ()=> { callback(); }, 2000);
  }
  title$ = new Observable(observer => {
    setInterval(() => {
    observer.next();
    }, 2000);
    });
  constructor() {
    //this.changeTitle( this.setTitle );
    //this.onComplete().then( this.setTitle );
    this.title$.subscribe(this.setTitle);
  }
  private onComplete(){
    return new Promise<void>(resolve => {
      setInterval( () => {
        resolve();
      } , 2000 );
    });
  }
}
