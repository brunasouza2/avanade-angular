import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/Todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  emailText = '';
  todo: Todo = {
    title:'',
    description: '',
    finished: false,
    date: '',
    id: null
  }

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
  }

  enviar(){
    console.log(this.todo);
    this.todoService.adicionarTodo(this.todo).subscribe(() =>{
      alert('To-do adicionado com sucesso');
      this.router.navigateByUrl('/todos');
    })
  }

}
