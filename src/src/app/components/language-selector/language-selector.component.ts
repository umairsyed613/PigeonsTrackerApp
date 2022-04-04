import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {

  languageList = [
    { code: 'en', label: 'English', iconpath: '../../../assets/images/usa.png' },
    { code: 'ur', label: 'Urdu', iconpath: '../../../assets/images/pakistan.png' },
  ];

  constructor(private translateServ: TranslateService, private modalController: ModalController) {

  }

  ngOnInit() { }

  activateLanguage(lang: string) {
    //console.log(`setting language: ${lang}`);
    this.translateServ.use(lang).subscribe({
      error: (err) => console.error(err)
    });
    this.modalController.dismiss();
  }
}
