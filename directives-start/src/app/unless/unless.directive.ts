import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

//Opposite of ngIf -> when it is not the case
@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  //this is a method on the property,
  //which is triggered when the property changes
  //property is created as well
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    //since * (structural) is transformed to ng-template (like <> in React)
    //we need access to it 
    //--> WHAT do we want to render?
    private templateRef: TemplateRef<any>,
    //in order to tell the directive where 
    //to render itself, we need the container
    //--> WHERE do we want to render?
    private vcRef: ViewContainerRef) {}
}
