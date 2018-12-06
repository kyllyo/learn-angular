import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private http: Http,private formBuilder: FormBuilder) {

   }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });

    /*this.formulario =  new FormGroup({
      nome: new FormControl('Loiane'),
      email: new FormControl('loiane@brasil.com.br')
    });
*/


  }

  onSubmit(){
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(
          dados => console.log(dados)        
      );

  }

}
