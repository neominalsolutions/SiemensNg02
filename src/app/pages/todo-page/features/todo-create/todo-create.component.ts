import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent {
  @Output() addClick = new EventEmitter<Todo>();
  // child component kendi içindeki değişimi event fırlatarak root componente bildirir.
  

  todo: Todo = {
    id: -1,
    title: '',
    completed: false,
    userId: 1,
  };

  Add() {
    console.log('todo', this.todo);
    // elimizdeki güncel nesneyi fırlattık.
    this.addClick.emit(this.todo);
    this.reset();
  }

  reset() {
    this.todo.completed = false;
    this.todo.title = '';
  }
}
