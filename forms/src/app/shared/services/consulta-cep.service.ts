import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: Http) { }

  consultaCEP(cep, resetaFormCallBack, formulario){
    cep = cep.replace(/\D/g,'')
    if(cep != ""){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        resetaFormCallBack(formulario)
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
  }
}
