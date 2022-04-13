import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpsertTournamentComponent } from './upsert-tournament/upsert-tournament.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { SharedModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [UpsertTournamentComponent, LanguageSelectorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule
  ],
  exports: [UpsertTournamentComponent, LanguageSelectorComponent]
})
export class ComponentsModule { }
