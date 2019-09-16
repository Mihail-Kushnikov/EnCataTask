import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-value2',
  templateUrl: './value2.component.html',
  styleUrls: ['./value2.component.css']
})
export class Value2Component implements OnInit {

  
  @Input() secondName:string;
  @Output() secondNameChange = new EventEmitter<string>();

  onSecondNameChange(model: string){
         
    this.secondName = model;
    this.secondNameChange.emit(model);
}

  constructor() { }

  ngOnInit() {
  }

}
