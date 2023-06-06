import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo';
import * as _ from 'lodash';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() items: Todo[] = [];

  onItemDelete(deleteItem: Todo) {
    // silinen idsi dışındaki filtrele
    // this.items = this.items.filter((x) => x.id != $deleteItem.id);

    _.remove(this.items, (x) => x.id == deleteItem.id);

    // _.push(this.items,)
  }
}
