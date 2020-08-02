import { Component, OnInit } from '@angular/core';
import { EXPERIENCES } from '../mocks/mock-experiences'

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.less']
})
export class ExperiencesComponent implements OnInit {

  experiences = EXPERIENCES;
  constructor() { }

  ngOnInit(): void {
  }

}
