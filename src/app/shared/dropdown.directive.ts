import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @Input() appDropdownToggle: HTMLUListElement;

  @HostBinding('class.show') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if (this.elRef.nativeElement.contains(event.target) && !this.isOpen) {
      this.appDropdownToggle.classList.add('show');
      this.isOpen = !this.isOpen;

      return;
    }

    this.appDropdownToggle.classList.remove('show');
    this.isOpen = false;
  }

  constructor(private elRef: ElementRef) {}
}
