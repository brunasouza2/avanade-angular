import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/Todo';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {

  constructor(private todoService : TodoService) { }

  todos: Todo[] = [];

  ngOnInit() {
    this.todoService.getTodos().subscribe(value => {
      console.log(value);
      this.todos = value;
    })
  }

}
