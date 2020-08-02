import { Component, OnInit } from '@angular/core';
import { EDUCATION } from '../mocks/mock-education'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {

  education = EDUCATION;
  constructor() { }

  ngOnInit(): void {
  }

}
