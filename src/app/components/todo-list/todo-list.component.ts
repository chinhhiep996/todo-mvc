import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/modules/todo.module';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todo$: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todo$ = this.todoService.todo$;
  }

  onChangeTodoStatus(todo: Todo) {
    this.todoService.changeTodoStatus(todo.id, todo.isCompleted);
  }

  onEditTodo(todo: Todo) {
    this.todoService.editTodo(todo.id, todo.content);
  }

  onDeleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }
}
