import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[inputFormat]'
})
export class InputFormatDirective {

  @Input('inputFormat')
  public format: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('focus')
  public onFocus() {
  }

  @HostListener('blur')
  public onBlur() {
    let value: string = this.el.nativeElement.value;
    switch (this.format) {
      case 'upper': {
        this.el.nativeElement.value = value.toUpperCase();
        break;
      }
      case 'lower': {
        this.el.nativeElement.value = value.toLowerCase();
        break;
      }
      default: {
        this.el.nativeElement.value = 'test';
        break;
      }
    }

  }

}
