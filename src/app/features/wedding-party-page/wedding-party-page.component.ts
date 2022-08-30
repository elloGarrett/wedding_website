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
    {path: `${this.base}0.jpg`, name:"-----", title: "Maid of Honor", description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {path: `${this.base}1.jpg`, name:"-----", title: "Bridesmaid", description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {path: `${this.base}2.jpg`, name:"-----", title: "Bridesmaid", description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  ];

  grooms = [
    {path: `${this.base}4.jpg`, name:"-----", title: "Best Man", description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {path: `${this.base}5.jpg`, name:"-----", title: "Groomsman", description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {path: `${this.base}6.jpg`, name:"-----", title: "Groomsman", description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  ];

  constructor() { }

  ngOnInit(): void {
    window.onresize = () => this.isMobile = window.innerWidth <= 600;
  }

}
