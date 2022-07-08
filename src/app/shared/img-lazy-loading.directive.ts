import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appImgLazyLoading]' //change to 'img' to apply
})
export class ImgLazyLoadingDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }

}
