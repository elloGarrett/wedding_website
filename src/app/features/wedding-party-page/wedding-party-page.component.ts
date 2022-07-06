import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-party-page',
  templateUrl: './wedding-party-page.component.html',
  styleUrls: ['./wedding-party-page.component.scss']
})
export class WeddingPartyPageComponent implements OnInit {
  // base: string = "/assets/party-photos/";
  base: string = "/assets/test-party/";
  isMobile:boolean = false;

  maids = [
    {path: `${this.base}0.jpg`, alt: 'img'},
    {path: `${this.base}1.jpg`, alt: 'img'},
    {path: `${this.base}2.jpg`, alt: 'img'},
    {path: `${this.base}3.jpg`, alt: 'img'},
  ];

  grooms = [
    {path: `${this.base}4.jpg`, alt: 'img'},
    {path: `${this.base}5.jpg`, alt: 'img'},
    {path: `${this.base}6.jpg`, alt: 'img'},
    {path: `${this.base}7.jpg`, alt: 'img'},
  ];

  constructor() { }

  ngOnInit(): void {
    window.onresize = () => this.isMobile = window.innerWidth <= 600;
  }

}
