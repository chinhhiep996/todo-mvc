import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/modules/todo.module';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  isHovered = false;
  isEditing = false;

  constructor() {}

  ngOnInit() {}

  submitEdit(event) {
    const { keyCode } = event;
    event.preventDefault();
    if (keyCode === 13) {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }

  removeTodo() {
    this.deleteTodo.emit(this.todo);
  }

  changeTodoStatus() {
    this.changeStatus.emit({...this.todo, isCompleted: !this.todo.isCompleted});
  }
}
