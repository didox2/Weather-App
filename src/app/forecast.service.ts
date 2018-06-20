import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private forecastdays;

  private d;
  private weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor() { }

  getForecastDays() {
    return this.forecastdays;
  }

  setForecastDays(value) {
    this.forecastdays = value;
  }

  getDayOfWeek(date) {
    this.d = new Date(date);
    return this.weekday[this.d.getDay()];
  }
}
