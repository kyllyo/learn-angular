import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EstadoBr } from '../models/estado-br';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: Http) { }

  //private estados: EstadoBr[];

  getEstadosBr(){

    return this.http.get('assets/dados/estadosbr.json')
    //.subscribe(res =>  {estados = res.json(); console.log(estados); return estados })

    //console.log(estados)
    //return estados;

  }
}
