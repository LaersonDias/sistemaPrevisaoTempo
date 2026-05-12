import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isDarkMode = false;

  toggleTheme() {

    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle('dark-mode');

    localStorage.setItem(
      'darkMode',
      this.isDarkMode.toString()
    );
  }

  ngOnInit() {

    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme === 'true') {

      this.isDarkMode = true;

      document.body.classList.add('dark-mode');

    }

  }
}