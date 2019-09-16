import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-value1',
  templateUrl: './value1.component.html',
  styleUrls: ['./value1.component.css']
})
export class Value1Component implements OnInit {

  @Input() firstName:string;
  @Output() firstNameChange = new EventEmitter<string>();

  onFirstNameChange(model: string){
         
    this.firstName = model;
    this.firstNameChange.emit(model);
}
  
  constructor() { }

  ngOnInit() {
  }

}
