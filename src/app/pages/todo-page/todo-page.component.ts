import { Component } from '@angular/core';
import { Todo } from './models/todo';
import * as _ from 'lodash';
@Component({
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
  todos: Todo[] = [];

  onItemAdd($event: Todo) {
    console.log('$event', $event);
    // const todo: Todo = {
    //   id: this.todos.length + 1,
    //   title: $event.title,
    //   completed: $event.completed,
    //   userId: $event.userId,
    // };
    $event.id = this.todos.length + 1;

    const todo = _.cloneDeep($event);
    this.todos.push(todo);
  }
}
