import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    //selects based on property on a element
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    //Get reference to the element the directive is added to
    constructor(private elementRef: ElementRef){}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}