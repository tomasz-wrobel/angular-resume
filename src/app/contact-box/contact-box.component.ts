import { Component, OnInit } from '@angular/core';
import { ContactBox } from '../interfaces/contact'
@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styleUrls: ['./contact-box.component.less']
})
export class ContactBoxComponent implements OnInit {
  contactBox: ContactBox = {
    firstName: 'Tomasz',
    lastName: 'Wróbel',
    city: 'Siemianowice Śląskie, Poland',
    email: 'tomasz.wrobel@outlook.com',
    github: 'https://github.com/tomasz-wrobel',
    mobile: '+48 517 841 650',
    title: 'Freelance SAP Hybris Development Consultant',
    linkedin: 'https://www.linkedin.com/in/tomasz-wrobel-00/'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
