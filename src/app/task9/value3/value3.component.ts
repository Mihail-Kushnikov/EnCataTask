import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-value3',
  templateUrl: './value3.component.html',
  styleUrls: ['./value3.component.css']
})
export class Value3Component implements OnInit {

  
  @Input() emailName:string;
  @Output() emailNameChange = new EventEmitter<string>();

  onEmailNameChange(model: string){
         
    this.emailName = model;
    this.emailNameChange.emit(model);
}

  constructor() { }

  ngOnInit() {
  }

}
