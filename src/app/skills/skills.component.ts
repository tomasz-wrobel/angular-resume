import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../mocks/mock-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  skills = SKILLS;
  constructor() { }

  ngOnInit(): void {
  }

}
