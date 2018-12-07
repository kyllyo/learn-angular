import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  estado: EstadoBr[];

  constructor(
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService, 
    private http: Http, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.dropdownService.getEstadosBr()
    .subscribe( res => {this.estado = res.json()})

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
      email: [null, [Validators.email, Validators.required]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      })

    });

    /*this.formulario =  new FormGroup({
      nome: new FormControl('Loiane'),
      email: new FormControl('loiane@brasil.com.br')
    });
*/


  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario.valid) {

      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe(
          dados => {
            console.log(dados);
            //reset do form
            //this.resetar();
            //this.formulario.reset();
          },
          (error: any) => alert('erro')
        );
    } else {
      console.log('entrou no else');
      this.verificaValidacoesForm(this.formulario)
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty()
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle)
      }
    })

  }

  resetar() {
    this.formulario.reset();
    this.formulario.get('nome').setValue('Loiane Pereira de Sousa Barros');
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email']
    }
  }



  verificaValidTouched(campo) {

    return !this.formulario.get(campo).valid && (
      this.formulario.get(campo).touched ||
      this.formulario.get(campo).dirty
    );
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }

  }

  consultaCEP() {

    var cep = this.formulario.get("endereco.cep").value.replace(/\D/g, '')

    this.cepService.consultaCEP(cep, this.resetEndereco, this.formulario)
        .subscribe(dados => this.populaDadosForm(dados.json()))

    // var cep = this.formulario.get("endereco.cep").value.replace(/\D/g, '')
    // if (cep != "") {
    //   var validacep = /^[0-9]{8}$/;
    //   if (validacep.test(cep)) {
    //     this.resetEndereco();
    //     this.http.get(`//viacep.com.br/ws/${cep}/json`)
    //       .subscribe(dados => this.populaDadosForm(dados.json()));
    //     //          .pipe( map( dados => console.log(dados) ) );
    //   }
    // }
    // //    console.log(cep)
  }

  resetEndereco(formulario) {
    formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }



  populaDadosForm(dados) {
    this.formulario.patchValue({
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
