import { Component, OnInit } from '@angular/core';
import { CERTIFICATES } from '../mocks/mock-certificates';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.less']
})
export class CertificatesComponent implements OnInit {
  certificates = CERTIFICATES;
  constructor() { }

  ngOnInit(): void {
  }

}
