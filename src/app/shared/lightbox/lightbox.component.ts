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
  picsPerRow = [0, 1, 2, 3];  

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

    if(slides != null ){

      // Accounts for index out of bounds
      if (n > slides.length-1) {this.slideIndex = slides.length-1}
      if (n < 0) {this.slideIndex = 0}

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      // Display slide
      slides[this.slideIndex].style.display = "block";
    }
  }
}
