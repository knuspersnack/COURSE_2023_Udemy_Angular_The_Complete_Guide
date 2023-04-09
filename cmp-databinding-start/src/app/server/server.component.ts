import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerComponent implements OnInit, OnChanges {
  @Input("serverElement") 
  element: {
    type: string,
    name: string,
    content: string
  };
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  
  constructor() {
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
  }

  ngOnInit(): void {
    console.log('ngInit called')
  }

  ngAfterContentInit():void {
    console.log("paragraph: " + this.paragraph.nativeElement.textContent);
  }


  ngAfterViewInit():void {
    console.log("local ref: " + this.header.nativeElement.textContent);
  }
}
