import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

//import 'rxjs/add/operator/switchMap';

//import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
//    nome: 'Loiane',
//    email: 'loiane@email.com.br'
    nome: null,
    email: null
  }
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.usuario)
    console.log(form)
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched
  }

  aplicaCssErro(campo){

    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
    
  }

  consultaCEP(cep){
    var cep = cep.replace(/\D/g,'')
    if(cep != ""){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe(dados => 
            console.log(dados)
            );
      }
    }
    console.log(cep)
  }

}
