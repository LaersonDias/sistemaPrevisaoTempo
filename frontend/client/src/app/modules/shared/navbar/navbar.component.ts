import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [FormsModule],

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isDarkMode = false;

  constructor(
    public languageService: LanguageService
  ) {}

  toggleTheme() {

    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle('dark-mode');

    localStorage.setItem(
      'darkMode',
      this.isDarkMode.toString()
    );
  }

  changeLanguage(event: Event) {

  const selectElement = event.target as HTMLSelectElement;

  const language = selectElement.value;


  console.log(language);

  }

  logout() {

    localStorage.removeItem('user');

    alert('Logout realizado');
  }


  ngOnInit() {

    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme === 'true') {

      this.isDarkMode = true;

      document.body.classList.add('dark-mode');

    }

  }

}