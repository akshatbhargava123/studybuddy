import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
import { GoogleLoginComponent } from './google-login/google-login';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [ExpandableComponent,
    GoogleLoginComponent],
	imports: [CommonModule],
	exports: [ExpandableComponent,
    GoogleLoginComponent]
})
export class ComponentsModule {}
