import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    //element to which the directive was added
    constructor(private elRef: ElementRef) {}

    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) 
    toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}