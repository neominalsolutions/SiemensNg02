import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../../models/todo';
import * as _ from 'lodash';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnChanges {
  // eğer bir component de @ınput tanımlanmış ise OnChanges hook çalışır.
  @Input() items: Todo[] = [];
  num: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  onItemDelete(deleteItem: Todo) {
    // silinen idsi dışındaki filtrele
    // this.items = this.items.filter((x) => x.id != $deleteItem.id);

    this.num = 1;
    _.remove(this.items, (x) => x.id == deleteItem.id);

    // _.push(this.items,)
  }
}
