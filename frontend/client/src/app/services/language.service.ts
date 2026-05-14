import { Injectable } from '@angular/core';

import { translations }
from '../shared/i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = 'pt';

  constructor() {

    const saved =
      localStorage.getItem('language');

    if (saved) {
      this.currentLanguage = saved;
    }
  }

  changeLanguage(lang: string) {

    this.currentLanguage = lang;

    localStorage.setItem(
      'language',
      lang
    );
  }

  getTranslations() {

    return translations[
      this.currentLanguage
    ];
  }
}