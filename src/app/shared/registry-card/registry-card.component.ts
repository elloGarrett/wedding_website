import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'registry-card',
  templateUrl: './registry-card.component.html',
  styleUrls: ['./registry-card.component.scss']
})
export class RegistryCardComponent implements OnInit {
  @Input() imgPath:string = "";
  @Input() buttonTxt:string = "";
  @Input() buttonLink:string = "garrett-and-claire.com";

  constructor() { }

  ngOnInit(): void {
  }

}
