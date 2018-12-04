import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { FormCanDeactivate } from 'src/app/guards/form-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit , FormCanDeactivate{

  aluno: any;
  inscricao: Subscription
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosSevice: AlunosService
  ) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosSevice.getAluno(id);

        if(this.aluno === null){
          this.aluno = {};
        }
      }

    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){    
    this.formMudou = true;
  }

  podeMudarRota(){
    if(this.formMudou){
      return confirm('Tem certeza que deseja sair dessa página ?')
    }

    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }


}
