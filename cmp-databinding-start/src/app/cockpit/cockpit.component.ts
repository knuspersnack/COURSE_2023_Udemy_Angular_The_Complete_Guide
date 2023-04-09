import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output()
  bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef; 

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(localReferenceValue) {
    this.serverCreated.emit({serverName: localReferenceValue, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(localReferenceValue) {
    this.bluePrintCreated.emit({serverName: localReferenceValue, serverContent: this.serverContentInput.nativeElement.value});
  }

}
