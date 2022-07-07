import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit{
  // base: string = "/assets/photos/";
  base: string = "/assets/test_photos/"
  slideIndex: number = 1;
  isMobile:boolean = false;
  photos = [
    {path: `${this.base}0.jpg`, alt: 'img'},
    {path: `${this.base}1.jpg`, alt: 'img'},
    {path: `${this.base}2.jpg`, alt: 'img'},
    {path: `${this.base}3.jpg`, alt: 'img'},
    {path: `${this.base}4.jpg`, alt: 'img'},
    {path: `${this.base}5.jpg`, alt: 'img'},
    {path: `${this.base}6.jpg`, alt: 'img'},
    {path: `${this.base}7.jpg`, alt: 'img'},
    {path: `${this.base}8.jpg`, alt: 'img'},
    {path: `${this.base}9.jpg`, alt: 'img'},
    {path: `${this.base}10.jpg`, alt: 'img'},
    {path: `${this.base}11.jpg`, alt: 'img'},
    {path: `${this.base}12.jpg`, alt: 'img'},
    {path: `${this.base}13.jpg`, alt: 'img'},
    {path: `${this.base}14.jpg`, alt: 'img'},
    {path: `${this.base}15.jpg`, alt: 'img'}
  ];

  constructor(@Inject(DOCUMENT) public _document:Document){}

  ngOnInit() {
    window.onresize = () => this.isMobile = window.innerWidth <= 600;
  }

  // Allows for keyboard navigation in the lightbox
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
    else if (event.key === 'ArrowLeft') {
      this.plusSlides(-1);
    }
    else if (event.key === 'ArrowRight') {
      this.plusSlides(1);
    }
  }

  public openModal(): void {
    const modal = this._document.getElementById("myModal") as HTMLElement;
    if(modal != null){
      modal.style.display = "block";
    } 
  }

  public closeModal(): void {
    const modal = this._document.getElementById("myModal");
    if(modal != null){
      modal.style.display = "none";
    } 
  }
  public plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }
  
  public currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }
  
  public showSlides(n: number) {
    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLDivElement> | null;
    const dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLImageElement> | null;
    let baseIndex;

    if(slides != null && dots != null){

      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dots[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      // Display slide
      slides[this.slideIndex-1].style.display = "block";

      // Selected thumbnail
      dots[this.slideIndex-1].className += " active";
      
      // Shifts thumbnails every 4 transitions (not after every one)
      baseIndex = this.slideIndex - ((this.slideIndex-1) % 4);

      // Shows 4 thumbnails per section and adjusts if there are less
      switch(slides.length - baseIndex){
        case 2: {
          dots[baseIndex-1].style.display = "block";
          dots[baseIndex].style.display = "block";
          dots[baseIndex+1].style.display = "block";
          break;
        }
        case 1: {
          dots[baseIndex-1].style.display = "block";
          dots[baseIndex].style.display = "block"; 
          break;
        }
        case 0: {
          dots[baseIndex-1].style.display = "block";
          break;
        }
        default: {
          dots[baseIndex-1].style.display = "block";
          dots[baseIndex].style.display = "block";
          dots[baseIndex+1].style.display = "block";
          dots[baseIndex+2].style.display = "block";
          break;
        }
      }
      
      
    }
  }
}
