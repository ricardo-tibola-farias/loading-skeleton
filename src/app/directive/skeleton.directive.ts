import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSkeletonLoading]'
})
export class SkeletonDirective implements OnChanges {
  @Input() appSkeletonLoading: boolean;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngOnChanges(): void {
    if (this.appSkeletonLoading) {
      this.el.nativeElement.classList.add('skeleton');
    } else {
      this.el.nativeElement.classList.remove('skeleton');
    }
  }

}
