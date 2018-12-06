import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TemplateFormComponent } from './template-form/template-form.component';
//import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormModule } from './template-form/template-form.module';
import { DataFormModule } from './data-form/data-form.module';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    //TemplateFormComponent,
    //DataFormComponent
    
  ],
  imports: [
//    FormsModule,
//    HttpModule,
    BrowserModule,
    TemplateFormModule,
    AppRoutingModule,
    DataFormModule
//    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
