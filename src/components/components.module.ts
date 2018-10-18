import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [ExpandableComponent],
	imports: [CommonModule],
	exports: [ExpandableComponent]
})
export class ComponentsModule {}
