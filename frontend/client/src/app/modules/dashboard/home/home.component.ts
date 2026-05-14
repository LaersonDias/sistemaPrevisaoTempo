import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherService } from '../../../services/weather.service';

import { LanguageService } from '../../../services/language.service';

import * as XLSX from 'xlsx';

import { saveAs } from 'file-saver';

import jsPDF from 'jspdf';

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

  constructor(
  private weatherService: WeatherService,
  public languageService: LanguageService
  ) {}
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

  exportCSV() {

  const data = [

    {
      Cidade:
        this.weatherData.name,

      Temperatura:
        this.weatherData.main.temp,

      Humidade:
        this.weatherData.main.humidity
    }

  ];

  const worksheet =
    XLSX.utils.json_to_sheet(data);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    'Clima'
  );

  const excelBuffer =
    XLSX.write(workbook, {
      bookType: 'csv',
      type: 'array'
    });

  const file =
    new Blob(
      [excelBuffer],
      { type: 'text/csv' }
    );

  saveAs(file, 'clima.csv');
  }

  exportPDF() {

  const doc = new jsPDF();

  doc.text(
    `Cidade: ${this.weatherData.name}`,
    10,
    10
  );

  doc.text(
    `Temperatura:
${this.weatherData.main.temp} °C`,
    10,
    20
  );

  doc.text(
    `Humidade:
${this.weatherData.main.humidity}%`,
    10,
    30
  );

  doc.save('clima.pdf');
}
}