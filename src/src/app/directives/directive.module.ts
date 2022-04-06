import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleVibrateDirective } from './ripple-vibrate.directive';



@NgModule({
  declarations: [RippleVibrateDirective],
  imports: [
    CommonModule
  ],
  exports: [RippleVibrateDirective]
})
export class DirectiveModule { }
