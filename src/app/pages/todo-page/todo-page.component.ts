import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
  onItemAdd($event: Todo) {
    console.log('$event', $event);
  }
}
