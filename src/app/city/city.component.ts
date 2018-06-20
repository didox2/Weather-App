import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfigService } from '../config/config.service';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})

export class CityComponent implements OnInit {
  cityName;
  localTime;
  currentCondition;
  currentConditionIcon;
  currentTemperature;
  feelsLike;
  wind;
  humidity;

  errorMessage;
  private forecastdays;

  constructor(private configService: ConfigService, private route: ActivatedRoute, private router: Router,
    private forecastService: ForecastService) { }

  ngOnInit() {
    this.configService.isLogoVisible = true;
    this.route.params.subscribe(res => this.cityName = res.name);
    this.loadCityInfo(this.cityName);
  }

  loadCityInfo(city) {
    this.configService.getData(city).subscribe(
      data => this.bindData(data),
      error => this.throwError(error)
    );
  }

  bindData(data) {
    this.cityName = data.location.name;
    this.localTime = data.location.localtime;
    this.currentCondition = data.current.condition.text;
    this.currentConditionIcon = data.current.condition.icon;
    this.currentTemperature = data.current.temp_c;
    this.feelsLike = data.current.feelslike_c;
    this.wind = data.current.wind_kph;
    this.humidity = data.current.humidity;
    this.forecastdays = data.forecast.forecastday;
    document.getElementById('loading-page').style.display = 'none';
  }

  throwError(error) {
    this.errorMessage = 'There is no such city';
    document.getElementById('loading-page').style.display = 'none';
  }

  loadForecast() {
    this.forecastService.setForecastDays(this.forecastdays);
    this.router.navigate(['foreast/' + this.cityName]);
  }
  getDayOfWeek(date) {
    return this.forecastService.getDayOfWeek(date);
  }
  showToday() {
    document.getElementById('forecast').style.display = 'none';
    document.getElementById('today').style.display = 'table';
  }
  showForecast() {
    document.getElementById('today').style.display = 'none';
    document.getElementById('forecast').style.display = 'block';
  }
}
