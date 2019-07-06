import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  senha = '';
  confSenha = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  enviar(){

    console.log("Email: "+this.email+"| Senha: "+this.senha+ "| ConfSenha: "+this.confSenha);

    if(this.senha!=this.confSenha){
      alert('Senhas não coincidem');
      return;
    }
    
    this.authService.createAccount(this.email, this.senha).subscribe((value: any)=>{
      alert('Usuario autenticado com sucesso.');
      console.log(value);
      localStorage.setItem('token', value.idToken);

      this.authService.setUser({
        id: value.localId,
        email: value.email,
      });
    });
  }

}
