import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

//import 'rxjs/add/operator/switchMap';

import { map } from 'rxjs/operators';

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
    console.log(this.usuario);    
    console.log(form);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(
          dados => {console.log(dados);     
          form.form.reset();
          }
      );
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

  consultaCEP(cep, form){
    var cep = cep.replace(/\D/g,'')
    if(cep != ""){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        this.resetDadosForm(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe( dados => this.populaDadosForm(dados.json(), form) );
//          .pipe( map( dados => console.log(dados) ) );
      }
    }
//    console.log(cep)
  }

  resetDadosForm(form){
        form.form.patchValue({
          endereco: {
            rua: null,
            complemento: null,
            bairro: null,
            cidade: null,
            estado: null
          }
        });
  }    

  populaDadosForm(dados, form){
/*    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }

    });*/

    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

  }

}
