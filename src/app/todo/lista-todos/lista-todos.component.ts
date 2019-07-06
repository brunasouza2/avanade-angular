import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/Todo';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {

  constructor(private todoService : TodoService, private authService: AuthService, private router: Router) { }

  todos: Todo[] = [];

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.todoService.getTodos(user.id).subscribe((todos) => {
        this.todos = todos;
      });
    });
  }

  onDeleteItem(id){
    console.log(id);
    this.todoService.deleteTodo(id).subscribe((u)=>{
      alert('Todo removido com sucesso');
      this.todos = this.todos.filter(todos => todos.id!=id);
    });
  }

}
