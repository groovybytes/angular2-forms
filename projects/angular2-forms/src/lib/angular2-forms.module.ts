import { NgModule } from '@angular/core';
import { Angular2FormsComponent } from './angular2-forms.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [Angular2FormsComponent, DropdownComponent],
  exports: [Angular2FormsComponent,DropdownComponent]
})
export class Angular2FormsModule { }
