import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Angular2FormsModule} from 'projects/angular2-forms/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
