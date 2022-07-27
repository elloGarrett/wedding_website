import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry-page',
  templateUrl: './registry-page.component.html',
  styleUrls: ['./registry-page.component.scss']
})
export class RegistryPageComponent implements OnInit {
  base: string = "/assets/images/";
  buttonTxt:string = "Shop Registry";
  amazonName:string = this.base + "AmazonRegistry.webp";
  amazonLink:string = "https://www.amazon.com/wedding/garrett-mason-claire-roettgen-camdenton-june-2023/registry/10Q6Y43XEMEUQ";

  constructor() { }

  ngOnInit(): void {
  }

}
