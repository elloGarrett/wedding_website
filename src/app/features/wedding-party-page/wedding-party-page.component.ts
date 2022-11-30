import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-party-page',
  templateUrl: './wedding-party-page.component.html',
  styleUrls: ['./wedding-party-page.component.scss']
})
export class WeddingPartyPageComponent implements OnInit {
  base: string = "/assets/party-photos/";
  base2: string = "/assets/test-party/";
  isMobile:boolean = false;

  maids = [
    {path: `${this.base2}0.jpg`, name:"-----", title: "Maid of Honor", description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {path: `${this.base2}1.jpg`, name:"-----", title: "Bridesmaid", description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {path: `${this.base2}2.jpg`, name:"-----", title: "Bridesmaid", description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  ];

  grooms = [
    {path: `${this.base}Zach_C.JPEG`, name:"Mr. Zach Bax", title: "Best Man", description: 'Mentor, coworker, friend, and sweety'},
    {path: `${this.base}Joel_C.jpg`, name:"Joel Mason", title: "Groomsman", description: 'Little brother, friend, and sweety'},
    {path: `${this.base}Chase_C.jpg`, name:"Chase Mason", title: "Groomsman", description: 'Littler brother, friend, and sweety'},
  ];

  constructor() { }

  ngOnInit(): void {
    window.onresize = () => this.isMobile = window.innerWidth <= 600;
  }

}
