import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRoundedBlock]',
})
export class RoundedBlockDirective {
  constructor(private elementRef: ElementRef) {
    console.log(elementRef);

    if (elementRef.nativeElement.tagName === 'P') {
      elementRef.nativeElement.style.backgroundColor = 'yellow';
      elementRef.nativeElement.style.padding = '10px';
      elementRef.nativeElement.style.borderRadius = '10px';
    }

    // elementRef.nativeElement.textContent =
    //   'Este texto fue manipulado desde la directiva RoundedBlockDirective';
  }
}
