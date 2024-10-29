import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickCounterService } from './click-counter.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MyFirstDirectiveDirective } from './directives/my-first-directive.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { HostEventsComponent } from './host-events/host-events.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { OnChangesDemoComponent } from './on-changes-demo/on-changes-demo.component';
import { DoCheckDemoComponent } from './do-check-demo/do-check-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MyFirstDirectiveDirective,
    FooterComponent,HeaderComponent, 
    ComponentAComponent, 
    ComponentBComponent, 
    ComponentCComponent, 
    HostEventsComponent, 
    ListComponent, 
    ListItemComponent, 
    OnChangesDemoComponent, 
    DoCheckDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClickCounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
