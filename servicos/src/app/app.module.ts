import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosService } from './cursos/cursos.services';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursoModule } from './cursos/curso.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule, 
    CursoModule    
  ],
  providers: [ CursosService, LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
