import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input() todo: Todo | undefined ;
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter()

  constructor() {

  }

    ngOnInit(): void {
    }

    onClick(todo: Todo | undefined) {
      this.todoDelete.emit(todo);
      console.log("onClick has been triggerd")
    }

    onCheckboxClick(todo: any) {
      console.log(todo)
      this.todoCheckbox.emit(todo)
    }
}
