import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-party-page',
  templateUrl: './wedding-party-page.component.html',
  styleUrls: ['./wedding-party-page.component.scss']
})
export class WeddingPartyPageComponent implements OnInit {
  base: string = "/assets/party-photos/";
  isMobile:boolean = false;

  maids = [
    {path: `${this.base}Nicole_C.jpg`, name:"Nicole Shultz", title: "Matron of Honor", description: "Claire's best friend since 4th grade. Nicole has been there for every highlight and awkward moment since Claire can remember"},
    {path: `${this.base}Esther_C.jpg`, name:"Esther Rose", title: "Maid of Honor", description: "Claire's college best friend and roommate for the past 3 years. Esther and Claire may be complete opposites, but it makes for the best dynamic duo"},
  ];

  grooms = [
    {path: `${this.base}Zach_C.JPEG`, name:"Mr. Zach Bax", title: "Best Man", description: 'Garrett’s close friend and colleague. Zach was a major influence in Garrett’s early college years, and he still guides him to this day. He is such a sweetie'},
    {path: `${this.base}Joel_C.jpg`, name:"Joel Mason", title: "Groomsman", description: 'Garrett’s younger brother who is a straight up baller. Joel has always been loving and supportive in Garrett’s endeavors, and he is such a sweetie'},
    {path: `${this.base}Chase_C.jpg`, name:"Chase Mason", title: "Groomsman", description: 'Garrett’s youngest brother who is the life of the party. Chase is always silly and uplifting when you need him the most, and he is such a sweetie'},
  ];

  constructor() { }

  ngOnInit(): void {
    window.onresize = () => this.isMobile = window.innerWidth <= 600;
  }

}
