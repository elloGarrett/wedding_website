import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent{
  base: string = "/assets/photos/";
  slideIndex:number = 1;

  constructor(@Inject(DOCUMENT) public _document:Document){
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

    if(slides != null && dots != null){

      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex-1].style.display = "block";
      dots[this.slideIndex-1].className += " active";
    }
      
  }

}
