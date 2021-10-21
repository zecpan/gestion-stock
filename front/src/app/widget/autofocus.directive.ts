import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private elt: ElementRef<HTMLInputElement>) {
    console.log('instatiate autoFocus directive');
  }
  ngAfterViewInit(): void {
    this.elt.nativeElement.select();
  }
}
