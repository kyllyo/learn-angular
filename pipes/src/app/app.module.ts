import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localept from '@angular/common/locales/pt';
import {FormsModule} from '@angular/forms';



registerLocaleData(localept, 'pt');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
  ],
  providers: [
    {
        provide: LOCALE_ID,
        useValue: 'pt-BR'
    }
    // SettingsService,
    // {
    //     provide: LOCALE_ID,
    //     deps: [SettingsService],
    //     useFactory: (settingsService) => settingsService.getLocale()
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
