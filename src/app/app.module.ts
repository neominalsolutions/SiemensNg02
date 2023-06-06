import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TodoCreateComponent } from './pages/todo-page/features/todo-create/todo-create.component';
import { TodoListComponent } from './pages/todo-page/features/todo-list/todo-list.component';
import { TodoItemComponent } from './pages/todo-page/features/todo-item/todo-item.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TodoCreateComponent,
    TodoListComponent,
    TodoItemComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
