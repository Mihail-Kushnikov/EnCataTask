import { Component, OnInit } from '@angular/core';

const footwears = [
  {category:'Sneakers', firm:'Nike', model:'MENS AIR MONARCH IV', season:'Demiseason', rows:1},
  {category:'Sneakers', firm:'Adidas', model:'Pro Vision', season:'Demiseason', rows:1},
  {category:'Shoes', firm:'Roberto Botticelli', model:'none', season:'Summer', rows:1},
  {category:'Boots', firm:'Emporio Armani', model:'none', season:'Winter', rows:1},
  {category:'Sneakers', firm:'Trussardi Jeans', model:'none', season:'Demiseason', rows:1},
]

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  srchCategory='';
  srchFirm='';
  srchModel='';
  srchSeason='';

  footwears = footwears;

  constructor() { }

  ngOnInit() {
  }

}
