import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: Aluno;
  inscricao: Subscription


  constructor(
    private route: ActivatedRoute,
    private alunosSevice: AlunosService,
    private router: Router

  ) { }

  ngOnInit() {

    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];
    //     this.aluno = this.alunosSevice.getAluno(id);
    //   }

    // )
    this.inscricao = this.route.data.subscribe(
      (info: {alunoResolvido: Aluno}) => {
        console.log(info)
        this.aluno = info.alunoResolvido;
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos/'+this.aluno.id+ '/editar'])
    //this.router.navigate(['/alunos',this.aluno.id, 'editar'])
  }

}
