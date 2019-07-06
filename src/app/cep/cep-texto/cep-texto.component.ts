import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep/cep.service';

@Component({
  selector: 'app-cep-texto',
  templateUrl: './cep-texto.component.html',
  styleUrls: ['./cep-texto.component.css']
})
export class CepTextoComponent implements OnInit {

  cep: any = {};
  cepText = '';

  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  buscarCep(){
    this.cepService.getCep(this.cepText).subscribe(value => {
      console.log(value)
      this.cep= value;
    });
  }

}
