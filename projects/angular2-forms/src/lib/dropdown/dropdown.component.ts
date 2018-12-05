import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'a2f-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() label:string;
  @Input() items:Array<{id:string,label:string}>=[];
  @Output() itemSelected:EventEmitter<string>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
