import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit{
  slideIndex = 0;
  isMobile = false;

  // Low quality images for preview and thumbnails
  @Input() photosLQ: Array<any> = [];

  // High quality images for lightbox
  @Input() photosHD: Array<any> = [];
  

  constructor(@Inject(DOCUMENT) public _document:Document){ }

  ngOnInit() {
    // Initializes to mobile view accordingly
    if(window.innerWidth <= 600){
      this.isMobile = true;
    }

    // Changes to mobile view accordingly
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

      // Accounts for index out of bounds
      if (n > slides.length-1) {this.slideIndex = 0}
      if (n < 0) {this.slideIndex = slides.length-1}

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dots[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      // Display slide
      slides[this.slideIndex].style.display = "block";

      // Selected thumbnail
      dots[this.slideIndex].className += " active";

       // Shifts thumbnails every 4 transitions (not after every one)
       baseIndex = this.slideIndex - ((this.slideIndex) % 4);

       // Accounts for end of array
       switch(slides.length - baseIndex){
         case 2: {
           dots[baseIndex].style.display = "block";
           dots[baseIndex+1].style.display = "block";
           dots[baseIndex+2].style.display = "block";
           break;
         }
         case 1: {
           dots[baseIndex].style.display = "block";
           dots[baseIndex+1].style.display = "block"; 
           break;
         }
         case 0: {
           dots[baseIndex].style.display = "block";
           break;
         }
         // Shows 4 thumbnails per section and adjusts if there are less
         default: {
           dots[baseIndex].style.display = "block";
           dots[baseIndex+1].style.display = "block";
           dots[baseIndex+2].style.display = "block";
           dots[baseIndex+3].style.display = "block";
           break;
         }
       }
      
    }
  }
}
