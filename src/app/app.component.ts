import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bruna';
  itens = ['7','3','8','1','0'];

  ngOnInit(){

    setTimeout(() => {
      this.title = "Souza";
    }, 3000)
    
  }

  novoItem(){
    const text = prompt('Digite um nome');
    this.itens.push(text);
  }
}
