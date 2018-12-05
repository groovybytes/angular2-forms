import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  dropDownItems=[{id:"x1",label:"item1"},{id:"x2",label:"item2"}]

  dropDownItemSelected(id:string):void{
    alert(id + " was selected");
  }
}
