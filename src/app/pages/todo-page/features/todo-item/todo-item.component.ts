import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  // typescript de bir değer farklı tiplere sahip olabilir. buna union types diyoruz. todo değeri Todo tipinde yada hiç değer ataması yapılmamış olabilir.
  @Input() todo: Todo | undefined;
  // kısa yazım şekli
  @Input() todo1!: Todo;
}
