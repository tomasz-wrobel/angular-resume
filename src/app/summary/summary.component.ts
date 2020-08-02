import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {

  years = new Date().getFullYear() - 2016;
  constructor() { }

  ngOnInit(): void {
  }

}
