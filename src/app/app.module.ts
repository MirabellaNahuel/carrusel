import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FotosComponent } from './fotos/fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
