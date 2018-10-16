import { Component, Input, ViewChild, ElementRef, Renderer, OnInit } from '@angular/core';

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent {

  @ViewChild("cc") cardContent: any;
  @Input('expanded') _expanded: any;

  constructor(public renderer: Renderer) { }

  ngOnInit() {
    this._expanded = (this._expanded == "true" ? true : false);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "height 300ms, padding 300ms");
    if (this._expanded == true) {
      // console.log('received expanded as true...');
      this.renderer.setElementStyle(this.cardContent.nativeElement, "height", "100%");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "7px 8px");
    }
  }

  ngOnChanges() {
    if (this._expanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "height", "100%");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "7px 8px");
    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "height", "0%");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 8px");
    }
  }

}