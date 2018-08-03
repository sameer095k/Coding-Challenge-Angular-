import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-alg',
  templateUrl: './grid-alg.component.html',
  styleUrls: ['./grid-alg.component.css']
})
export class GridAlgComponent implements OnInit {

  block: any;
  rows: any;
  numbers: any;
  numbers1: any;
  numbers2: any; 
  constructor() { 

  	this.block = 
  	{
  		count: 13,
  		perRow: 3, 
  	};

  	this.rows = 
  	{
  		num: Math.floor(this.block.count / this.block.perRow),
  		extra: this.block.count % this.block.perRow
  	};

    this.numbers = Array(this.block.perRow).fill(0).map((x,i)=>i);
    this.numbers1 = Array(this.rows.num).fill(0).map((x,i)=>i);
    this.numbers2 = Array(this.rows.extra).fill(0).map((x,i)=>i);


  }

  ngOnInit() {
  }

}
