import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule} from '@angular/http'

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { routing } from './app.routing';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursosService } from './cursos/cursos.service';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { routing } from './app.routing';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';
//import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
//    AlunosComponent,
//    CursosComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
//    AppRoutingModule,
//    CursosModule,
//    AlunosModule,    
    routing
  ],
  providers: [
    AuthService,
    CursosGuard,
    AlunosGuard,
    AuthGuard
  //  CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
