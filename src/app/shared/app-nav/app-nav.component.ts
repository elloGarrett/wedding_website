import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public _document:Document) { }

  // Underlines current page
  ngOnInit(): void {
    let currentUrl = window.location.href;
    let items = this._document.getElementsByTagName("A") as HTMLCollection;
    let itemRef: string | null;

    for(let i = 0; i < items.length; i++){
      itemRef = items[i].getAttribute('href');

      if(itemRef != null && currentUrl.includes(itemRef)){
       items[i].classList.add("active");
      }
      else{
        items[i].classList.remove("active");
      }
    }
  }

  mobileNav(): void {
    let nav = this._document.getElementById("myTopNav") as HTMLElement;
    let items = this._document.getElementsByClassName("mover") as HTMLCollection;
    nav.classList.toggle("responsive");
    nav.classList.toggle("w3-animate-top");
    for(let i = 0; i < items.length; i++){
      items[i].classList.toggle("w3-animate-top");
    }
  }

  changeIcon(): void{
    let icon = this._document.getElementById("animatedIcon") as HTMLElement;
    icon.classList.toggle("change");
  }

  // Hid nav on bottom scroll
  prevScrollpos = window.pageYOffset;
  @HostListener("document:scroll")
  onScroll() {
    let nav = this._document.getElementById("myTopNav") as HTMLElement;
    let icon = this._document.getElementById("iconContainer") as HTMLElement;
    let currentScrollPos = window.pageYOffset;

    // Closes responsive nav on scoll if open (buggy)
    // icon.classList.remove("change")
    // nav.classList.remove("responsive");
  
    if (this.prevScrollpos > currentScrollPos) {
      nav.style.top = "0";
      icon.style.top = "0";
    } 
    else if(!nav.classList.contains("responsive")){
      nav.style.top = "-80px";
      icon.style.top = "-80px";
    }
    this.prevScrollpos = currentScrollPos;
  }

}
