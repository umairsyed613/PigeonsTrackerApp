import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DirectiveModule } from '../directives/directive.module';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    TranslateModule,
    DirectiveModule
  ]
})
export class SharedModule { }
