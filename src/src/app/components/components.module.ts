import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpsertTournamentComponent } from './upsert-tournament/upsert-tournament.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [UpsertTournamentComponent, LanguageSelectorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModuleModule
  ],
  exports: [UpsertTournamentComponent, LanguageSelectorComponent]
})
export class ComponentsModule { }
