import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DataFormComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DataFormModule { }
