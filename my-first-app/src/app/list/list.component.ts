import { Component , AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterContentInit{

  @ContentChildren(ListItemComponent)
  listItems: QueryList<ListItemComponent> = new QueryList<ListItemComponent>;

  ngAfterContentInit(): void {
    this.listItems.forEach(
      item => {
        item.title = item.title + '( ' + new Date().toLocaleDateString() + ')';
      }
    );
  }
}
