import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/Todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {

  constructor(private todoService : TodoService) { }

  todos$: Observable<Todo[]>;

  ngOnInit() {
    this.todos$ = this.todoService.getTodos();
  }

}
