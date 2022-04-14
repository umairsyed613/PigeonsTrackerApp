import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DirectiveModule } from '../directives/directive.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DirectiveModule
  ]
})
export class SharedModule { }
