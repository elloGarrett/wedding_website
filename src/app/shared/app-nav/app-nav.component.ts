import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public _document:Document) { }

  ngOnInit(): void {
  }
    
  mobileNav(): void {
    let nav = this._document.getElementById("myTopNav") as HTMLElement;
    if (nav?.getAttribute('class')?.includes('responsive')){
      nav.classList.remove('responsive');
    } 
    else {
      nav.classList.add('responsive');
    }
  }

}
