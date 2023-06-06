import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Todo } from './models/todo';
import * as _ from 'lodash';
import { TodoCreateComponent } from './features/todo-create/todo-create.component';
@Component({
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent
  implements OnInit, OnDestroy, DoCheck, AfterViewInit
{
  constructor(private changeDetector: ChangeDetectorRef) {}

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
    // const todo1 = {... todo};

    // const a = { id: 1, name: 'ali' };
    // a.id = 2;

    // console.log('dizi tipi', typeof this.todos);

    // this.changeDetector.markForCheck();
    // this.changeDetector.detectChanges();
    // this.todos.push(todo);
    // her bir ekleme işleminde dizide yeni bir item eklendiğini anlayıp @Input ile yazılmış referansın güncellenemesini sağlamamız gerekir.

    this.todos = [...this.todos, todo];
  }

  timer: any;
  counter: number = 0;

  ngOnInit(): void {
    // sayfa doma girerken 1 kez çalışır
    // API dan veri çekme işlemleri burada gerçekleşir.
    console.log('ngOnInit', this.todoCreateComponent);
    this.timer = setInterval(() => {
      this.counter++;
      console.log('sayaç', this.counter);
    }, 1000); // 1000 ms de bir çalışan bir interval tanımı
  }

  ngOnDestroy(): void {
    // sayfa domadan çıkarken 1 kez çalışır
    // localStorage dan değer silme, veya timer sonlandırma, rxjs de api call işleminden sonra
    // unsunbribe ile servisi dispose.
    // angular yöntemedeiği çağırıları sonlandırmak
    // web socker bağlantısını koparma.
    clearInterval(this.timer);
    console.log('ngOnDestroy');
  }

  ngDoCheckTest() {}

  ngDoCheck(): void {
    // ngDoCheck
    // ngOninit sonrası 1 kez tetiklenir. @Input olarak tanımlanan değerlerin değişiminde de 1 kez tetiklenir.
    // herhangi bir event değişiminde de tetiklenir. Bu sebeple kullanılması tavsiye edilmeyen bir hook. Angular template check işleminde domdaki component üzerindeki değişim için dirty check işlemi yapar bu hook kullanır.
    clearInterval(this.timer);
    // console.log('ngDoCheck', this.todoCreateComponent);
  }

  @ViewChild('todoCreate') todoCreateComponent!: TodoCreateComponent;

  ngAfterViewInit(): void {
    // template de kullanılan child component referansını ilk yakaladığımız yer burası olduğu için bundan önceki hooklarda bu component daha doma basılmamış olur. ve sonuç undefined döner.
    // this.todoCreateComponent.todo.title = 'deneme1';
    // this.todoCreateComponent.todo.completed = true;
    // this.todoCreateComponent.Add();
    // document.getElementById("1");
    console.log('ngAfterViewInit', this.todoCreateComponent);
  }
}
