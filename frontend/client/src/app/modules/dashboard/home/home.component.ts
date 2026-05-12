import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  city: string = '';
  weatherData: any = null;

  constructor(private weatherService: WeatherService) {}

  searchWeather() {

    if (!this.city) return;

    this.weatherService.getWeather(this.city)
      .subscribe({

        next: (data) => {
          this.weatherData = data;
        },

        error: (err) => {
          console.log('Erro ao buscar clima:', err);
        }

      });

  }
}